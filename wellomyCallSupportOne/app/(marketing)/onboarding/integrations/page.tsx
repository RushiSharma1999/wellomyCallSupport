"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IntegrationsPage() {
  const router = useRouter()
  const [amazonConnected, setAmazonConnected] = useState(false)
  const [calendarConnected, setCalendarConnected] = useState(false)

  const handlePrevious = () => {
    router.push("/onboarding/add-knowledge")
  }

  const handleNextStep = () => {
    router.push("/onboarding/preview-agent")
  }

  const handleConnectAmazon = () => {
    // Simulate connection
    setAmazonConnected(true)
  }

  const handleConnectCalendar = () => {
    // Simulate connection
    setCalendarConnected(true)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" className="text-gray-600 pl-0" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">Connect your Campaign to Amazon Connect.</h1>
      <p className="text-gray-600 mb-8">
        Connect your Amazon Connect account to enable making and receiving phone calls using your Amazon
        Connect-provided phone number
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-medium mb-4">Preview your agent</h2>
        <Button variant="outline" className="flex items-center border-gray-200">
          <div className="h-4 w-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
            <svg className="h-2 w-2 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          Talk to Siri
        </Button>
      </div>

      <div className="space-y-4 mb-8">
        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="font-medium">Amazon Connect</h3>
                <p className="text-sm text-gray-500">Mandatory</p>
              </div>
            </div>
            <Button
              className={amazonConnected ? "bg-gray-200 text-gray-700" : "bg-green-600 hover:bg-green-700 text-white"}
              onClick={handleConnectAmazon}
              disabled={amazonConnected}
            >
              {amazonConnected ? "Connected" : "Connect Integration"}
            </Button>
          </div>
        </Card>

        <Card className="p-4 border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Calendar className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium">Calendar Integration</h3>
                <p className="text-sm text-gray-500">Optional</p>
              </div>
            </div>
            <Button
              variant="outline"
              className={calendarConnected ? "bg-gray-200 text-gray-700" : ""}
              onClick={handleConnectCalendar}
              disabled={calendarConnected}
            >
              {calendarConnected ? "Connected" : "Connect Calendar"}
            </Button>
          </div>
        </Card>
      </div>

      <Button
        className="bg-green-600 hover:bg-green-700 text-white"
        onClick={handleNextStep}
        disabled={!amazonConnected}
      >
        Next Step
      </Button>
    </div>
  )
}

