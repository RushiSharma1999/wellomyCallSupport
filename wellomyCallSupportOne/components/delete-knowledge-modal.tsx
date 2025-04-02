"use client"

import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface DeleteKnowledgeModalProps {
  isOpen: boolean
  onClose: () => void
  selectedFiles: string[]
  onConfirm: () => void
}

export function DeleteKnowledgeModal({ isOpen, onClose, selectedFiles, onConfirm }: DeleteKnowledgeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex items-center text-red-600 mb-2">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <DialogTitle>Delete Knowledge</DialogTitle>
          </div>
        </DialogHeader>

        <div className="py-4">
          <p className="mb-4">Are you sure you want to delete the selected knowledge file(s)?</p>

          {selectedFiles.length > 0 && (
            <div className="bg-gray-50 p-3 rounded-md max-h-[150px] overflow-y-auto">
              <p className="text-sm font-medium mb-2">Selected files:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between items-center">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Confirm Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

