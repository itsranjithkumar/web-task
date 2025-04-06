"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface BarChartProps {
  data: number[]
  labels: string[]
  colors: string[] | string
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  showLabels?: boolean
  stacked?: boolean
}

export default function BarChart({
  data,
  labels,
  colors,
  height = 200,
  showGrid = false,
  showLegend = false,
  showLabels = true,
  stacked = false,
}: BarChartProps) {
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

    const backgroundColor = Array.isArray(colors) ? colors : Array(data.length).fill(colors)

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: 0,
            borderRadius: 4,
            barThickness: 16,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: showLegend,
          },
        },
        scales: {
          x: {
            display: showLabels,
            stacked,
            grid: {
              display: showGrid,
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                size: 10,
              },
            },
          },
          y: {
            display: showLabels,
            stacked,
            grid: {
              display: showGrid,
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                size: 10,
              },
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data, labels, colors, showGrid, showLegend, showLabels, stacked])

  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <canvas ref={chartRef} />
    </div>
  )
}

