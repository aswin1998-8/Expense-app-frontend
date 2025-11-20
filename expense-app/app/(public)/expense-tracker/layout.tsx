import React from "react";
import Navbar from "@/components/navigation/navbar";

export default function ExpenseTrackerLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <Navbar />
        {children}
        </>
    )
}