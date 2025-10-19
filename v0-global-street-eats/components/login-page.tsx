"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface LoginPageProps {
  onLogin: (username: string) => void
}

const DEMO_USERS = {
  admin: "1234",
  user: "0000",
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (username in DEMO_USERS && DEMO_USERS[username as keyof typeof DEMO_USERS] === password) {
      onLogin(username)
    } else {
      setError("Invalid username or password.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">🌍</h1>
            <h2 className="text-3xl font-bold text-foreground">Global Street Eats</h2>
            <p className="text-muted-foreground mt-2">International Street Food Delivery</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Username</label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2"
            >
              Login
            </Button>
          </form>

          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm font-semibold text-foreground mb-2">Demo Credentials:</p>
            <p className="text-sm text-muted-foreground">
              <strong>Admin:</strong> admin / 1234
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>User:</strong> user / 0000
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
