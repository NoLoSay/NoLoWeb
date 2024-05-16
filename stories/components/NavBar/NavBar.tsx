import React from "react";
import Link from "next/link";
import NavbarLink from "../NavBarLink/NavBarLink";

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-base-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.1)] py-5 px-4 lg:px-20\
    text-base-black font-poppins flex items-center justify-between",
};

const NavBar: React.FC = () => {
  return (
    <div className={styles["mainDiv"]}>
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
      <div className="flex flex-row items-center gap-8">
        <NavbarLink
          as="/findvideo"
          href="/screen/find_video/FindVideo"
          size="18px"
          colorBase="black"
          colorClick="yellow"
          passHref
          shallow
          className="font-medium bg-transparent border-none outline-none"
        >
          Trouver une traduction
        </NavbarLink>

        {/* remove the commented code below when the development of the pages is done */}
        {/* <NavbarLink
          as="/tickets"
          href="/screen/creationSection/artworkToTranslateSelectionSection/ArtworkToTranslateSelectionScreen"
          size="18px"
          colorBase="black"
          colorClick="yellow"
          passHref
          shallow
          className="font-medium bg-transparent border-none outline-none"
        >
          Oeuvres à traduire
        </NavbarLink> */}
        {/* <NavbarLink
          as="/record"
          href="/screen/videoCaptureSection/RecordVideo"
          size="18px"
          colorBase="black"
          colorClick="yellow"
          passHref
          shallow
          className="font-medium bg-transparent border-none outline-none"
        >
          Enregistrer une vidéo
        </NavbarLink> */}

        <NavbarLink
          href="/screen/find_video/"
          as=""
          size="18px"
          colorBase="black"
          colorClick="yellow"
          passHref
          shallow
          className="font-medium bg-transparent border-none outline-none"
        >
          Traduire un texte
        </NavbarLink>
        <NavbarLink
          as=""
          href="/faq"
          size="18px"
          colorBase="black"
          colorClick="yellow"
          passHref
          shallow
          className="font-medium bg-transparent border-none outline-none"
        >
          Mes vidéos
        </NavbarLink>
      </div>
      <div className="flex flex-row items-center gap-8 text-gray-200">
        <NavbarLink
          as="/connection"
          href="/screen/authenticationSection/connection/ConnectionScreen"
          size=""
          colorBase="grey"
          colorClick=""
          className=""
        >
          <div className="font-medium">Je me connecte</div>
        </NavbarLink>
        <div className="rounded-full bg-gray-300 flex items-center justify-center py-2 px-6 gap-2 text-base-white">
          <NavbarLink
            as="/subscription"
            href="/screen/authenticationSection/subscription/SubscriptionScreen"
            size=""
            colorBase="white"
            colorClick=""
            className=""
          >
            <div className="font-semibold">Je m'inscris :)</div>
          </NavbarLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
