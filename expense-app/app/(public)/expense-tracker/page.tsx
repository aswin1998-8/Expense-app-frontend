"use client";
import React from "react";
import AppPrimaryButton from "../../../components/appPrimaryButton/appPrimaryButton";
import CheckIcon from "../../../components/icons/checkicon"
const ExpenseTracker = () => {
    return (
       <div className="mt-60">
        <div className="max-w-6xl mx-auto mx-6 my-4">
            <div className="flex items-center justify-between my-8">
                <div className="w-1/2">
                    <div>
                       <h1 className="text-5xl font-semibold">Take control of your finances today</h1>
                    </div>
                    <div className="mt-6">
                       <span className="text-xl font-medium text-gray-500">Track expenses, manage income, and achieve your financial goals with our smart budgeting tool.</span>
                    </div>
                    <div className="mt-6 flex  col-2">
                        <div className="p-1">
                        <AppPrimaryButton className="w-46 h-16" onClick={() => {}}>
                            Get Started Free
                        </AppPrimaryButton>
                        </div>
                        <div className="p-1 pl-4">
                        <button className="bg-[white] text-md font-medium px-4 py-2 border rounded-md hover:cursor-pointer w-32 h-16">
                            Sign In
                        </button>
                        </div>
                        
                    </div>
                    <div className="mt-1 flex  col-2">
                        <div className="p-1 flex">
                        <CheckIcon></CheckIcon><p className="text-sm pl-2">No credit card required</p>
                        </div>
                        <div className="p-1 flex">
                        <CheckIcon></CheckIcon><p className="text-sm pl-2">Free forever</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    image tag div
                </div>
            </div>
            <div>
                Three cards div
            </div>
            <div>
                
            </div>
        </div>
       </div>
    )
}
export default ExpenseTracker;