"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { UploadScreenshotModal } from "@/components/upload-screenshot-modal"
import { MenuSheet } from "@/components/menu-sheet"

export default function NewOrderPage() {
  const [deliveryOption, setDeliveryOption] = useState<"Steadfast" | "None">("Steadfast")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [screenshotUrl, setScreenshotUrl] = useState("")

  const handleUpload = (imageUrl: string) => {
    setScreenshotUrl(imageUrl)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-200">
        <Link href="/" className="text-black">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-medium">User Name</h1>
        <MenuSheet businessName="Business Name" />
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col gap-6">
        {/* Upload Screenshot */}
        <button
          className="bg-gray-300 rounded-3xl p-6 flex items-center justify-center"
          onClick={() => setIsUploadModalOpen(true)}
        >
          {screenshotUrl ? (
            <div className="flex flex-col items-center gap-2">
              <img src={screenshotUrl || "/placeholder.svg"} alt="Screenshot" className="max-h-20 object-contain" />
              <span className="text-sm">Change Screenshot</span>
            </div>
          ) : (
            <span className="text-lg font-medium">Upload Screenshot</span>
          )}
        </button>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="w-24 font-medium">Name:</label>
            <input type="text" className="flex-1 p-3 rounded-full bg-gray-300 outline-none" />
          </div>

          <div className="flex items-center">
            <label className="w-24 font-medium">Phone:</label>
            <input type="tel" className="flex-1 p-3 rounded-full bg-gray-300 outline-none" />
          </div>

          <div className="flex items-center">
            <label className="w-24 font-medium">Address:</label>
            <input type="text" className="flex-1 p-3 rounded-full bg-gray-300 outline-none" />
          </div>

          <div className="flex items-center">
            <label className="w-24 font-medium">Notes:</label>
            <input type="text" className="flex-1 p-3 rounded-full bg-gray-300 outline-none" />
          </div>
        </div>

        {/* Amount to Collect */}
        <div className="mt-4">
          <p className="text-center font-medium mb-2">Amount to Collect:</p>
          <input type="number" className="w-full p-3 rounded-full bg-gray-300 outline-none" />
        </div>

        {/* Delivery Options */}
        <div className="mt-4">
          <p className="text-center font-medium mb-2">Delivery</p>
          <div className="flex gap-4 justify-center">
            <button
              className={`p-4 rounded-xl ${
                deliveryOption === "Steadfast" ? "border-2 border-green-500 bg-gray-300" : "bg-gray-300"
              }`}
              onClick={() => setDeliveryOption("Steadfast")}
            >
              Steadfast
            </button>
            <button
              className={`p-4 rounded-xl ${
                deliveryOption === "None" ? "border-2 border-green-500 bg-gray-300" : "bg-gray-300"
              }`}
              onClick={() => setDeliveryOption("None")}
            >
              None
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="mt-4 w-full p-4 bg-blue-500 text-white rounded-full">Confirm</button>
      </div>

      {/* Upload Screenshot Modal */}
      <UploadScreenshotModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  )
}
