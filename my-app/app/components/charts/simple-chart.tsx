"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface SimpleChartProps {
  data: {
    date: string
    [key: string]: string
  }[]
  yAxis: {
    title: string
    chart: string
    unit: string
  }[]
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  showLabels?: boolean
}

type ChartDataset = {
  label: string
  data: number[]
  borderWidth: number
  pointRadius: number
  tension: number
  type?: 'line' | 'bar'
  fill?: boolean
  borderColor?: string
  backgroundColor?: string | string[]
  borderRadius?: number
  barThickness?: number
}

export default function SimpleChart({
  data,
  yAxis,
  height = 100,
  showGrid = false,
  showLegend = false,
  showLabels = true,
}: SimpleChartProps) {
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

    const labels = data.map((item) => {
      const date = new Date(item.date)
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    })

    const dataKey = yAxis[0].title
    const chartType = yAxis[0].chart

    // Prepare dataset
    const dataset: ChartDataset = {
      label: dataKey.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      data: data.map((item) => Number.parseFloat(item[dataKey] || "0")),
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
    }

    // Configure based on chart type
    if (chartType === "area") {
      dataset.type = "line"
      dataset.fill = true

      // Set colors based on the data key
      if (dataKey.includes("strain")) {
        dataset.borderColor = "#ef4444"
        dataset.backgroundColor = "rgba(239, 68, 68, 0.2)"
      } else if (dataKey.includes("tdee")) {
        dataset.borderColor = "#3b82f6"
        dataset.backgroundColor = "rgba(59, 130, 246, 0.2)"
      } else if (dataKey.includes("activity")) {
        dataset.borderColor = "#ec4899"
        dataset.backgroundColor = "rgba(236, 72, 153, 0.2)"
      } else if (dataKey.includes("workout")) {
        dataset.borderColor = "#f59e0b"
        dataset.backgroundColor = "rgba(245, 158, 11, 0.2)"
      } else {
        dataset.borderColor = "#10b981"
        dataset.backgroundColor = "rgba(16, 185, 129, 0.2)"
      }
    } else if (chartType === "bar-negative") {
      dataset.type = "bar"
      dataset.borderRadius = 4
      dataset.barThickness = 16

      // Set colors based on positive/negative values
      dataset.backgroundColor = data.map((item) => {
        const value = Number.parseFloat(item[dataKey] || "0")
        return value >= 0 ? "rgba(16, 185, 129, 0.8)" : "rgba(239, 68, 68, 0.8)"
      })
    }

    chartInstance.current = new Chart(ctx, {
      type: chartType === "area" ? "line" : "bar",
      data: {
        labels,
        datasets: [dataset],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: showLegend,
            position: "top",
            labels: {
              color: "rgba(255, 255, 255, 0.7)",
              font: {
                size: 10,
              },
            },
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
  }, [data, yAxis, showGrid, showLegend, showLabels])

  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <canvas ref={chartRef} />
    </div>
  )
}

