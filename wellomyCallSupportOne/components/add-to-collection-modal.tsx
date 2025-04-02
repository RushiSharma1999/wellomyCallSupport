"use client"

import { useState } from "react"
import { FolderPlus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Collection {
  id: number
  name: string
  filesCount: number
  lastEdit: string
}

interface AddToCollectionModalProps {
  isOpen: boolean
  onClose: () => void
  selectedFiles: string[]
  collections: Collection[]
  onAddToCollection: (collectionId: number | null, newCollectionName: string | null) => void
}

export function AddToCollectionModal({
  isOpen,
  onClose,
  selectedFiles,
  collections,
  onAddToCollection,
}: AddToCollectionModalProps) {
  const [selectedCollection, setSelectedCollection] = useState<number | "new" | null>(
    collections.length > 0 ? collections[0].id : null,
  )
  const [newCollectionName, setNewCollectionName] = useState("")

  const handleSubmit = () => {
    if (selectedCollection === "new" && !newCollectionName.trim()) {
      // Show error or validation message
      return
    }

    onAddToCollection(
      selectedCollection === "new" ? null : selectedCollection,
      selectedCollection === "new" ? newCollectionName : null,
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Knowledge to Collection</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          {/* Selected Files */}
          <div>
            <h3 className="text-sm font-medium mb-2">Selected Files</h3>
            <div className="bg-gray-50 p-3 rounded-md max-h-[150px] overflow-y-auto">
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedFiles.map((file, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Choose Collection */}
          <div>
            <h3 className="text-sm font-medium mb-3">Choose Collection</h3>

            <RadioGroup
              value={selectedCollection?.toString()}
              onValueChange={(value) => setSelectedCollection(value === "new" ? "new" : Number.parseInt(value))}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                {collections.map((collection) => (
                  <div key={collection.id} className="relative">
                    <RadioGroupItem
                      value={collection.id.toString()}
                      id={`collection-${collection.id}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`collection-${collection.id}`}
                      className={`block p-3 border rounded-md cursor-pointer transition-all ${
                        selectedCollection === collection.id
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <FolderPlus className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{collection.name}</p>
                          <p className="text-xs text-gray-500">{collection.filesCount} files</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}

                {/* Create New Collection Option */}
                <div className="relative">
                  <RadioGroupItem value="new" id="collection-new" className="sr-only" />
                  <Label
                    htmlFor="collection-new"
                    className={`block p-3 border rounded-md cursor-pointer transition-all ${
                      selectedCollection === "new"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                        <Plus className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Create new collection...</p>
                      </div>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>

            {/* New Collection Name Input */}
            {selectedCollection === "new" && (
              <div className="mt-3">
                <Label htmlFor="new-collection-name" className="text-sm font-medium">
                  Collection Name
                </Label>
                <Input
                  id="new-collection-name"
                  value={newCollectionName}
                  onChange={(e) => setNewCollectionName(e.target.value)}
                  placeholder="Enter collection name"
                  className="mt-1"
                />
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleSubmit}
            disabled={selectedCollection === "new" && !newCollectionName.trim()}
          >
            Add to Collection
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

