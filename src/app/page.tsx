"use client";

import { AppSidebar } from "@/core/components/app-sidebar";
import Canvas from "@/core/components/canvas";
import { SidebarProvider, SidebarTrigger } from "@/core/components/ui/sidebar";

export default function Home() {
    return (
        <SidebarProvider className="flex">
            <AppSidebar />
            <main className="relative flex flex-1">
                <SidebarTrigger className="drop-shadow-lg relative p-4 bg-white m-4 z-10" />
                <Canvas />
            </main>
        </SidebarProvider>
    );
}
