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
      <div className="flex gap-4 mx-auto ">
        <img className=" w-10 h-10" alt="" src="/images/logo/nologo.png" />
        <NavbarLink
          as="/home"
          href="/screen/home/Home"
          size=""
          colorBase=""
          colorClick=""
          className=""
        >
          <img
            className="w-max h-10"
            alt=""
            src="/images/logo/nolosay-white.png"
          />
        </NavbarLink>
      </div>
    </div>
  );
};

export default NavBar;
