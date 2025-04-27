import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MenuSheet } from "@/components/menu-sheet"

export default function ConnectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-200">
        <Link href="/settings" className="text-black">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-medium">Business Name</h1>
        <MenuSheet businessName="Business Name" />
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Connect</h1>
        <p className="text-lg">Delivery Services</p>

        <div className="space-y-4">
          {/* Steadfast Courier */}
          <div className="bg-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-lg font-medium mb-3">Steadfast Courier</p>
            <div className="bg-gray-500 text-white p-6 rounded-lg mb-3 text-center">Service Icon</div>
            <button className="bg-green-500 text-white p-3 rounded-lg flex items-center justify-center gap-2">
              <span>Connect</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Unavailable Service */}
          <div className="bg-gray-300 rounded-xl p-4 flex flex-col">
            <div className="bg-gray-500 text-white p-6 rounded-lg mb-3 text-center">Unavailable Service</div>
            <button className="bg-gray-400 text-white p-3 rounded-lg flex items-center justify-center gap-2">
              <span>Connect</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
