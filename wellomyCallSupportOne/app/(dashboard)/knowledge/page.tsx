"use client"

import { useState } from "react"
import { BookOpen, ChevronDown, Clock, FileText, Filter, FolderPlus, Globe, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { UploadKnowledgeModal } from "@/components/upload-knowledge-modal"
import { DeleteKnowledgeModal } from "@/components/delete-knowledge-modal"
import { AddToCollectionModal } from "@/components/add-to-collection-modal"

// Mock data for knowledge files
const knowledgeFiles = [
  { id: 1, name: "chai.pdf", type: "pdf", date: "3/27/2025", collectionId: 1 },
  { id: 2, name: "chaiwaleandco.com_about.md", type: "web", date: "3/27/2025", collectionId: 1 },
  { id: 3, name: "chaiwaleandco.com_contact.md", type: "web", date: "3/27/2025", collectionId: 2 },
  { id: 4, name: "chaiwaleandco.com.md", type: "web", date: "3/27/2025", collectionId: null },
]

// Mock data for collections
const knowledgeCollections = [
  { id: 1, name: "Product Information", filesCount: 2, lastEdit: "less than a minute ago" },
  { id: 2, name: "Customer Support", filesCount: 1, lastEdit: "2 hours ago" },
]

export default function KnowledgePage() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isAddToCollectionModalOpen, setIsAddToCollectionModalOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<number[]>([])
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null)

  const handleFileSelect = (fileId: number) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter((id) => id !== fileId))
    } else {
      setSelectedFiles([...selectedFiles, fileId])
    }
  }

  const handleSelectAll = () => {
    const filteredFiles = selectedCollection
      ? knowledgeFiles.filter((file) => file.collectionId === selectedCollection)
      : knowledgeFiles

    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([])
    } else {
      setSelectedFiles(filteredFiles.map((file) => file.id))
    }
  }

  const getSelectedFileNames = () => {
    return knowledgeFiles.filter((file) => selectedFiles.includes(file.id)).map((file) => file.name)
  }

  // Filter files based on selected collection
  const filteredFiles = selectedCollection
    ? knowledgeFiles.filter((file) => file.collectionId === selectedCollection)
    : knowledgeFiles

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Knowledge Base</h1>

          {/* Knowledge Collections Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg">
                Knowledge Collections <span className="text-gray-500">({knowledgeCollections.length})</span>
              </h2>
              <Button variant="outline" className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Collection
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {knowledgeCollections.map((collection) => (
                <Card
                  key={collection.id}
                  className={`p-4 border hover:shadow-md transition-all cursor-pointer ${
                    selectedCollection === collection.id
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-200"
                  }`}
                  onClick={() => setSelectedCollection(selectedCollection === collection.id ? null : collection.id)}
                >
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{collection.name}</h3>
                      <p className="text-sm text-gray-500">{collection.filesCount} files</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        Last edit: {collection.lastEdit}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Files Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg">
                {selectedCollection
                  ? `Files in ${knowledgeCollections.find((c) => c.id === selectedCollection)?.name}`
                  : "All Files"}
                <span className="text-gray-500">({filteredFiles.length})</span>
                {selectedCollection && (
                  <Button
                    variant="link"
                    className="ml-2 text-green-600 text-sm p-0 h-auto"
                    onClick={() => setSelectedCollection(null)}
                  >
                    Show All Files
                  </Button>
                )}
              </h2>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex space-x-2">
                {selectedFiles.length > 0 ? (
                  <>
                    <Button
                      variant="outline"
                      className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => setIsDeleteModalOpen(true)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Knowledge
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center"
                      onClick={() => setIsAddToCollectionModalOpen(true)}
                    >
                      <FolderPlus className="h-4 w-4 mr-2" />
                      Add to Collection
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <span className="mr-2">Sort</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
              <div className="flex space-x-2">
                <Input type="text" placeholder="Search knowledge files" className="w-64" />
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setIsUploadModalOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Knowledge
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="grid grid-cols-12 py-3 px-4 bg-gray-50 border-b text-sm font-medium text-gray-500">
                <div className="col-span-1">
                  <Checkbox
                    id="select-all"
                    checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </div>
                <div className="col-span-5 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-yellow-500" />
                  KNOWLEDGE
                </div>
                <div className="col-span-3">COLLECTION</div>
                <div className="col-span-3 text-right">ADDED ON</div>
              </div>

              {/* File rows */}
              {filteredFiles.length > 0 ? (
                <div className="divide-y">
                  {filteredFiles.map((file) => (
                    <div key={file.id} className="grid grid-cols-12 py-3 px-4 items-center">
                      <div className="col-span-1">
                        <Checkbox
                          id={`select-${file.id}`}
                          checked={selectedFiles.includes(file.id)}
                          onCheckedChange={() => handleFileSelect(file.id)}
                        />
                      </div>
                      <div className="col-span-5 flex items-center">
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
                      <div className="col-span-3 text-gray-500">
                        {file.collectionId ? knowledgeCollections.find((c) => c.id === file.collectionId)?.name : "—"}
                      </div>
                      <div className="col-span-3 text-right text-gray-500">{file.date}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-16 flex flex-col items-center justify-center text-gray-500">
                  <BookOpen className="h-12 w-12 mb-4 text-gray-300" />
                  <p className="text-lg mb-2">No files found in this collection</p>
                  <p className="text-sm">Upload files or select a different collection</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Upload Knowledge Modal */}
      <UploadKnowledgeModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />

      {/* Delete Knowledge Modal */}
      <DeleteKnowledgeModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        selectedFiles={getSelectedFileNames()}
        onConfirm={() => {
          // Handle delete logic here
          setSelectedFiles([])
          setIsDeleteModalOpen(false)
        }}
      />

      {/* Add to Collection Modal */}
      <AddToCollectionModal
        isOpen={isAddToCollectionModalOpen}
        onClose={() => setIsAddToCollectionModalOpen(false)}
        selectedFiles={getSelectedFileNames()}
        collections={knowledgeCollections}
        onAddToCollection={(collectionId, newCollectionName) => {
          // Handle add to collection logic here
          console.log("Adding to collection:", collectionId, newCollectionName)
          setSelectedFiles([])
          setIsAddToCollectionModalOpen(false)
        }}
      />
    </div>
  )
}

