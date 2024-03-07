import SearchBar from "../SearchBar/SearchBar";
import NavbarLink from "../NavBarLink";
import { useState } from "react";
import Link from "next/link";
import { Drawer, Button, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton } from "@mui/material";
import { Drafts, Inbox, Menu } from "@mui/icons-material";
import { useRouter } from "next/router";


type NavLinkProps = {
  links: { href: string; title: string; }[];
};

type NavbarProps = {
  InApp?: boolean;
};

const NavLinksItems = [
  { href: "/about", title: "Qui sommes-nous ?" },
  { href: "/nolosay-app", title: "Nolosay app" },
  { href: "/faq", title: "FAQ" },
  { href: "/videoAccess", title: "VideoAccess" },
  { href: "/location", title: "Location" },
  { href: "/account", title: "Mon compte" }
];

const LogoButton = () => {
  return (
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
  );
}

const NavLinks = (props: NavLinkProps) => {
  const renderLinks = () => {
    return props.links.map((link, index) => (
      <Link key={index} href={link.href}>
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
      <Link href={"/screen/home"} className="hidden lg:flex flex-row items-center gap-8 text-gray-200">
        <div className="font-medium">Je me connecte</div>
      </Link>
      <Link href={"/screen/home"} className="rounded-full bg-gray-300 flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold">
        <div className="font-semibold">Je m'inscris :)</div>
      </Link>
    </div>
  );
}

export function LinkList(props: NavLinkProps) {

  const renderLinks = () => {
    return props.links.map((link, index) => (
      <ListItem disablePadding>
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
          <LogoButton />
          <Divider />
          {renderLinks()}
        </List>
      </nav>
    </Box>
  );
}

const AnimatedNavbar = (props: NavbarProps) => {
  const [searchBarNeeded, setSearchBarNeeded] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-row items-center bg-slate-300 p-3">
      {props.InApp ? (
        <div>
          <IconButton sx={{ paddingX: 2 }} onClick={() => setIsDrawerOpen(true)}>
            <Menu />
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <LinkList links={[...NavLinksItems]} />
          </Drawer>
        </div>) : null}
      <LogoButton />
      {props.InApp ? <SearchBar /> : <NavLinks links={[...NavLinksItems]} />}
      <div className="hidden lg:flex flex-row items-center gap-8 text-gray-200">
        <LoginButton />
      </div>
    </div>
  );
}

export default AnimatedNavbar;