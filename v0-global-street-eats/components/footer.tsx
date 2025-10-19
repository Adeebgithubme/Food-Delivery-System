"use client"

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Upper Footer - Team & Faculty */}
      <div className="bg-black px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Faculty Column */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Faculty</h3>
              <p className="text-gray-300">M.S Nagalakshmi</p>
            </div>

            {/* Team Name Column */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Team Name</h3>
              <p className="text-gray-300">Global Street Eats</p>
            </div>

            {/* Team Members Column */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Team Members</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> MD Ubaid
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> MD Safwaan
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> MD Adeeb
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-gray-700 my-8" />
        </div>
      </div>

      {/* Lower Footer - Branding, Payments & Social */}
      <div className="bg-gray-900 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  🍴
                </div>
                <h2 className="text-xl font-bold text-white">Global Street Eats</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Delicious food delivered to your doorstep. Fresh, fast, and always satisfying.
              </p>
            </div>

            {/* Right: Payments & Social */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">We Accept</h3>

              {/* Payment Icons Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-gray-300 hover:bg-primary transition-colors cursor-pointer">
                  Visa
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-gray-300 hover:bg-primary transition-colors cursor-pointer">
                  MC
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-gray-300 hover:bg-primary transition-colors cursor-pointer">
                  PayPal
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-bold text-gray-300 hover:bg-primary transition-colors cursor-pointer">
                  UPI
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="border-gray-700 my-8" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">© 2025 Global Street Eats. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
