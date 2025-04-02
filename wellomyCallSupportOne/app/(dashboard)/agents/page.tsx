"use client"

import { useState } from "react"
import { ChevronUp, Headphones, Plus, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState("john")

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Agents</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Create Agent
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <Card className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center p-6 border-b">
              <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-medium">John</h2>
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  Inbound Agent
                </div>
              </div>
              <Button variant="ghost" className="ml-auto">
                Details
              </Button>
            </div>

            <div className="p-6 border-b">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold mr-2">3</span>
                <span className="text-green-500 text-sm">+0.0%</span>
              </div>
              <div className="text-gray-500 text-sm">Total Requests</div>
            </div>

            <div className="flex items-center p-4 text-gray-500">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span className="mr-4">0</span>
              <ThumbsDown className="h-4 w-4 mr-1" />
              <span className="mr-4">0</span>
              <span className="text-gray-300 mr-1">|</span>
              <span>1</span>
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Only shown when an agent is selected */}
        {selectedAgent && (
          <div className="w-80 border-l border-gray-200 pl-6">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Headphones className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-medium">John</h2>
                <Button variant="ghost" size="sm" className="ml-auto">
                  Details
                </Button>
              </div>

              <div className="mb-6">
                <p className="text-gray-500 mb-2">Core Action:</p>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-green-500 rounded-full mr-2 flex items-center justify-center">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Talk to John</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-500 mb-2">Active Campaign</p>
                <Card className="border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <p className="font-medium">fwdf</p>
                      <p className="text-gray-500 text-sm">Inactive</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-gray-500 text-sm">Inbound</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Details
                  </Button>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Overview</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-1">Total Requests</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-2">3</span>
                      <span className="text-sm text-gray-500">3 Successful Requests</span>
                      <div className="flex items-center text-green-500 text-sm ml-auto">
                        <ChevronUp className="h-4 w-4" />
                        <span>100%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-1">Total Transfers</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-2">0</span>
                      <span className="text-sm text-gray-500">0.0% Transfer Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

