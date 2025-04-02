"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddAgentsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    campaignName: "",
    industry: "",
    companyName: "",
    agentName: "",
    agentVoice: "",
    agentRole: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePrevious = () => {
    router.push("/onboarding/use-case")
  }

  const handleNextStep = () => {
    router.push("/onboarding/add-knowledge")
  }

  // Update the Play button next to Agent Voice to be dynamic
  // First, add a new state for audio playback
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioSrc, setAudioSrc] = useState("")

  // Add a function to handle voice sample playback
  const handlePlayVoiceSample = () => {
    // Map voice values to sample audio URLs (these would be actual audio files in a real app)
    const voiceSamples = {
      ava: "/audio/ava-sample.mp3",
      noah: "/audio/noah-sample.mp3",
      emma: "/audio/emma-sample.mp3",
      liam: "/audio/liam-sample.mp3",
    }

    // Get the audio source for the selected voice
    const src = formData.agentVoice ? voiceSamples[formData.agentVoice] : ""

    if (src) {
      // Create and play audio
      const audio = new Audio(src)
      setAudioSrc(src)
      setIsPlaying(true)

      audio.play()
      audio.onended = () => {
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Button variant="ghost" className="text-gray-600 pl-0" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
      </div>

      <h1 className="text-3xl font-bold mb-2">Create your first AI Agent to handle customer calls.</h1>
      <p className="text-gray-600 mb-8">
        Customize your AI agent with a name, voice, and language to create a personalized experience for your customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <Label htmlFor="campaignName">Campaign Name</Label>
          <Input
            id="campaignName"
            placeholder="SampleCampaign"
            value={formData.campaignName}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
            <SelectTrigger id="industry" className="mt-1">
              <SelectValue placeholder="Tech Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Tech Industry</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Sample"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="agentName">Agent Name</Label>
          <Input
            id="agentName"
            placeholder="Siri"
            value={formData.agentName}
            onChange={handleInputChange}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="agentVoice">Agent Voice</Label>
          <div className="flex items-center mt-1">
            <Select value={formData.agentVoice} onValueChange={(value) => handleSelectChange("agentVoice", value)}>
              <SelectTrigger id="agentVoice" className="flex-1">
                <SelectValue placeholder="Ava - female" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ava">Ava - female</SelectItem>
                <SelectItem value="noah">Noah - male</SelectItem>
                <SelectItem value="emma">Emma - female</SelectItem>
                <SelectItem value="liam">Liam - male</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 h-10 w-10 rounded-full bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700"
              onClick={handlePlayVoiceSample}
              disabled={!formData.agentVoice}
            >
              {isPlaying ? (
                <span className="h-5 w-5 block relative">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="h-2 w-2 bg-green-600 rounded-full animate-ping"></span>
                  </span>
                </span>
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="agentRole">Agent Role</Label>
          <Select value={formData.agentRole} onValueChange={(value) => handleSelectChange("agentRole", value)}>
            <SelectTrigger id="agentRole" className="mt-1">
              <SelectValue placeholder="Receptionist" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="receptionist">Receptionist</SelectItem>
              <SelectItem value="sales">Sales Representative</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="booking">Booking Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleNextStep}>
        Next Step
      </Button>
    </div>
  )
}

