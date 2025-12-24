"use client";
import WalletIcon from "../../../components/icons/walleticon";
import GoogleIcon from "../../../components/icons/googleicon"
import AppEmailInputField from "../../../components/appEmailInputField/appEmailInputField"
import AppPasswordInputField from "../../../components/appPasswordField/appPasswordField"
import AppPrimaryButton from "../../../components/appPrimaryButton/appPrimaryButton"
import {useRouter} from "next/navigation"
const ForgotPassword = () => {
    const router = useRouter()
       
    return(
        <div className="flex items-center justify-center w-full">
            <div>
                <div className="flex items-center justify-center p-4 gap-6">
                    <WalletIcon />
                    <span className='text-2xl font-bold'>
                    Expense Tracker
                    </span>          
                </div>
                <div className="flex items-center justify-center">
                    <div className="text-2xl font-bold">
                        Reset your password
                    </div>
                </div>
                <div className="pt-4 bg-white shadow-md rounded-md w-100 mt-4">
                    <div className="flex items-center justify-center ">
                        <div>
                            <div className="pt-2">
                            <AppEmailInputField></AppEmailInputField>
                            </div>
                            <div className="pt-6 mb-6">
                                <AppPrimaryButton className="w-90 flex items-center justify-center">
                                    <span className="text-sm">Send Reset Link</span>
                                </AppPrimaryButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword