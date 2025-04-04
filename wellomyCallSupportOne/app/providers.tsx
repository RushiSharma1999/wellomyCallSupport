"use client"

import { GoogleOAuthProvider } from "@react-oauth/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  // Replace this with your actual Google Client ID
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "727977356472-1iv73tu3hvmesovm6r1r8sq1uuta9d80.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}

