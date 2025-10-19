"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

interface OffersModalProps {
  isOpen: boolean
  onClose: () => void
}

const offers = [
  {
    id: 1,
    title: "10% Off on Sushi Rolls",
    description: "Get 10% discount on all sushi rolls this week!",
    code: "SUSHI10",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free - Tacos",
    description: "Order any 2 tacos and get 1 free taco of equal or lesser value",
    code: "TACOS21",
  },
  {
    id: 3,
    title: "₹50 Off on Orders Above ₹300",
    description: "Use code SAVE50 on orders above ₹300",
    code: "SAVE50",
  },
  {
    id: 4,
    title: "Free Dessert with Shawarma",
    description: "Order any shawarma and get a free dessert",
    code: "SHAWARMA",
  },
]

export default function OffersModal({ isOpen, onClose }: OffersModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Special Offers</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid gap-4">
            {offers.map((offer) => (
              <div key={offer.id} className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-foreground mb-2">{offer.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <code className="bg-muted px-3 py-1 rounded text-sm font-mono text-primary">{offer.code}</code>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(offer.code)
                      alert("Code copied to clipboard!")
                    }}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Copy Code
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={onClose} className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}
