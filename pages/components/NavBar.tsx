import React from "react";
import Link from "next/link";
import NavbarLink from "./NavBarLink";

const NavBar: React.FC = () => {
  return (
    <div className="bg-base-white shadow-3xs py-5 px-4 lg:px-20 text-base-black font-poppins">
      <div className="flex items-center justify-between">
        <div className="self-stretch bg-base-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0] flex flex-row items-center justify-between pt-[39px] pb-[38px] pr-2 pl-20 box-border gap-[20px] max-w-full text-left text-sm text-base-black font-poppins mq1050:pl-10 mq1050:box-border">
        <div className="flex flex-row items-end justify-start gap-[10px]">
          <img className="h-[29.1px] w-8 relative" alt="" src="/images/logo/nologo.png" />
          <NavbarLink
              as="/home"
              href="/screen/home/Home"
              size=""
              colorBase=""
              colorClick=""
              className=""
            >
            <img
              className="h-[26px] w-[123.6px] relative"
              loading="eager"
              alt=""
              src="/images/logo/nolosay-black.png"
            />
          </NavbarLink>
        </div>
        </div>
        <div className="flex gap-8 lg:flex lg:flex-row lg:items-center lg:gap-8">
          <NavbarLink
            as="/about"
            href="/screen/about/About"
            size="18px"
            colorBase="black"
            colorClick="yellow-300"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Qui sommes-nous ?
          </NavbarLink>
          <NavbarLink
            href="/screen/app/AppHome"
            as="Nolosay"
            size="18px"
            colorBase="black"
            colorClick="yellow-300"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Nolosay app
          </NavbarLink>
          <NavbarLink
            as=""
            href="/faq"
            size="18px"
            colorBase="black"
            colorClick="yellow-300"
            passHref
            shallow
            className="font-medium bg-transparent border-none outline-none"
          >
            Questions fréquentes
          </NavbarLink>
        </div>
        <div className="lg:flex flex-row items-center gap-8 text-gray-200">
          <NavbarLink
            as="/home"
            href="/screen/home"
            size=""
            colorBase="gray-200"
            colorClick=""
            className="font-medium"
          >
            Je me connecte
          </NavbarLink>
          <div className="rounded-full bg-gray-300 flex items-center justify-center py-2 px-6 gap-2 text-base-white">
            <NavbarLink
              as="/home"
              href="/screen/home"
              size=""
              colorBase="base-white"
              colorClick=""
              className="font-semibold"
            >
              Je m'inscris :)
            </NavbarLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
