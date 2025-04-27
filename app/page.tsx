"use client"

import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { MenuSheet } from '@/components/menu-sheet'

export default function HomePage() {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    // Redirect to orders page if user is authenticated
    if (user && !isLoading) {
      router.push('/orders')
    }
    
    // Redirect to Auth0 login if unauthorized error
    if (error && error.message === 'Unauthorized') {
      window.location.href = '/auth/login'
    }
  }, [user, isLoading, router, error])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // For other errors (not Unauthorized)
  if (error && error.message !== 'Unauthorized') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-500">An error occurred: {error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-200">
        <div className="w-8"></div> {/* Empty div for spacing */}
        <h1 className="text-lg font-medium">Roshid</h1>
        <MenuSheet businessName="Business Name" />
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Welcome to Roshid</h2>
          
          <p className="mb-8 text-gray-600">
            Please log in to access your orders and manage your business.
          </p>
          
          <a 
            href="/auth/login" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  )
}
