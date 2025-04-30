import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"
import { Auth0Provider } from '@auth0/nextjs-auth0'
import { auth0 } from '@/lib/auth0'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roshid",
  description: "order management application",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth0.getSession()

  return (
    <html lang="en">
      <body>
        <Auth0Provider user={session?.user}>
          <main className="max-w-md mx-auto min-h-screen bg-gray-100">{children}</main>
        </Auth0Provider>
      </body>
    </html>
  )
}
