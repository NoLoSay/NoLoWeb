// components/Layout.js
import NavBar from "./NavBar";
import React, { ReactNode } from "react";
import FooterContainer from "./FooterContainer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative rounded-3xs bg-base-white w-full h-[2041px] overflow-hidden text-left text-mini text-base-white font-poppins">
      <NavBar />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;