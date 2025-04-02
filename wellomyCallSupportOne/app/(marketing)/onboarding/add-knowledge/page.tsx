"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Upload, LinkIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddKnowledgePage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handlePrevious = () => {
    router.push("/onboarding/add-agents")
  }

  const handleNextStep = () => {
    router.push("/onboarding/integrations")
  }

  const handleSkip = () => {
    router.push("/onboarding/integrations")
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file drop logic here
  }

  const handleUploadClick = () => {
    // Trigger the hidden file input click
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Handle file selection logic here
      console.log("Files selected:", e.target.files)
      // You would typically process these files or update state
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

      <h1 className="text-3xl font-bold mb-2">Add a Knowledge Base for your Agent.</h1>
      <p className="text-gray-600 mb-8">
        Train your AI agent with relevant business information by uploading documents like FAQs, product details, or
        company policies. Think of this as "training material", your agent will use this knowledge to provide accurate
        and helpful responses to customer inquiries.
      </p>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search for knowledge" className="pl-10" />
        </div>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-12 mb-6 text-center ${
          isDragging ? "border-green-500 bg-green-50" : "border-gray-200"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        style={{ cursor: "pointer" }}
      >
        <div className="flex flex-col items-center">
          <Upload className="h-10 w-10 text-gray-400 mb-4" />
          <p className="text-green-600 font-medium mb-1">Upload File or drag and drop here</p>
          <p className="text-gray-500 text-sm">Upload Knowledge</p>
        </div>
      </div>

      <div className="mb-8">
        <Button variant="outline" className="w-full py-6 border-gray-200 flex items-center justify-center">
          <LinkIcon className="h-4 w-4 mr-2" />
          Add Knowledge with Web Link
        </Button>
      </div>

      <div className="flex items-center">
        <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleNextStep}>
          Next Step
        </Button>

        <Button variant="ghost" className="ml-4 text-gray-500" onClick={handleSkip}>
          Skip, Add Knowledge Later
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} multiple />
    </div>
  )
}

