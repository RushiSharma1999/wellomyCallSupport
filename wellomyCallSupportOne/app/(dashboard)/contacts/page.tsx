import { ChevronDown, Contact2, Filter, Plus, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-8">Contacts</h1>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b">
              <div className="flex items-center space-x-1">
                <Button variant="link" className="text-green-600 border-b-2 border-green-600 rounded-none px-4 py-2">
                  <Upload className="h-4 w-4 mr-2" />
                  Uploaded Outbound Contacts
                </Button>
              </div>
            </div>
          </div>

          {/* Filter and Search */}
          <div className="flex justify-between mb-6">
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" className="flex items-center">
                <span className="mr-2">Sort</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-2">
              <Input type="text" placeholder="Search by name or number" className="w-64" />
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Upload New Contacts
              </Button>
            </div>
          </div>

          {/* Contacts Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-12 py-3 px-4 bg-gray-50 border-b text-sm font-medium text-gray-500">
              <div className="col-span-5 flex items-center">
                <Contact2 className="h-4 w-4 mr-2 text-yellow-500" />
                CONTACT
              </div>
              <div className="col-span-5">PHONE NUMBER</div>
              <div className="col-span-2 text-right">ACTIONS</div>
            </div>

            {/* Empty state - no contacts */}
            <div className="py-16 flex flex-col items-center justify-center text-gray-500">
              <Contact2 className="h-12 w-12 mb-4 text-gray-300" />
              <p className="text-lg mb-2">No contacts found</p>
              <p className="text-sm">Upload contacts to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

