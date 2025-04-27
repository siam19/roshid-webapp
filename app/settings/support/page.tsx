import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { MenuSheet } from "@/components/menu-sheet"

export default function SupportPage() {
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
        <h1 className="text-3xl font-bold">Support</h1>

        <div className="space-y-6">
          <div className="bg-gray-300 rounded-xl p-4">
            <h2 className="text-lg font-medium mb-2">Contact Support</h2>
            <p className="mb-4">Need help? Our support team is available 24/7.</p>
            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">Contact Support</button>
          </div>

          <div className="bg-gray-300 rounded-xl p-4">
            <h2 className="text-lg font-medium mb-2">FAQs</h2>
            <p className="mb-4">Find answers to commonly asked questions.</p>
            <Link href="#" className="flex items-center gap-1 text-blue-500">
              View FAQs <ExternalLink size={16} />
            </Link>
          </div>

          <div className="bg-gray-300 rounded-xl p-4">
            <h2 className="text-lg font-medium mb-2">User Guide</h2>
            <p className="mb-4">Learn how to use all features of our platform.</p>
            <Link href="#" className="flex items-center gap-1 text-blue-500">
              Read User Guide <ExternalLink size={16} />
            </Link>
          </div>

          <div className="bg-gray-300 rounded-xl p-4">
            <h2 className="text-lg font-medium mb-2">Report an Issue</h2>
            <p className="mb-4">Found a bug or having problems? Let us know.</p>
            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">Report Issue</button>
          </div>
        </div>
      </div>
    </div>
  )
}
