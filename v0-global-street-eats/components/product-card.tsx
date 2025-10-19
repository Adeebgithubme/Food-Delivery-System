"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

interface ProductCardProps {
  item: MenuItem
  onAddToCart: (item: MenuItem, quantity: number) => void
}

export default function ProductCard({ item, onAddToCart }: ProductCardProps) {
  const [showQuantity, setShowQuantity] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleAddClick = () => {
    if (!showQuantity) {
      setShowQuantity(true)
    }
  }

  const handleConfirmAdd = () => {
    onAddToCart(item, quantity)
    setShowQuantity(false)
    setQuantity(1)
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const totalPrice = item.price * quantity

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="aspect-square bg-muted overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 flex-1">{item.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-primary">₹{item.price}</span>
        </div>

        {!showQuantity ? (
          <Button
            onClick={handleAddClick}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
          >
            Add to Cart
          </Button>
        ) : (
          <div className="space-y-3 animate-in fade-in duration-200">
            {/* Quantity Selector with +/- buttons */}
            <div className="flex items-center justify-between bg-muted rounded-lg p-2">
              <button
                onClick={handleDecrement}
                className="p-1 hover:bg-background rounded transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4 text-foreground" />
              </button>
              <span className="font-semibold text-foreground min-w-8 text-center">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="p-1 hover:bg-background rounded transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4 text-foreground" />
              </button>
            </div>

            {/* Total Price Display */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total: </p>
              <p className="text-lg font-bold text-primary">₹{totalPrice}</p>
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handleConfirmAdd}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
            >
              Add {quantity} to Cart
            </Button>

            {/* Cancel Button */}
            <Button
              onClick={() => {
                setShowQuantity(false)
                setQuantity(1)
              }}
              variant="outline"
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
