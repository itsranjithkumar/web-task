"use client"

import { Home, Calendar, Activity, User, BarChart2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: BarChart2, href: "/dashboard", label: "Dashboard" },
    { icon: Calendar, href: "/sessions", label: "Sessions" },
    { icon: Activity, href: "/activity", label: "Activity" },
    { icon: User, href: "/profile", label: "Profile" },
  ]

  return (
    <div className="w-16 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 h-screen">
      <div className="w-10 h-10 bg-zinc-800 rounded-md mb-8 flex items-center justify-center">
        <span className="text-white font-bold">F</span>
      </div>
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-md",
                isActive ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-800",
              )}
            >
              <item.icon size={20} />
              <span className="sr-only">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto mb-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative">
          <Image
            src="/placeholder.svg"
            alt="User avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

