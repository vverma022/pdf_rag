import AppSidebar from "./sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

type Props = {
    children: React.ReactNode
}

const SidebarLayout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className='w-full m-2'>
                <div className='h-4'></div>
                <div className='border-sidebar-border bg-sidebar shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4'>
                    {children}
                </div>
        </main>
     </SidebarProvider>   
  )
}

export default SidebarLayout