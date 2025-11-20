import React from "react";



const AppPrimaryButton = ({children, onClick, className}: {children: React.ReactNode, onClick: () => void, className:string}) => {
    return (
        <button className={`bg-[#2563eb] text-white text-md font-medium px-4 py-2 rounded-md hover:cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}
export default AppPrimaryButton;