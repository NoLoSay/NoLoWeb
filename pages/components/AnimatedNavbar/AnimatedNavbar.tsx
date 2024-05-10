import SearchBar from "./SearchBar";
import NavbarLink from "../NavBarLink/NavBarLink";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from "../../../node_modules/@mui/material/index";
import { Menu } from "../../../node_modules/@mui/material/index";
import ProfileButton from "../ProfileButton/ProfileButton";
import { UserContext, defaultUser } from "../../../contexts/UserProvider";
import MenuIcon from '@mui/icons-material/Menu';

type NavLinkProps = {
  links: { href: string; title: string }[];
  handleChangePage: (link: string) => void;
};

type NavbarProps = {
  InApp?: boolean;
  LoginStatus?: boolean;
};

const NavLinksItems = [
  { href: "/about", title: "" },
  { href: "/account", title: "" },
  { href: "/findlocation", title: "" },
  { href: "/record", title: "" },
  { href: "/tickets", title: "" },
];

interface logoButtonProps {
  handleChangePage: (link: string) => void;
}
const LogoButton = ({ handleChangePage }: logoButtonProps) => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-8 h-8" alt="" src="/images/logo/nologo.png" />
      <button
        className="bg-transparent hover:cursor-pointer"
        onClick={() => handleChangePage("/home")}
      >
        <img className="w-32 h-8" alt="" src="/images/logo/nolosay-black.png" />
      </button>
    </div>
  );
};

const NavLinks = ({ links, handleChangePage }: NavLinkProps) => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <button
        key={index}
        onClick={() => handleChangePage(link.href)}
        className="text-zinc-500 hover:underline hover:cursor-pointer bg-transparent underline-offset-2"
      >
        {link.title}
      </button>
    ));
  };

  return (
    <div className="flex flex-row justify-around items-center w-full px-5 ">
      {renderLinks()}
    </div>
  );
};

interface loginButtonProps {
  handleChangePage: (link: string) => void;
}
const LoginButton = ({ handleChangePage }: loginButtonProps) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-4">
      <button
        onClick={() => handleChangePage("/connection")}
        className="flex flex-row items-center gap-8 text-gray-200 bg-transparent hover:underline hover:cursor-pointer"
      >
        <div className="font-medium">Connexion</div>
      </button>
      <button
        onClick={() => handleChangePage("/subscription")}
        className="rounded-full bg-gray-300 hover:cursor-pointer flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold hover:underline"
      >
        <div className="font-semibold">{`Inscription`}</div>
      </button>
    </div>
  );
};

export function LinkList({ links, handleChangePage }: NavLinkProps) {
  const renderLinks = () => {
    return links.map((link, index) => (
      <ListItem disablePadding>
        <ListItemButton href={link.href}>
          <ListItemText primary={link.title} />
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <Box sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <div className="p-3">
            <LogoButton handleChangePage={handleChangePage} />
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

const AnimatedNavbar: React.FC<NavbarProps> = ({
  InApp,
  LoginStatus,
}: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(LoginStatus);
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const func = async (): Promise<void> => {
      if (user != defaultUser) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };
    func();
  }, [user]);

  function handleChangePage(link: string) {
    navigate(link);
  }

  return (
    <div className="flex flex-row items-center px-10 h-20 shadow-md">
      {InApp && (
        <div>
          <IconButton
            sx={{ paddingX: 2 }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <LinkList
              links={[...NavLinksItems]}
              handleChangePage={handleChangePage}
            />
          </Drawer>
        </div>
      )}
      <LogoButton handleChangePage={handleChangePage} />
      {InApp ? (
        <SearchBar />
      ) : (
        <NavLinks
          links={[...NavLinksItems]}
          handleChangePage={handleChangePage}
        />
      )}

      <div className="flex flex-row items-center gap-8 text-gray-200">
        <Divider orientation="vertical" variant="middle" flexItem />
        {isLogged ? (
          <ProfileButton />
        ) : (
          <LoginButton handleChangePage={handleChangePage} />
        )}
      </div>
    </div>
  );
};

export default AnimatedNavbar;
