import { ButtonBase, Divider } from '@mui/material';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import { useNavigate } from 'react-router-dom';

export const NavLinksItems = [
  { href: "/AccountSettings/profile", title: "Profile", id: 0 },
  { href: "/AccountSettings/profile", title: "Gestion du lieu", id: 1},
  { href: "/AccountSettings/profile", title: "Groupe de l'équipe", id: 2},
  { href: "/AccountSettings/profile", title: "Notifications", id: 3},
];

const SideMenu = ({ handleChangeForm }: { handleChangeForm: (index: number) => void }) => {
  const navigate = useNavigate();

  const renderButtons = () => {
    return NavLinksItems.map((link, index) => (
      <SideMenuButton key={index} title={link.title} onClick={() => handleChangeForm(index)}/>
    ));
  };

  return (
    <div className="flex flex-col col-span-1 text-black max-w-lg">
      <div className="flex flex-col space-y-2">
        {renderButtons()}
        <Divider />
        <SideMenuButton title="Retour au profile" onClick={() => navigate("/account")} color=''/>
      </div>
    </div>
  );
};

export default SideMenu