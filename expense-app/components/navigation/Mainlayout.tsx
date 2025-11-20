import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
  }

const Mainlayout:React.FC<MainLayoutProps> = React.memo(({children}) => {
    return (
        <>
        {/* <Navbar /> */}
        <Sidebar />
        {children}
        </>
    );


});

export default Mainlayout;