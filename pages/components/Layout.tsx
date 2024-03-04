// components/Layout.js
import NavBar from "./NavBar";
import React, { ReactNode } from "react";
import FooterContainer from "./FooterContainer";

interface LayoutProps {
  children: ReactNode;
}

const styles: {[key: string]: string} = {
  /* Default */
  // mainDiv: "relative rounded-3xs bg-base-white w-full h-[2041px] overflow-hidden text-left text-mini text-base-white font-poppins",

  /* Rework */
  mainDiv: "bg-base-white flex flex-col w-full text-left text-mini text-base-white font-poppins gap-y-3",
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["mainDiv"]}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;