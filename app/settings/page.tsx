import Link from "next/link"
import { ChevronLeft, ChevronRight, User, Plus, FileText, HelpCircle } from "lucide-react"
import { MenuSheet } from "@/components/menu-sheet"

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-200">
        <Link href="/" className="text-black">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-medium">Business Name</h1>
        <MenuSheet businessName="Business Name" />
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <div className="space-y-4">
          {/* Profile */}
          <Link href="/settings/profile" className="bg-gray-300 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <User size={24} />
              <span className="text-lg">Profile</span>
            </div>
            <ChevronRight size={24} />
          </Link>

          {/* Connect */}
          <Link href="/settings/connect" className="bg-gray-300 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Plus size={24} />
              <span className="text-lg">Connect</span>
            </div>
            <ChevronRight size={24} />
          </Link>

          {/* Public Page */}
          <Link href="/settings/public-page" className="bg-gray-300 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText size={24} />
              <span className="text-lg">Public Page</span>
            </div>
            <ChevronRight size={24} />
          </Link>

          {/* Support */}
          <Link href="/settings/support" className="bg-gray-300 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HelpCircle size={24} />
              <span className="text-lg">Support</span>
            </div>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}
