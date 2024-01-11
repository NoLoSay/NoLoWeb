import React from "react";
import Link from "next/link";
import NavbarLink from "./NavBarLink";

const NavBar: React.FC = () => {
  return (
    <div className="bg-base-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.1)] py-5 px-4 lg:px-20 text-base-black font-poppins">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" alt="" src="/images/logo/nologo.png" />
          <NavbarLink
            as="/home"
            href="/screen/home/Home"
            size=""
            colorBase=""
            colorClick=""
            className=""
          >
            <img
              className="w-32 h-8"
              alt=""
              src="/images/logo/nolosay-black.png"
            />
          </NavbarLink>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-8">
          <NavbarLink
            as="/about"
            href="/screen/about/About"
            size="18px"
            colorBase="black"
            colorClick="yellow"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Qui sommes-nous ?
          </NavbarLink>
          <NavbarLink
            href="/nolosay-app"
            as=""
            size="18px"
            colorBase="black"
            colorClick="yellow"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Nolosay app
          </NavbarLink>
          <NavbarLink
            as = ""
            href="/faq"
            size="18px"
            colorBase="black"
            colorClick="yellow"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Questions fréquentes
          </NavbarLink>
          <NavbarLink
            as = ""
            href="/videoAccess"
            size="18px"
            colorBase="black"
            colorClick="yellow"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            VideoAccess
          </NavbarLink>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-8 text-gray-200">
          <NavbarLink
            as="/home"
            href="/screen/home"
            size=""
            colorBase="grey"
            colorClick=""
            className=""
          >
            <div className="font-medium">Je me connecte</div>
          </NavbarLink>
          <div className="rounded-full bg-gray-300 flex items-center justify-center py-2 px-6 gap-2 text-base-white">
            <NavbarLink
              as="/home"
              href="/screen/home"
              size=""
              colorBase="white"
              colorClick=""
              className=""
            >
              <div className="font-semibold">Je m'inscris :)</div>
            </NavbarLink>
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-4">
          <button className="focus:outline-none">
            <img className="w-6 h-6" src="/menu-icon.png" alt="Menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
