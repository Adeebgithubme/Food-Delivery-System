"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Menu } from "lucide-react"
import CartSidebar from "./cart-sidebar"
import OffersModal from "./offers-modal"
import HelpModal from "./help-modal"
import BestSellers from "./best-sellers"
import Footer from "./footer"
import { menuData, type MenuItem } from "@/lib/menu-data"
import ProductCard from "./product-card"

interface MainMenuProps {
  user: string | null
  onLogout: () => void
}

export default function MainMenu({ user, onLogout }: MainMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tacos")
  const [cartItems, setCartItems] = useState<(MenuItem & { quantity: number })[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showOffers, setShowOffers] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = Object.keys(menuData)

  const filteredItems = useMemo(() => {
    let items = menuData[selectedCategory] || []
    if (searchQuery.trim()) {
      items = items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return items
  }, [selectedCategory, searchQuery])

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i))
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems((prev) => prev.map((i) => (i.id === itemId ? { ...i, quantity } : i)))
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const handleCheckout = () => {
    alert("Order placed successfully!")
    clearCart()
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <h1 className="text-xl font-bold text-primary hidden sm:block">Global Street Eats</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
              <button
                onClick={() => setShowOffers(true)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Offers
              </button>
              <button
                onClick={() => setShowHelp(true)}
                className="text-foreground hover:text-primary transition-colors"
              >
                Help
              </button>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-primary" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Logout */}
              <Button onClick={onLogout} variant="outline" className="hidden sm:inline-flex bg-transparent">
                Logout
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border space-y-2">
              <button
                onClick={() => {
                  setShowOffers(true)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg"
              >
                Offers
              </button>
              <button
                onClick={() => {
                  setShowHelp(true)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg"
              >
                Help
              </button>
              <Button onClick={onLogout} variant="outline" className="w-full bg-transparent">
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-2"
            />
          </div>
        </div>

        {/* Category Bar */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setSearchQuery("")
                }}
                className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <ProductCard key={item.id} item={item} onAddToCart={addToCart} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No dishes found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <BestSellers onAddToCart={addToCart} />

      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        total={cartTotal}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClear={clearCart}
        onCheckout={handleCheckout}
      />

      {/* Modals */}
      <OffersModal isOpen={showOffers} onClose={() => setShowOffers(false)} />
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  )
}
