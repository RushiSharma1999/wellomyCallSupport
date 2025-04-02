"use client"

import { Mic, Phone, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VoiceBubblePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Call Records</h1>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b">
          <div className="flex items-center space-x-1">
            <Button variant="link" className="text-green-600 border-b-2 border-green-600 rounded-none px-4 py-2">
              <Mic className="h-4 w-4 mr-2" />
              Voice Bubble
            </Button>
            <Button variant="link" className="text-gray-500 rounded-none px-4 py-2">
              <Upload className="h-4 w-4 mr-2" />
              Outbound Calls
            </Button>
            <Button variant="link" className="text-gray-500 rounded-none px-4 py-2">
              <Phone className="h-4 w-4 mr-2" />
              Inbound Calls
            </Button>
          </div>
        </div>
      </div>

      {/* Empty state */}
      <div className="flex items-center justify-center h-64 text-gray-500">You don't have any call records yet</div>
    </div>
  )
}

