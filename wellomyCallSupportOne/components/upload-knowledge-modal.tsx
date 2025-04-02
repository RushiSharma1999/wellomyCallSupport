"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface UploadKnowledgeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UploadKnowledgeModal({ isOpen, onClose }: UploadKnowledgeModalProps) {
  const [dragActive, setDragActive] = useState(false)
  const [webLink, setWebLink] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle the uploaded files
      console.log("Files dropped:", e.dataTransfer.files)
      // You would typically send these files to your backend
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Handle the uploaded files
      console.log("Files selected:", e.target.files)
      // You would typically send these files to your backend
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleWebLinkSubmit = () => {
    if (webLink) {
      console.log("Web link submitted:", webLink)
      // Process the web link
      setWebLink("")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Global Knowledge Files</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input type="text" placeholder="Search for knowledge" className="pl-10" />
          </div>

          {/* Drag & Drop Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? "border-green-500 bg-green-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileInputChange} multiple />
            <Upload className="h-10 w-10 mx-auto mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-600">
              <button onClick={handleUploadClick} className="text-green-600 hover:text-green-700 font-medium">
                Upload File
              </button>{" "}
              or drag and drop here
            </p>
            <p className="text-xs text-gray-500">Upload Knowledge</p>
          </div>

          {/* Add Knowledge with Web Link */}
          <div className="space-y-3">
            <p className="font-medium">Add Knowledge with Web Link</p>
            <Input
              type="url"
              placeholder="https://example.com/knowledge"
              value={webLink}
              onChange={(e) => setWebLink(e.target.value)}
            />
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleWebLinkSubmit}>
              Add Knowledge with Web Link
            </Button>
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center mt-6">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <p className="text-xs text-gray-500">Supported formats: PDF, DOCX, TXT, MD, HTML</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

