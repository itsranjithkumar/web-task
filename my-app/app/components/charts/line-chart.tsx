"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface LineChartProps {
  data: number[]
  labels: string[]
  color: string
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  showLabels?: boolean
  fillArea?: boolean
  tension?: number
}

export default function LineChart({
  data,
  labels,
  color,
  height = 100,
  showGrid = false,
  showLegend = false,
  showLabels = true,
  fillArea = false,
  tension = 0.4,
}: LineChartProps) {
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

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data,
            borderColor: color,
            backgroundColor: fillArea ? `${color}33` : "transparent",
            borderWidth: 2,
            pointRadius: 0,
            tension,
            fill: fillArea,
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
            grid: {
              display: showGrid,
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                size: 8,
              },
            },
          },
          y: {
            display: showLabels,
            grid: {
              display: showGrid,
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "rgba(255, 255, 255, 0.5)",
              font: {
                size: 8,
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
  }, [data, labels, color, showGrid, showLegend, showLabels, fillArea, tension])

  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <canvas ref={chartRef} />
    </div>
  )
}

