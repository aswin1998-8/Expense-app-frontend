import React from "react";



const AppPrimaryButton = ({children, onClick, className}: {children: React.ReactNode, onClick: () => void, className:string}) => {
    return (
        <button className={`bg-[#2563eb] text-white text-md font-medium py-2 rounded-md hover:cursor-pointer hover:bg-blue-700 font-semibold text-lg transition ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default AppPrimaryButton;