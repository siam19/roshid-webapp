import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { MenuSheet } from "@/components/menu-sheet"

export default function PublicPageSettings() {
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
        <h1 className="text-3xl font-bold">Public Page</h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium">Page URL</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">https://example.com/</span>
              <input
                type="text"
                defaultValue="business-name"
                className="flex-1 p-3 rounded-lg bg-gray-300 outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Page Title</label>
            <input
              type="text"
              defaultValue="Business Name - Official Page"
              className="w-full p-3 rounded-lg bg-gray-300 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Description</label>
            <textarea
              defaultValue="We provide quality services and products for our customers."
              className="w-full p-3 rounded-lg bg-gray-300 outline-none min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Page Visibility</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="visibility" defaultChecked />
                <span>Public</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="visibility" />
                <span>Private</span>
              </label>
            </div>
          </div>

          <button className="w-full p-4 bg-blue-500 text-white rounded-lg mt-6">Save Changes</button>
        </div>
      </div>
    </div>
  )
}
