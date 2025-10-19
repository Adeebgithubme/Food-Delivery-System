"use client"

import { useState, useEffect } from "react"
import LoginPage from "@/components/login-page"
import MainMenu from "@/components/main-menu"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      setUser(storedUser)
      setIsLoggedIn(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (username: string) => {
    setUser(username)
    setIsLoggedIn(true)
    localStorage.setItem("currentUser", username)
  }

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("currentUser")
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return isLoggedIn ? <MainMenu user={user} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />
}
