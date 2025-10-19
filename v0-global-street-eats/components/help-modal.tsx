"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Browse through our menu, select your favorite dishes, add them to your cart, and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital wallets.",
  },
  {
    question: "How long does delivery take?",
    answer: "Typical delivery time is 30-45 minutes depending on your location.",
  },
  {
    question: "Can I modify my order after placing it?",
    answer: "You can modify your order within 5 minutes of placing it. Contact our support team for assistance.",
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes! We have a wide variety of vegetarian dishes across all categories.",
  },
]

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Help & FAQs</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
            <p className="text-sm text-muted-foreground mb-1">📧 support@globalstreeteats.com</p>
            <p className="text-sm text-muted-foreground">📞 1-800-STREET-EATS</p>
          </div>

          <Button onClick={onClose} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Close
          </Button>
        </div>
      </Card>
    </div>
  )
}
