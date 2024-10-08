import { useState, useEffect, useContext } from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import {
  UserContext,
  defaultUser,
} from "@global/contexts/UserProvider";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from "../../../../node_modules/@mui/material/index";
import ProfileButton from "./ProfileButton/ProfileButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  container_0: "flex items-center gap-2",
  container_1: "w-8 h-8",
  container_2: "bg-transparent hover:cursor-pointer",
  container_3: "w-32 h-8",
  container_4:
    "text-zinc-500 hover:underline hover:cursor-pointer bg-transparent underline-offset-2 text-base",
  container_5: "flex flex-row justify-around items-center w-full px-5",
  container_6: "flex flex-row justify-between items-center",
  container_7:
    "flex flex-row items-center gap-3 text-gray-200 bg-gray-50 rounded-2.5xl px-3 py-2 hover:cursor-pointer",
  container_8: "font-medium text-base",
  container_9:
    "rounded-full bg-gray-300 hover:cursor-pointer flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold hover:underline",
  container_10: "font-semibold text-base",
  container_11: "p-3",
  container_12: "flex flex-row items-center px-10 h-24 shadow-md",
  container_13:
    "flex flex-row items-center gap-8 text-gray-200 bg-transparent hover:underline hover:cursor-pointer",
  container_14:
    "rounded-full bg-gray-300 hover:cursor-pointer flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold hover:underline",
  container_15:
    "flex flex-row justify-around w-full px-5 items-center gap-5 text-gray-200",
};

export type NavLinkProps = {
  links: { href: string; title: string; props?: any }[];
  handleChangePage: (link: string, props?: any) => void;
};

type NavbarProps = {
  InApp?: boolean;
  LoginStatus?: boolean;
};

const NavLinksItems = [
  { href: "/about", title: "" },
  { href: "/findlocation", title: "" },
  { href: "/tickets", title: "" },
];

interface logoButtonProps {
  handleChangePage: (link: string, props?: any) => void;
}
const LogoButton = ({ handleChangePage }: logoButtonProps) => {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      <img
        className={`container_1 ${styles.container_1}`}
        alt=""
        src="/images/logo/nologo.png"
      />
      <button
        className={`container_2 ${styles.container_2}`}
        onClick={() => handleChangePage("/home")}
      >
        <img
          className={`container_3 ${styles.container_3}`}
          alt=""
          src="/images/logo/nolosay-black.png"
        />
      </button>
    </div>
  );
};

const NavLinks = ({ links, handleChangePage }: NavLinkProps) => {
  const renderLinks = () => {
    return links.map((link, index) => (
      <button
        key={index}
        onClick={() => handleChangePage(link.href, link.props)}
        className={`container_4 ${styles.container_4}`}
      >
        {link.title}
      </button>
    ));
  };

  return (
    <div className={`container_5 ${styles.container_5}`}>{renderLinks()}</div>
  );
};

interface loginButtonProps {
  handleChangePage: (link: string) => void;
}
const LoginButton = ({ handleChangePage }: loginButtonProps) => {
  return (
    <div className={`container_6 ${styles.container_6}`}>
      <button
        onClick={() => handleChangePage("/connection")}
        className={`container_7 ${styles.container_7}`}
      >
        <PersonIcon />
        {textData.page.components.animatedNavBar.profile}
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
          <div className={`container_11 ${styles.container_11}`}>
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

const AnimatedNavbar: React.FC<NavbarProps> = ({ InApp }: NavbarProps) => {
  const { user, setUser } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(
    user.accessToken != "" ? true : false
  );
  const navigate = useNavigate();

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
    <div className={`container_12 ${styles.container_12}`}>
      {InApp && (
        <div>
          <IconButton
            sx={{ paddingX: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            {isLogged ? (
              <ListItem>
                <ListItemButton>
                  <ProfileButton name={user.username} />
                </ListItemButton>
              </ListItem>
            ) : (
              <List>
                <ListItem>
                  <ListItemButton
                    onClick={() => handleChangePage("/connection")}
                    className={`container_13 ${styles.container_13}`}
                  >
                    <ListItemText primary={"Connexion"} />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => handleChangePage("/subscription")}
                    className={`container_14 ${styles.container_14}`}
                  >
                    <ListItemText primary={`Inscription`} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Drawer>
        </div>
      )}
      <LogoButton handleChangePage={handleChangePage} />
      {InApp ? (
        <NavLinks
          links={[...NavLinksItems]}
          handleChangePage={handleChangePage}
        />
      ) : (
        <div className={`container_15 ${styles.container_15}`}>
          <NavLinks
            links={[...NavLinksItems]}
            handleChangePage={handleChangePage}
          />
          <Divider orientation="vertical" variant="middle" flexItem />
          {isLogged ? (
            <ProfileButton name={user.username} />
          ) : (
            <LoginButton handleChangePage={handleChangePage} />
          )}
        </div>
      )}
    </div>
  );
};

export default AnimatedNavbar;
