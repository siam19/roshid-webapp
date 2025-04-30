import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Auth0Provider } from '@auth0/nextjs-auth0'
import { auth0 } from '@/lib/auth0'

export const metadata: Metadata = {
  title: "Roshid",
  description: "order management application",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = await (auth0 as any).getSession()

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
