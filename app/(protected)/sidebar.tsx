"use client"
import { LayoutGrid, Layers, Users, Settings, SettingsIcon as Functions, Codesandbox, icons, BrainCircuit } from "lucide-react"
import { Sidebar , SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarGroupContent, SidebarGroupLabel, SidebarMenuItem, SidebarContent, SidebarGroup, useSidebar, SidebarFooter } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { title } from "process";
import { url } from "inspector";
import { ModeToggle } from "@/components/ui/mode-toggle";


const MenuItem = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutGrid },
  { title: "Settings", url: "/settings", icon: Settings },
  {title: "Add", url:"/add-data", icon: BrainCircuit}
  
];

const AppSidebar = () => {
  const pathname = usePathname()
    const {open} = useSidebar()

  return (
    <Sidebar>
  <SidebarHeader>
    <div className="flex items-center gap-4 m-4 pl-2">
      <Codesandbox className="h-6 w-6" />
      {open && <span className="font-bold text-xl">VectorVerse</span>}
    </div>
  </SidebarHeader>

  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold text-md">Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {MenuItem.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className={cn({
                    '!bg-primary !text-secondary': pathname === item.url,
                  })}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>

    <SidebarGroup>
      <SidebarGroupLabel className="font-semibold text-md">Uploaded PDFs</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {/* {uploadedPdfs?.length > 0 ? (
            uploadedPdfs.map((pdf) => (
              <SidebarMenuItem key={pdf.id}>
                <SidebarMenuButton asChild>
                  <Button
                    variant={activePdf === pdf.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setActivePdf(pdf.id)}
                  >
                    <div className={`w-4 h-4 mr-2 ${pdf.color} rounded-sm`}></div>
                    {pdf.name}
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )) */}
          {/* ) : ( */}
            <p className="text-xs text-red-400 flex justify-center mt-4">
              No PDFs uploaded yet
            </p>
          {/* )} */}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>
  <div className="flex justify-between items-center p-4">
    <span className="text-sm">© 2025 VectorVerse.</span>
    <div className="flex justify-end">
      <ModeToggle />
    </div>
  </div>
</SidebarFooter>
</Sidebar>
  )
}

export default AppSidebar