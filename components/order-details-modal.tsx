"use client"

import { Modal } from "@/components/ui/modal"

interface OrderDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  order?: {
    id: number
    name: string
    status: string
    amount: number
    address: string
    phone: string
    notes: string
    deliveryOption: string
  }
}

export function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
  if (!order) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Order ID:</div>
          <div className="col-span-2">{order.id}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Name:</div>
          <div className="col-span-2">{order.name}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Status:</div>
          <div className="col-span-2">{order.status}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Amount:</div>
          <div className="col-span-2">{order.amount}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Address:</div>
          <div className="col-span-2">{order.address}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Phone:</div>
          <div className="col-span-2">{order.phone}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Notes:</div>
          <div className="col-span-2">{order.notes || "N/A"}</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-gray-100 rounded-lg">
          <div className="font-medium">Delivery:</div>
          <div className="col-span-2">{order.deliveryOption}</div>
        </div>
      </div>
    </Modal>
  )
}
