import React from "react";



const AppPrimaryButton = ({children, onClick}: {children: React.ReactNode, onClick: () => void}) => {
    return (
        <button className="bg-[#2563eb] text-white text-md font-medium px-4 py-2 rounded-md hover:cursor-pointer" onClick={onClick}>
            {children}
        </button>
    )
}
export default AppPrimaryButton;