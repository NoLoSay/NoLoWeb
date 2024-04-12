// components/Layout.js
import NavBar from "./NavBar";
import React, { ReactNode } from "react";
import FooterContainer from "./FooterContainer";
import NewsletterField from "./NewsletterField/NewsletterField";
import AnimatedNavbar from "./AnimatedNavbar/AnimatedNavbar";

interface LayoutProps {
  children: ReactNode;
}

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-base-white flex flex-col w-full text-left text-base text-base-white font-poppins gap-y-3 min-h-screen",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles["mainDiv"]}>
      <AnimatedNavbar />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
