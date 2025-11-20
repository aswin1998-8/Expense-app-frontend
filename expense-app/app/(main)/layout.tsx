import React from "react";
import Sidebar from "@/components/navigation/sidebar";
import Mainlayout from "@/components/navigation/Mainlayout";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Mainlayout>
        {children}
        </Mainlayout>
        </>
    )
}