"use client";
import AppPrimaryButton from "../../../components/appPrimaryButton/appPrimaryButton";
import CheckIcon from "../../../components/icons/checkicon"
import ArrowIcon from "../../../components/icons/arrowicon"
import ChartIcon from "../../../components/icons/charticon"
import PieChartIcon from "../../../components/icons/piecharticon"
import MobileIcon from "../../../components/icons/mobileicon"
import LockIcon from "../../../components/icons/lockicon"
import Image from "next/image"
const ExpenseTracker = () => {
    return (
       <div className="bg-[#F9FAFB] pt-25">
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
                        <AppPrimaryButton className="w-52 h-16 flex items-center justify-center" onClick={() => {}}>
                            <div className="flex gap-2 items-center justify-center">
                            Get Started Free
                            <ArrowIcon></ArrowIcon>
                            </div>
                        </AppPrimaryButton>
                        </div>
                        <div className="p-1 pl-4">
                        <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
                            Sign In
                        </button>
                        </div>
                        
                    </div>
                    <div className="mt-6 flex  col-2 pl-1">
                        <div className="flex items-center justify-center">
                            <div>
                            <CheckIcon></CheckIcon>
                            </div>
                            <div>
                                <p className="text-sm pl-2">No credit card required</p>
                            </div>
                        </div>
                        <div className="pl-6 flex items-center  justify-center">
                        <div>
                           <CheckIcon></CheckIcon>
                        </div>
                        <div>
                           <p className="text-sm pl-2">Free forever</p>
                        </div>
                        </div>
                    </div>
                </div>
               <div className="w-1/2 relative">           
                    <div className="w-full">
                        <Image
                            src="/calculator-image.jpg"
                            alt="Calculator app interface showing financial calculations"
                            width={1200}
                            height={800}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-8 -left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3">
                        <div className="p-3 rounded-lg">
                            <ChartIcon  />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Monthly Savings</p>
                            <p className="text-xl font-bold text-gray-900">+$1,265</p>
                        </div>
                    </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-25">
                <div className="w-1/3 bg-white h-55 rounded-md shadow-md mr-6 p-6">
                    <div>
                        <PieChartIcon></PieChartIcon>
                    </div>
                    <div className="pt-4">
                        <div className="text-xl font-semibold">
                            Smart Analytics
                        </div>
                        <div className="text-md  text-gray-600 pt-4">
                            Get detailed insights into your spending patterns and income sources with beautiful charts.
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-55 bg-white rounded-lg shadow-md mr-6 p-6">
                    <div>
                        <MobileIcon></MobileIcon>
                    </div>
                    <div className="pt-4">
                        <div className="text-xl font-semibold">
                            Mobile Friendly
                        </div>
                        <div className="text-md text-gray-600 pt-4">
                            Track your finances on the go with our fully responsive mobile-optimized design.
                        </div>    
                    </div>
                    </div>
                     <div className="w-1/3 h-55  bg-white rounded-lg shadow-md p-6">
                    <div>
                        <LockIcon></LockIcon>
                    </div>
                    <div className="pt-4">
                        <div className="text-xl font-semibold">
                            Secure & Private
                        </div>
                        <div className="text-md text-gray-600 pt-4">
                            Your financial data is encrypted and stored securely. We never share your information.
                        </div>    
                    </div>
                
                </div>
                </div>
               
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default ExpenseTracker;