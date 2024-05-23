import { ButtonBase, Divider } from '@mui/material';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import { NavLinkProps } from 'react-router-dom';

export const NavLinksItems = [
  { href: "/AccountSettings/profile", title: "Profile", id: 0 },
  { href: "/AccountSettings/profile", title: "Gestion du lieu", id: 1},
  { href: "/AccountSettings/profile", title: "Groupe de l'équipe", id: 2},
  { href: "/AccountSettings/profile", title: "Notifications", id: 3},
  { href: "/AccountSettings/profile", title: "Placeholder", id: 4},
  { href: "/AccountSettings/profile", title: "Placeholder", id: 5},
  { href: "/AccountSettings/profile", title: "Placeholder", id: 6},
];

const SideMenu = ({ handleChangeForm }: { handleChangeForm: (index: number) => void }) => {

  const renderButtons = () => {
    return NavLinksItems.map((link, index) => (
      <SideMenuButton key={index} title={link.title} path={link.href} onClick={() => handleChangeForm(index)}/>
    ));
  };

  return (
    <div className="flex flex-col col-span-1 text-black max-w-lg">
      <div className="flex flex-col space-y-2">
        {renderButtons()}
      </div>
    </div>
  );
};

export default SideMenu