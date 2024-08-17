// components/Layout.js

import React, { ReactNode } from "react";
import FooterContainer from "../FooterContainer/FooterContainer";
import AnimatedNavbar from "../AnimatedNavbar/AnimatedNavbar";
import { useState, useEffect, useContext } from "react";

interface LayoutProps {
  children: ReactNode;
}

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-base-white flex flex-col w-full text-left text-base text-base-white font-poppins gap-y-3 min-h-screen",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };
    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={styles["mainDiv"]}>
      <AnimatedNavbar InApp={isSmallScreen} />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
