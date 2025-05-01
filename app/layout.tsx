import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Roshid",
  description: "order management application",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-md mx-auto min-h-screen bg-gray-100">{children}</main>
      </body>
    </html>
  )
}
