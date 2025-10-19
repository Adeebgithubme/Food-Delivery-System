"use client"

import { Button } from "@/components/ui/button"
import { X, Trash2 } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: (MenuItem & { quantity: number })[]
  total: number
  onRemove: (itemId: string) => void
  onUpdateQuantity: (itemId: string, quantity: number) => void
  onClear: () => void
  onCheckout: () => void
}

export default function CartSidebar({
  isOpen,
  onClose,
  items,
  total,
  onRemove,
  onUpdateQuantity,
  onClear,
  onCheckout,
}: CartSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto mb-6">
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-background rounded hover:bg-border transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-background rounded hover:bg-border transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">₹{total}</span>
              </div>
              <Button
                onClick={onCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2"
              >
                Checkout
              </Button>
              <Button onClick={onClear} variant="outline" className="w-full bg-transparent">
                Clear Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
