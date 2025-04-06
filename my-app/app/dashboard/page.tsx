"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import ComposedChart from "../components/charts/composed-chart"
import SimpleChart from "../components/charts/simple-chart"
import { bodyBatteryData, strainData, summaryData, tabsData } from "../lib/data"

type TabKey = "body_battery" | "strain" | "recovery" | "sedentary_stress"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("body_battery")

  // Get the main chart data based on active tab
  const getMainChartData = () => {
    if (activeTab === "body_battery") {
      return bodyBatteryData.find((item) => item.title === "Body Battery Trend")
    } else if (activeTab === "strain") {
      return strainData.find((item) => item.title === "Total Strain Trend")
    }
    return bodyBatteryData[0] // Default to body battery
  }

  // Get small charts based on active tab
  const getSmallCharts = () => {
    if (activeTab === "body_battery") {
      return summaryData
    } else if (activeTab === "strain") {
      return strainData.filter((item) => item.size === "small")
    }
    return summaryData // Default to summary data
  }

  const mainChart = getMainChartData()
  const smallCharts = getSmallCharts()

  return (
    <div className="p-6 bg-black min-h-screen">
      {/* Summary Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {summaryData.map((chart, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader className="p-3">
              <CardTitle className="text-xs text-white">{chart.title.toLowerCase()}</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <ComposedChart data={chart.data} yAxis={chart.yAxis} height={60} showLabels={false} showLegend={false} />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Battery Status Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {tabsData.map((tab) => (
          <Card
            key={tab.key}
            className={
              activeTab === tab.key
                ? "bg-zinc-900 border-zinc-800 cursor-pointer transition-all border-purple-600"
                : "bg-zinc-900 border-zinc-800 cursor-pointer transition-all"
            }
            onClick={() => setActiveTab(tab.key as TabKey)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white">{tab.title}</div>
                  <div className="text-2xl font-bold text-white">
                    {tab.value}
                    {tab.unit}
                  </div>
                </div>
                <div
                  className={
                    tab.change_type === "increase"
                      ? "flex items-center text-xs text-green-500"
                      : "flex items-center text-xs text-red-500"
                  }
                >
                  {tab.change_type === "increase" ? (
                    <ArrowUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 mr-1" />
                  )}
                  {tab.change}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Chart */}
      {mainChart && (
        <div className="mb-6">
          <div className="mb-2 text-sm text-white">{mainChart.title.toLowerCase()}</div>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4">
              <ComposedChart
                data={mainChart.data}
                yAxis={mainChart.yAxis}
                height={200}
                showGrid={true}
                showLabels={true}
              />
              <div className="mt-4 text-xs text-white">
                <p>{mainChart.llm_insights}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Small Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {smallCharts.map((chart, index) => (
          <Card key={index} className="bg-zinc-900 border-zinc-800">
            <CardHeader className="p-3">
              <CardTitle className="text-xs text-white">{chart.title.toLowerCase()}</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              {chart.type === "simple" ? (
                <SimpleChart data={chart.data} yAxis={chart.yAxis} height={120} showGrid={false} />
              ) : (
                <ComposedChart data={chart.data} yAxis={chart.yAxis} height={120} showGrid={false} showLegend={false} />
              )}
              {chart.llm_insights && (
                <div className="mt-2 text-xs text-white">
                  <p>{chart.llm_insights}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

