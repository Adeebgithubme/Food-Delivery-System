"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { MenuItem } from "@/lib/menu-data"

interface BestSellersProps {
  onAddToCart: (item: MenuItem) => void
}

const bestSellersDishes: MenuItem[] = [
  {
    id: "best-1",
    name: "Al Pastor Taco",
    description: "Pineapple, marinated pork, cilantro.",
    price: 180,
    image: "/beef-tacos.jpg",
  },
  {
    id: "best-2",
    name: "Salmon Nigiri",
    description: "Fresh salmon over seasoned rice.",
    price: 310,
    image: "/salmon-nigiri-sushi.jpg",
  },
  {
    id: "best-3",
    name: "Chicken Shawarma",
    description: "Spiced chicken, tahini, pickles.",
    price: 250,
    image: "/chicken-shawarma.jpg",
  },
  {
    id: "best-4",
    name: "Pork Dumplings",
    description: "Juicy pork with chives.",
    price: 220,
    image: "/pan-fried-momos.jpg",
  },
]

export default function BestSellers({ onAddToCart }: BestSellersProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary mb-8">Best Sellers</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellersDishes.map((dish) => (
            <Card
              key={dish.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Dish Image */}
              <div className="aspect-square bg-muted overflow-hidden rounded-t-lg">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground mb-2">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{dish.description}</p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">₹{dish.price}</span>
                  <Button
                    onClick={() => onAddToCart(dish)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-colors"
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
