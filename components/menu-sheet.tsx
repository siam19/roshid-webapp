"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useUser } from '@auth0/nextjs-auth0'

interface MenuSheetProps {
  businessName: string
}

export function MenuSheet({ businessName }: MenuSheetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()

  return (
    <>
      {/* Menu Button */}
      <button aria-label="Menu" onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>

      {/* Menu Sheet */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-medium">{businessName}</h2>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4">
              <nav className="space-y-4">
                <Link href="/" className="block p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
                <Link
                  href="/new-order"
                  className="block p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  New Order
                </Link>
                <Link
                  href="/settings"
                  className="block p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Settings
                </Link>
                
                {user && (
                  <a
                    href="/api/auth/logout"
                    className="block p-2 hover:bg-gray-100 rounded-lg text-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Logout
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
