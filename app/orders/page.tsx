"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Plus } from "lucide-react"
import { OrderDetailsModal } from "@/components/order-details-modal"
import { MenuSheet } from "@/components/menu-sheet"
import { useUser } from '@auth0/nextjs-auth0'

// Sample order data
const sampleOrders = [
  {
    id: 1,
    name: "John Doe",
    status: "Pending",
    amount: 500,
    address: "123 Main St, City",
    phone: "555-1234",
    notes: "Leave at door",
    deliveryOption: "Steadfast",
  },
  {
    id: 2,
    name: "Jane Smith",
    status: "Delivered",
    amount: 500,
    address: "456 Oak Ave, Town",
    phone: "555-5678",
    notes: "",
    deliveryOption: "None",
  },
  {
    id: 3,
    name: "Bob Johnson",
    status: "Processing",
    amount: 500,
    address: "789 Pine Rd, Village",
    phone: "555-9012",
    notes: "Call before delivery",
    deliveryOption: "Steadfast",
  },
  {
    id: 4,
    name: "Alice Brown",
    status: "Cancelled",
    amount: 500,
    address: "321 Elm St, County",
    phone: "555-3456",
    notes: "",
    deliveryOption: "None",
  },
]

export default function OrdersPage() {
  const { user } = useUser()
  const [selectedOrder, setSelectedOrder] = useState<(typeof sampleOrders)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Get user name from Auth0 profile or use default
  const storeName = user?.name || "Roshid"

  const handleOrderClick = (order: (typeof sampleOrders)[0]) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-200">
        <Link href="/" className="text-black">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-medium">{storeName}</h1>

        <MenuSheet businessName={storeName} />
      </header>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col gap-6">
        {/* New Order Button */}
        <Link href="/new-order" className="bg-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-2">
          <Plus size={32} className="text-black" />
          <span className="text-lg font-medium">New Order</span>
        </Link>

        {/* Recent Orders */}
        <div className="mt-4">
          <h2 className="text-lg font-medium mb-4 text-center">Recent Orders</h2>

          <div className="flex flex-col gap-3">
            {sampleOrders.map((order) => (
              <button
                key={order.id}
                className="bg-gray-300 rounded-full p-4 flex justify-between items-center w-full text-left"
                onClick={() => handleOrderClick(order)}
              >
                <div className="w-1/3 text-center">{order.name}</div>
                <div className="w-1/3 text-center">{order.status}</div>
                <div className="w-1/3 text-center">{order.amount}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={selectedOrder || undefined}
      />
    </div>
  )
}