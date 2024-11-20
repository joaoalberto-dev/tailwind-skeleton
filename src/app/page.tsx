"use client";

import { AppSidebar } from "@/core/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/core/components/ui/sidebar";

export default function Home() {
    return (
        <SidebarProvider className="flex">
            <AppSidebar />
            <main className="flex flex-1">
                <SidebarTrigger />
            </main>
        </SidebarProvider>
    );
}
