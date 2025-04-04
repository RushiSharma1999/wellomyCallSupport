"use client"

import { useState } from "react"
import { useGoogleLogin } from "@react-oauth/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface GoogleLoginButtonProps {
  className?: string
  onSuccess?: (response: any) => void
}

export function GoogleLoginButton({ className, onSuccess }: GoogleLoginButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(false)

      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        })

        const userInfo = await res.json()

        const user = {
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
          provider: "google",
        }

        localStorage.setItem("user", JSON.stringify(user))

        const backendRes = await fetch("/api/auth/google-save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })

        if (!backendRes.ok) {
          const errorText = await backendRes.text()
          throw new Error(`Backend error: ${backendRes.status} - ${errorText}`)
        }

        alert(`✅ Login Successful!\n\nWelcome ${user.name} (${user.email})`)

        onSuccess?.(user)

        // ✅ Navigate to dashboard
        router.push("/dashboard")
      } catch (error: any) {
        console.error("Login error:", error)
        alert(`❌ Login Failed!\n${error.message || "Could not complete login."}`)
      }
    },
    onError: () => {
      setIsLoading(false)
      alert("❌ Google login failed. Please try again.")
    },
    flow: "implicit",
  })

  const handleGoogleLogin = () => {
    setIsLoading(true)
    login()
  }

  return (
    <div className={className}>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 py-2"
      >
        <Image
          src="/google-logo1.svg"
          alt="Google"
          width={150}
          height={100}
          className="mr-2"
        />
        {isLoading ? "Logging in..." : ""}
      </Button>
    </div>
  )
}
