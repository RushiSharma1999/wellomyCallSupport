"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PreviewAgentPage() {
  const router = useRouter()

  const handlePrevious = () => {
    router.push("/onboarding/integrations")
  }

  const handleBackToDashboard = () => {
    router.push("/dashboard")
  }

  const handleDeployAgent = () => {
    router.push("/dashboard")
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" className="text-gray-600 pl-0" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">Preview your AI Agent</h1>
      <p className="text-gray-600 mb-8">Test your AI agent before deploying it to ensure it meets your expectations.</p>

      <Card className="p-12 border-gray-200 mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <MessageSquare className="h-8 w-8 text-green-600" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Your agent is ready!</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Your AI agent has been configured successfully. You can now test it by clicking the button below.
          </p>

          <Button className="bg-green-600 hover:bg-green-700 text-white">Test Your Agent</Button>
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handleBackToDashboard}>
          Back to Dashboard
        </Button>

        <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleDeployAgent}>
          Deploy Agent
        </Button>
      </div>
    </div>
  )
}

