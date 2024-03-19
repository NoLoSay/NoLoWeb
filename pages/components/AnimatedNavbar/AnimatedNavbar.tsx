import SearchBar from "../SearchBar/SearchBar";
import NavbarLink from "../NavBarLink";
import { useState } from "react";
import Link from "next/link";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText, Divider, IconButton, ButtonBase } from "@mui/material";
import { ArrowBack, Menu } from "@mui/icons-material";
import ProfileButton from "../ProfileButton/ProfileButton";


type NavLinkProps = {
  links: { href: string; title: string; }[];
};

type LinkListProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { href: string; title: string; }[];
};

type NavbarProps = {
  InApp?: boolean;
  LoginStatus?: boolean;
};

type LogoProps = {
  className?: string;
};

const NavLinksItems = [
  { href: "/about", title: "Qui sommes-nous ?" },
  { href: "/nolosay-app", title: "Nolosay app" },
  { href: "/faq", title: "FAQ" },
  { href: "/videoAccess", title: "VideoAccess" },
  { href: "/location", title: "Location" },
  { href: "/account", title: "Mon compte" }
];

const LogoButton = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img className="visible w-8 h-8" alt="" src="/images/logo/nologo.png" />
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
  );
}

const NavLinks = ({ links }: NavLinkProps) => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <Link key={index} href={link.href} className="text-zinc-500 hover:underline underline-offset-2">
        {link.title}
      </Link>
    ));
  };

  return (
    <div className="flex flex-row justify-around items-center w-full px-5 ">
      {renderLinks()}
    </div>
  );
};

const LoginButton = () => {
  return (
    <div className="flex flex-row justify-between items-center space-x-4">
      <Link href={"/screen/home"} className="flex flex-row items-center gap-8 text-gray-200">
        <div className="font-medium">Je me connecte</div>
      </Link>
      <Link href={"/screen/home"} className="rounded-full bg-gray-300 flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold">
        <div className="font-semibold">Je m'inscris :)</div>
      </Link>
    </div>
  );
}

export function LinkList({ links, setIsDrawerOpen }: LinkListProps) {

  const renderLinks = () => {
    return links.map((link, index) => (
      <ListItem disablePadding key={index}>
        <ListItemButton href={link.href}>
          <ListItemText primary={link.title} />
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <Box sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <div className="p-3 flex flex-row items-center justify-between">
            <LogoButton />
            <button onClick={() => setIsDrawerOpen(false)} className="bg-white">
              <ArrowBack />
            </button>
          </div>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemText primary={" "} />
            </ListItemButton>
          </ListItem>
          {renderLinks()}
        </List>
      </nav>
    </Box>
  );
}

const AnimatedNavbar = ({ InApp, LoginStatus }: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(LoginStatus);

  return (
    <div className="flex flex-row items-center px-10 h-20 shadow-md">

      <div className={`${InApp ? "" : " hidden sm:block"}`}>
        <IconButton sx={{ paddingX: 2 }} onClick={() => setIsDrawerOpen(true)}>
          <Menu />
        </IconButton>

        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <LinkList setIsDrawerOpen={setIsDrawerOpen} links={[...NavLinksItems]} />
          <div className="hidden sm:block flex flex-row items-center gap-8 text-gray-200 mt-auto">
            <Divider orientation="vertical" variant="middle" flexItem />
            {isLogged ? <ProfileButton /> : <LoginButton />}
          </div>
        </Drawer>
      </div>

      <LogoButton className={`${InApp ? "hidden" : " block sm:hidden"}`} />

      {InApp ? <SearchBar /> : <NavLinks links={[...NavLinksItems]} />}

      <div className="sm:hidden flex flex-row items-center gap-8 text-gray-200">
        {isLogged ? <ProfileButton /> : <LoginButton />}
        <Divider orientation="vertical" variant="middle" flexItem />
      </div>
    </div>
  );
}

export default AnimatedNavbar;