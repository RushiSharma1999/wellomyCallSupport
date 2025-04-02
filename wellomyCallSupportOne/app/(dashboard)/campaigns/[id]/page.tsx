"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  ChevronUp,
  FileText,
  Globe,
  Headphones,
  Megaphone,
  Pause,
  Play,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CampaignDetailsPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Mock campaign data
  const campaign = {
    id: params.id,
    name: "Test Campaign",
    status: "Active",
    interactions: 3,
    callsMade: 0,
    callsReceived: 3,
    connectionRate: "100%",
    totalTalkTime: "00:06:22",
    agent: "John",
    voice: {
      name: "Emma",
      tone: "Professional",
      speed: "Medium",
      sample: "/voice-sample.mp3",
    },
    knowledgeFiles: [
      { name: "chai.pdf", type: "pdf", date: "Mar 27, 2025" },
      { name: "chaiwaleandco.com_about.md", type: "web", date: "Mar 27, 2025" },
      { name: "chaiwaleandco.com_contact.md", type: "web", date: "Mar 27, 2025" },
      { name: "chaiwaleandco.com.md", type: "web", date: "Mar 27, 2025" },
    ],
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="p-8">
      {/* Back button and header */}
      <div className="mb-6">
        {/* Update the back button link and text */}
        <Link href="/campaigns" className="text-green-600 hover:text-green-700 flex items-center mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Campaigns
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Megaphone className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{campaign.name}</h1>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-600 font-medium">{campaign.status}</span>
              </div>
            </div>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Settings className="h-4 w-4 mr-2" />
            Edit Campaign
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="border-b w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="overview"
              className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 data-[state=inactive]:text-gray-500 data-[state=inactive]:border-b-0"
            >
              <Megaphone className="h-4 w-4 mr-2" />
              Campaign Overview
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Campaign Overview */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-gray-200 p-6">
            <h2 className="text-lg font-medium mb-4">Campaign Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interactions */}
              <div>
                <p className="text-gray-500 mb-1">Total Interactions</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-2">{campaign.interactions}</span>
                  <div className="flex items-center text-green-500 text-sm">
                    <ChevronUp className="h-4 w-4" />
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Calls Made/Received */}
              <div>
                <p className="text-gray-500 mb-1">Calls Made | Calls Received</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-2">{campaign.callsMade}</span>
                  <span className="text-3xl font-bold mx-2">|</span>
                  <span className="text-3xl font-bold mr-2">{campaign.callsReceived}</span>
                </div>
              </div>

              {/* Connection Rate */}
              <div>
                <p className="text-gray-500 mb-1">Connection Rate</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-2">{campaign.connectionRate}</span>
                </div>
                <Progress value={100} className="h-2 mt-2 bg-gray-200" indicatorClassName="bg-green-600" />
              </div>

              {/* Total Talk Time */}
              <div>
                <p className="text-gray-500 mb-1">Total Talk Time</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold mr-2">{campaign.totalTalkTime}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Knowledge Files */}
          <Card className="border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Knowledge Files</h2>
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Add Knowledge
              </Button>
            </div>
            <div className="divide-y">
              {campaign.knowledgeFiles.map((file, index) => (
                <div key={index} className="py-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`h-8 w-8 ${file.type === "pdf" ? "bg-red-100" : "bg-blue-100"} rounded flex items-center justify-center mr-3`}
                    >
                      {file.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-red-500" />
                      ) : (
                        <Globe className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <span>{file.name}</span>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {file.date}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column - Agent and Voice */}
        <div className="space-y-6">
          {/* AI Agent */}
          <Card className="border border-gray-200 p-6">
            <h2 className="text-lg font-medium mb-4">AI Agent</h2>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium">{campaign.agent}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  Inbound Agent
                </div>
              </div>
            </div>
            <Button className="w-full mb-4">Test Agent</Button>
          </Card>

          {/* Voice Settings */}
          <Card className="border border-gray-200 p-6">
            <h2 className="text-lg font-medium mb-4">AI Agent Voice</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Voice</span>
                <span className="font-medium">{campaign.voice.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tone</span>
                <span className="font-medium">{campaign.voice.tone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Speed</span>
                <span className="font-medium">{campaign.voice.speed}</span>
              </div>
            </div>
            <div className="border rounded-md p-3 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700"
                onClick={togglePlayPause}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <div className="ml-3">
                <p className="font-medium">Voice Sample</p>
                <p className="text-sm text-gray-500">Listen to the agent's voice</p>
              </div>
            </div>
          </Card>

          {/* Campaign Settings */}
          <Card className="border border-gray-200 p-6">
            <h2 className="text-lg font-medium mb-4">Campaign Settings</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Campaign Type</span>
                <span className="font-medium">Inbound</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Created On</span>
                <span className="font-medium">Mar 27, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Modified</span>
                <span className="font-medium">Mar 29, 2025</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

