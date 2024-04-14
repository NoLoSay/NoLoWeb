// components/Layout.js
import NavBar from "../NavBar/NavBar";
import React, { ReactNode } from "react";
import FooterContainer from "../FooterContainer/FooterContainer";
import NewsletterField from "../NewsletterField/NewsletterField";
import AnimatedNavbar from "../AnimatedNavbar/AnimatedNavbar";

interface LayoutProps {
  children: ReactNode;
}

const styles: { [key: string]: string } = {
  /* Default */
  // mainDiv: "relative rounded-3xs bg-base-white w-full h-[2041px] overflow-hidden text-left text-mini text-base-white font-poppins",

  /* Rework */
  mainDiv:
    "bg-base-white flex flex-col w-full text-left text-mini text-base-white font-poppins gap-y-3 min-h-screen",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["mainDiv"]}>
      <AnimatedNavbar />
      {children}
      <FooterContainer/>
    </div>
  );
};

export default Layout;
