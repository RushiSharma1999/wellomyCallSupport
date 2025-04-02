"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronUp, Clock, Megaphone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Update the "New Campaign" button to navigate to the onboarding starting point
// Import useRouter
import { useRouter } from "next/navigation"

// Mock campaign data
const campaigns = [
  {
    id: "test",
    name: "Test Campaign",
    interactions: 3,
    status: "Active",
    lastEdit: "less than a minute ago",
    connectionRate: "100%",
  },
  {
    id: "outbound-sales",
    name: "Outbound Sales",
    interactions: 12,
    status: "Paused",
    lastEdit: "2 hours ago",
    connectionRate: "78%",
  },
  {
    id: "customer-support",
    name: "Customer Support",
    interactions: 45,
    status: "Active",
    lastEdit: "3 days ago",
    connectionRate: "92%",
  },
  {
    id: "feedback-collection",
    name: "Feedback Collection",
    interactions: 8,
    status: "Completed",
    lastEdit: "1 week ago",
    connectionRate: "85%",
  },
]

export default function CampaignsPage() {
  // Add router inside the component
  const router = useRouter()
  // State for filtering campaigns (could be expanded later)
  const [filter, setFilter] = useState("all")

  // Get status color based on campaign status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500"
      case "Paused":
        return "bg-yellow-500"
      case "Completed":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="p-8">
      {/* Header with title and New Campaign button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        {/* Update the New Campaign button to navigate to onboarding */}
        <Button
          className="bg-green-600 hover:bg-green-700 text-white"
          onClick={() => router.push("/onboarding/use-case")}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Campaign Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
            <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all cursor-pointer h-full">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Megaphone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{campaign.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className={`h-2 w-2 ${getStatusColor(campaign.status)} rounded-full mr-2`}></div>
                        <span className="text-sm text-gray-600">{campaign.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Interactions</p>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold mr-2">{campaign.interactions}</span>
                      <div className="flex items-center text-green-500 text-xs">
                        <ChevronUp className="h-3 w-3" />
                        <span>100%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm mb-1">Connection Rate</p>
                    <span className="text-lg font-medium">{campaign.connectionRate}</span>
                  </div>
                </div>

                <div className="flex items-center text-xs text-gray-500 mt-4 pt-4 border-t">
                  <Clock className="h-3 w-3 mr-1" />
                  Last edit: {campaign.lastEdit}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty state - shown only when there are no campaigns */}
      {campaigns.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-bold mb-8">No campaigns yet</h1>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">Start Onboarding</Button>
        </div>
      )}

      {/* Right Sidebar - Statistics (optional, can be removed if not needed) */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Megaphone className="h-5 w-5 mr-2 text-green-600" />
            <h2 className="text-xl font-bold">Campaign Statistics</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-600 mb-1">Total Calls Made</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">
                {campaigns.reduce((sum, campaign) => sum + campaign.interactions, 0)}
              </span>
              <span className="text-gray-500">from 0 last week</span>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-1">Active Campaigns</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">{campaigns.filter((c) => c.status === "Active").length}</span>
              <span className="text-gray-500">of {campaigns.length} total</span>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-1">Average Connection Rate</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">
                {Math.round(
                  campaigns.reduce((sum, campaign) => sum + Number.parseInt(campaign.connectionRate), 0) /
                    campaigns.length,
                )}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

