"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables, ChartConfiguration } from "chart.js"

Chart.register(...registerables)

interface CircularChartProps {
  data: number[]
  colors: string[]
  size?: number
  thickness?: number
  showLabel?: boolean
  label?: string
}

export default function CircularChart({
  data,
  colors,
  size = 120,
  thickness = 10,
  showLabel = false,
  label = "",
}: CircularChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    const config: ChartConfiguration = {
      type: "doughnut",
      data: {
        labels: [], // Add empty labels to prevent undefined
        datasets: [
          {
            data,
            backgroundColor: colors,
            borderWidth: 0,
            hoverOffset: 0, // Prevent hover animation
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        animation: {
          duration: 0 // Disable animations for better performance
        }
      },
    }

    chartInstance.current = new Chart(ctx, config)

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, colors, thickness])

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <canvas ref={chartRef} />
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium">{label}</span>
        </div>
      )}
    </div>
  )
}

