"use client";
import WalletIcon from "../../../components/icons/walleticon";
import GoogleIcon from "../../../components/icons/googleicon"
import AppEmailInputField from "../../../components/appEmailInputField/appEmailInputField"
import AppPasswordInputField from "../../../components/appPasswordField/appPasswordField"
import AppPrimaryButton from "../../../components/appPrimaryButton/appPrimaryButton"
import AppInputField from "../../../components/appInputField/appInputField"
import {useRouter} from "next/navigation"

const signup = () => {
    const router = useRouter()
       
    return(
        <div className="flex items-center justify-center w-full">
            <div>
                <div className="flex items-center justify-center p-4 gap-6">
                    <WalletIcon />
                    <span className='text-3xl font-bold'>
                    Expense Tracker
                    </span>          
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold">
                        Welcome back
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <span className="text-md font-semi-bold">
                        Sign in to your account to continue
                    </span>
                </div>
                <div className="bg-white shadow-md rounded-md w-100  mt-2">
                    <div className="flex items-center justify-center pt-6">
                        <div>
                            <button className="flex items-center justify-center gap-4 border-gray-300 border-2 w-90 h-13 rounded-md font-semibold cursor-pointer space-x-3 mb-6">
                            <div className="flex gap-2 items-center justify-center">
                                <GoogleIcon></GoogleIcon>
                                    Continue with Google 
                                </div>
                            </button>
                            <div className="w-90 flex items-center justify-center gap-2">
                                <div className="w-25 border-1 border-gray-300">
                                </div>
                                <span className="text-sm text-gray-500">
                                Or Sign up with email 
                                </span>
                                <div className="w-25 border-1 border-gray-300">                            
                                </div>
                            </div>
                            <div className="pt-6">
                                <AppInputField label={"Full Name *"}></AppInputField>
                            </div>
                            <div className="pt-6">
                            <AppEmailInputField></AppEmailInputField>
                            </div>
                            <div className="pt-6">
                                <AppPasswordInputField label={"Password *"}></AppPasswordInputField>
                                <span className="text-xs text-gray-500 mt-1">Must be at least 8 characters</span>
                            </div>
                            <div className="pt-6">
                                <AppPasswordInputField label={"Confirm Password *"}></AppPasswordInputField>
                            </div>
                            <div className="pt-4 gap-2 flex items-center">
                                <input type="checkbox" className=""></input>
                                <div className="text-xs">
                                    I agree to the <span className="text-blue-500 hover:underline cursor-pointer">Terms of Service</span> and  <span className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <AppPrimaryButton className="w-90 flex items-center justify-center" onClick={() => router.push("/home")}>
                                    <span className="text-sm">Create Account</span>
                                </AppPrimaryButton>
                            </div>
                            <div className="pt-4 mb-4 flex items-center justify-center">
                               <div className="text-sm font-medium">Already have an account? </div> 
                               <div className="pl-2 text-blue-500 hover:underline cursor-pointer text-sm" onClick={() => router.push("/login")}>Sign In</div> 

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default signup