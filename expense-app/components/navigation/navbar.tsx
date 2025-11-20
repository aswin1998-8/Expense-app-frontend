"use client";
import React from "react";
import Link from "next/link";
import WalletIcon from "../icons/walleticon";
import AppPrimaryButton from "../appPrimaryButton/appPrimaryButton";

const Navbar = () => {
    return (
        <nav
        id="navBar"
        className="fixed top-0 left-0 right-0 z-[50] bg-white"
        role="navigation"
        aria-label="Main navigation"
        style={{
          width: "100vw",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="shadow-sm bg-white">
        <div className="max-w-7xl mx-auto font-bold  py-4 px-8 flex justify-between gap-2">
            <div className="flex items-center gap-4">
            <WalletIcon />
            <span className='text-xl font-bold'>
            Expense Tracker
            </span>
            
            </div>

            <div className="flex items-center gap-4">
                <span className='text-gray-600  text-md font-medium hover:cursor-pointer' onClick={() => {}}>
                Login 
                </span>
                
                <AppPrimaryButton className="px-4" onClick={() => {}}>
                    Sign Up
                </AppPrimaryButton>

            </div>
        
        </div>
        </div>
        </nav>
    )
}
export default Navbar;