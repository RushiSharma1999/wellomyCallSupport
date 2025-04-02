"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Download, Filter, Phone, Play, Upload, User, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

export default function CallRecordsPage() {
  const [activeTab, setActiveTab] = useState("inbound")
  const [activeFilter, setActiveFilter] = useState("all")
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [activeDetailsTab, setActiveDetailsTab] = useState("summary")
  const [selectedCall, setSelectedCall] = useState(null)

  const callData = [
    {
      id: 1,
      date: "Mar 29",
      time: "11:18 PM",
      contact: "Web Call",
      campaign: "fwdf",
      campaignDetails: {
        name: "Test Campaign",
        link: "/campaigns/test",
      },
      duration: "05:02",
      status: "Accepted",
      summary:
        'The conversation covered a variety of topics, particularly about Chiwala, followed by unrelated questions about weather, the origin of the word "chai," U.S. presidents, sorting algorithms, and the naming of Python programming language and Monty Python. The conversation ended abruptly after some disconnected exchanges.',
      transcript: [
        { speaker: "AI", text: "Thank you for calling Sample. This is John. How may I assist you today?" },
        { speaker: "User", text: "What's on the menu?" },
        {
          speaker: "AI",
          text: "Sure. Let me help you with some details on the menu at Chiwala and Co. Chiwala and Co offers a variety of Indian fusion drinks and desserts. Here are a few highlights from their menu. Part 1, authentic homemade chai. Spanish latte, various Indian fusion drinks. 2, signature Indian burritos. Other innovative and delicious food items that blend South Asian culture with American classics. For more detailed information, you can visit their menu page. HTPs, Zarischaiwali and q dot com menu. Is there anything else specific you would like to know about their offerings?",
        },
        { speaker: "User", text: "Do they have pastries?" },
        {
          speaker: "AI",
          text: "Yes. Chai Wally and Co offers a variety of pastries along with their Indian fusion drinks and desserts. You can find delicious and innovative treats that blend traditional South Asian flavors with modern twists. For a detailed look at their pastry options, you can visit their menu page at chaiwali and co dot com menu. Is there anything else I can assist you with?",
        },
        { speaker: "User", text: "Can you recommend any pastries" },
      ],
    },
    {
      id: 2,
      date: "Mar 29",
      time: "11:10 PM",
      contact: "Web Call",
      campaign: "fwdf",
      campaignDetails: {
        name: "Test Campaign",
        link: "/campaigns/test",
      },
      duration: "01:18",
      status: "Accepted",
      summary: "Brief conversation about business hours and location.",
      transcript: [
        { speaker: "AI", text: "Thank you for calling Sample. This is John. How may I assist you today?" },
        { speaker: "User", text: "What are your hours?" },
        { speaker: "AI", text: "Our hours are Monday to Friday 9am to 9pm, and weekends 10am to 7pm." },
        { speaker: "User", text: "Where are you located?" },
        {
          speaker: "AI",
          text: "We're located at 123 Main Street, Downtown. Is there anything else I can help you with?",
        },
      ],
    },
    {
      id: 3,
      date: "Mar 28",
      time: "11:58 PM",
      contact: "Web Call",
      campaign: "fwdf",
      campaignDetails: {
        name: "Test Campaign",
        link: "/campaigns/test",
      },
      duration: "00:01",
      status: "Accepted",
      summary: "Very brief call with no conversation.",
      transcript: [
        { speaker: "AI", text: "Thank you for calling Sample. This is John. How may I assist you today?" },
        { speaker: "User", text: "[No response]" },
      ],
    },
  ]

  const handleOpenDetails = (call) => {
    setSelectedCall(call)
    setIsDetailsOpen(true)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Call Records</h1>

      {/* Tabs - Removed Voice Bubble and updated Outbound Calls */}
      <div className="mb-8">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="outbound"
              className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0 opacity-50 cursor-not-allowed"
              disabled
            >
              <Upload className="h-4 w-4 mr-2" />
              Outbound Calls (Feature coming soon......)
            </TabsTrigger>
            <TabsTrigger
              value="inbound"
              className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0"
            >
              <Phone className="h-4 w-4 mr-2" />
              Inbound Calls
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Sub-navigation */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Button
            variant={activeFilter === "all" ? "subtle" : "ghost"}
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-gray-100 text-gray-800" : ""}
          >
            All Calls (3)
          </Button>
          <Button
            variant={activeFilter === "ongoing" ? "subtle" : "ghost"}
            onClick={() => setActiveFilter("ongoing")}
            className={activeFilter === "ongoing" ? "bg-gray-100 text-gray-800" : ""}
          >
            Ongoing (0)
          </Button>
          <Button
            variant={activeFilter === "completed" ? "subtle" : "ghost"}
            onClick={() => setActiveFilter("completed")}
            className={activeFilter === "completed" ? "bg-gray-100 text-gray-800" : ""}
          >
            Completed (3)
          </Button>
          <Button
            variant={activeFilter === "rejected" ? "subtle" : "ghost"}
            onClick={() => setActiveFilter("rejected")}
            className={activeFilter === "rejected" ? "bg-gray-100 text-gray-800" : ""}
          >
            Rejected (0)
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <Button variant="outline" className="flex items-center pr-10">
              <Filter className="h-4 w-4 mr-2" />
              All Campaigns
              <ChevronDown className="h-4 w-4 absolute right-3" />
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">From:</span>
            <div className="relative">
              <Input type="text" defaultValue="03/24/2025" className="w-32 pl-8" />
              <Calendar className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <span className="text-sm text-gray-500">To:</span>
            <div className="relative">
              <Input type="text" defaultValue="03/31/2025" className="w-32 pl-8" />
              <Calendar className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <Button variant="outline" className="flex items-center">
              Newest First
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Call Records Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b text-sm text-gray-500 uppercase">
              <th className="py-3 px-4 text-left font-medium">Time & Date</th>
              <th className="py-3 px-4 text-left font-medium">Contacts</th>
              <th className="py-3 px-4 text-left font-medium">Campaign</th>
              <th className="py-3 px-4 text-left font-medium">Duration</th>
              <th className="py-3 px-4 text-left font-medium">Status</th>
              <th className="py-3 px-4 text-right font-medium">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {callData.map((call, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm">
                  {call.date} at {call.time}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <span>{call.contact}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-green-600">{call.campaign}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{call.duration}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{call.status}</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleOpenDetails(call)}>
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call Details Modal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <DialogHeader className="p-6 pb-2">
            <div className="flex items-center">
              <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <Phone className="h-3 w-3 text-green-600" />
              </div>
              <DialogTitle>Call Details</DialogTitle>
            </div>
          </DialogHeader>

          {selectedCall && (
            <>
              <div className="px-6">
                <Tabs defaultValue={activeDetailsTab} onValueChange={setActiveDetailsTab} className="w-full">
                  <TabsList className="border-b w-full justify-start rounded-none h-auto p-0 mb-6">
                    <TabsTrigger
                      value="summary"
                      className={`rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0`}
                    >
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 6H20M4 12H20M4 18H12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Summary
                    </TabsTrigger>
                    <TabsTrigger
                      value="transcript"
                      className={`rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0`}
                    >
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Transcript
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="mt-0">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Campaign</p>
                        <p>{selectedCall.campaignDetails.name}</p>
                        <a href={selectedCall.campaignDetails.link} className="text-green-600 text-sm hover:underline">
                          Go to Campaign
                        </a>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Call Details:</p>
                        <p>
                          {selectedCall.date} at {selectedCall.time}
                        </p>
                      </div>
                    </div>

                    <div className="border rounded-md p-4 mb-6">
                      <p className="text-sm text-gray-500 mb-2">
                        Summary powered by <span className="text-green-600 font-medium">AQX AI</span>
                      </p>
                      <p className="text-sm">{selectedCall.summary}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="transcript" className="mt-0">
                    <div className="border rounded-md p-4 mb-6 max-h-[300px] overflow-y-auto">
                      {selectedCall.transcript.map((entry, index) => (
                        <div key={index} className="mb-4">
                          <p className="text-sm font-medium">{entry.speaker}:</p>
                          <p className="text-sm">{entry.text}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="px-6 py-4 border-t">
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 mx-2">
                    <div className="h-1 bg-gray-200 rounded-full">
                      <div className="h-1 bg-green-600 rounded-full w-0"></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 mr-2">{selectedCall.duration}</span>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <DialogFooter className="px-6 py-4 border-t flex justify-between">
                <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
                  Close
                </Button>
                <Button variant="destructive">Delete Call Log</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

