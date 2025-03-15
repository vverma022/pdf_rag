import { Button } from "@/components/ui/button"
import { LayoutGrid, Layers, Users, Settings, SettingsIcon as Functions, Codesandbox } from "lucide-react"

const AppSidebar = () => {
  return (
    <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Codesandbox className="h-6 w-6" />
            <span className="font-semibold">VectorVerse</span>
          </div>
        </div>
        <div className="h-[calc(100vh-64px)] overflow-auto">
          <div className="space-y-4 p-4">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Tasks
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Functions className="mr-2 h-4 w-4" />
                Functions
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Layers className="mr-2 h-4 w-4" />
                Integrations
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Users
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </nav>
            <div className="pt-4 border-t">
              <h3 className="px-2 mb-2 text-sm font-medium">Uploaded PDFs</h3>
              <div className="space-y-1">
                {/* {uploadedPdfs.length > 0 ? (
                  uploadedPdfs.map((pdf) => (
                    <Button
                      key={pdf.id}
                      variant={activePdf === pdf.id ? "secondary" : "ghost"}
                      className="w-full justify-start text-sm"
                      onClick={() => setActivePdf(pdf.id)}
                    >
                      <div className={`w-4 h-4 mr-2 ${pdf.color} rounded-sm`}></div>
                      {pdf.name}
                    </Button>
                  )) */}
                {/* ) : ( */}
                  <p className="text-xs text-muted-foreground px-2">No PDFs uploaded yet</p>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AppSidebar