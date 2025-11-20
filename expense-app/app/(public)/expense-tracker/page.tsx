"use client";
import AppPrimaryButton from "../../../components/appPrimaryButton/appPrimaryButton";
import CheckIcon from "../../../components/icons/checkicon"
import ArrowIcon from "../../../components/icons/arrowicon"
const ExpenseTracker = () => {
    return (
       <div className="mt-50">
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