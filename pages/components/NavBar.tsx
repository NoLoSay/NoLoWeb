import React from "react";
import Link from "next/link";
import NavbarLink from "./NavBarLink";

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-gray-300 py-7 my-auto text-base-black font-poppins flex items-center justify-between",
};


const NavBar: React.FC = () => {
  return (
    <div className={styles["mainDiv"]}>
      <div className="flex mx-auto items-center">
        <NavbarLink
          as="/home"
          href="/screen/home/Home"
          size=""
          colorBase=""
          colorClick=""
          className=""
        >
          <img
            className="w-max h-14 sm:h-5  items-center"
            alt=""
            src="/images/logo/WhiteLogo.png"
          />
        </NavbarLink>
      </div>
    </div>
  );
};

export default NavBar;
