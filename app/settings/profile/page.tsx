import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { MenuSheet } from "@/components/menu-sheet"

export default function ProfilePage() {
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
        <h1 className="text-3xl font-bold">Profile</h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium">Business Name</label>
            <input
              type="text"
              defaultValue="Business Name"
              className="w-full p-3 rounded-lg bg-gray-300 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              defaultValue="business@example.com"
              className="w-full p-3 rounded-lg bg-gray-300 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Phone</label>
            <input type="tel" defaultValue="555-123-4567" className="w-full p-3 rounded-lg bg-gray-300 outline-none" />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Address</label>
            <textarea
              defaultValue="123 Business St, City, State 12345"
              className="w-full p-3 rounded-lg bg-gray-300 outline-none min-h-[100px]"
            />
          </div>

          <button className="w-full p-4 bg-blue-500 text-white rounded-lg mt-6">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
