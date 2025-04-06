"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pastSessions, upcomingSessions } from "../lib/data"
import { format } from "date-fns"
import Image from 'next/image'

export default function SessionsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

  const currentDate = new Date()
  const formattedTime = format(currentDate, "h:mm a")
  const formattedDate = format(currentDate, "MMM d, yyyy")

  // Calendar data
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const currentDay = currentDate.getDate()

  // Generate calendar days
  const calendarDays = []
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"]

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i)
  }

  // Format session date
  const formatSessionDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "MMM d, yyyy")
  }

  // Format session time
  const formatSessionTime = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    return `${format(start, "h:mm")} - ${format(end, "h:mm a")}`
  }

  // Get sessions based on active tab
  const sessions = activeTab === "upcoming" ? upcomingSessions : pastSessions

  return (
    <div className="p-6 bg-black min-h-screen">
      {/* Time and Date */}
      <div className="mb-6">
        <div className="text-2xl font-bold">{formattedTime}</div>
        <div className="text-sm text-white">{formattedDate}</div>
      </div>

      {/* Calendar */}
      <div className="mb-8 bg-zinc-900 rounded-lg p-4 max-w-xs">
        <div className="text-sm font-medium mb-2 text-white">{format(currentDate, "MMMM yyyy")}</div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {daysOfWeek.map((day, i) => (
            <div key={i} className="py-1 text-white">
              {day}
            </div>
          ))}
          {calendarDays.map((day, i) => (
            <div
              key={i}
              className={`py-1 rounded-full w-8 h-8 flex items-center justify-center mx-auto ${
                day === currentDay ? "bg-purple-600 text-white" : day ? "hover:bg-zinc-800 cursor-pointer" : ""
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Session Tabs */}
      <div className="mb-4 flex space-x-4">
        <Button
          variant={activeTab === "upcoming" ? "default" : "outline"}
          className={`rounded-full ${activeTab === "upcoming" ? "bg-purple-600 hover:bg-purple-700" : "bg-transparent border-zinc-700 hover:bg-zinc-800"}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Sessions
        </Button>
        <Button
          variant={activeTab === "past" ? "default" : "outline"}
          className={`rounded-full ${activeTab === "past" ? "bg-purple-600 hover:bg-purple-700" : "bg-transparent border-zinc-700 hover:bg-zinc-800"}`}
          onClick={() => setActiveTab("past")}
        >
          Past Sessions
        </Button>
      </div>

      {/* Sessions List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <Card key={session.id} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-white">{session.service.name}</div>
                  {session.status === "pending" && (
                    <div className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">pending</div>
                  )}
                  {session.status === "confirmed" && (
                    <div className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">confirmed</div>
                  )}
                  {session.status === "completed" && (
                    <div className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">completed</div>
                  )}
                  {session.status === "cancelled" && (
                    <div className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">cancelled</div>
                  )}
                </div>
                <div className="text-xs text-white">feedback</div>
              </div>
              <div className="text-xs text-white mb-4">
                {formatSessionDate(session.startDate)} | {formatSessionTime(session.startDate, session.endDate)}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
                      src={session.serviceProvider.profilePicture || "/placeholder.svg"}
                      alt={session.serviceProvider.name}
                      width={32}
                      height={32}
                      className="object-cover"
                      priority={false}
                      unoptimized={session.serviceProvider.profilePicture?.startsWith('https://storage.googleapis.com/')}
                    />
                  </div>
                  <div className="text-xs text-white">{session.serviceProvider.name}</div>
                </div>
                <Button
                  variant="outline"
                  className="h-8 text-xs rounded-full px-4 bg-transparent border-zinc-700 hover:bg-zinc-800"
                >
                  Details
                </Button>
              </div>
              <div className="mt-3 text-xs">
                <div className="flex justify-between text-white">
                  <span>Plan: {session.plan.name}</span>
                  <span>Sessions left: {session.remainingSessions}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

