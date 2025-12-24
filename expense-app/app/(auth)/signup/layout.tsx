import React from "react";

export default function SignupLayout({children}: {children: React.ReactNode}) {
    return (
        <>
        <div className="bg-[#F9FAFB] min-h-screen flex items-center justify-center">
        {children}
        </div>
        </>
    )
}