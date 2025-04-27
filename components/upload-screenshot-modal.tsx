"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Modal } from "@/components/ui/modal"
import { Upload } from "lucide-react"

interface UploadScreenshotModalProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (imageUrl: string) => void
}

export function UploadScreenshotModal({ isOpen, onClose, onUpload }: UploadScreenshotModalProps) {
  const [imageUrl, setImageUrl] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (imageUrl) {
      onUpload(imageUrl)
      setImageUrl("")
      onClose()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageUrl(event.target.result.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload Screenshot">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="image-url" className="block font-medium">
            Paste Image URL
          </label>
          <input
            id="image-url"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="text-center my-2">OR</div>

        <div className="space-y-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            id="file-upload"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2"
          >
            <Upload size={24} />
            <span>Upload from disk</span>
          </button>
        </div>

        {imageUrl && (
          <div className="mt-4">
            <p className="font-medium mb-2">Preview:</p>
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Preview"
              className="max-h-40 mx-auto object-contain rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-end gap-2 mt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!imageUrl}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Upload
          </button>
        </div>
      </form>
    </Modal>
  )
}
