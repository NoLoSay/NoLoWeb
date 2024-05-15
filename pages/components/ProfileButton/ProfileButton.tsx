import { Logout, Man, Person, Settings } from "@mui/icons-material";
import { Avatar, Menu, MenuItem, Icon, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserProvider";

type ProfileButtonProps = {
    name: string;
    avatar?: string;
};

const ProfileButton = ({name, avatar}: ProfileButtonProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <ButtonBase disableRipple onClick={handleClick} sx={{ padding: 1, borderRadius: 2 }} className="flex flex-row items-center justify-between space-x-3">
        <p>{name}</p>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/account")}>
          <Person /> Profile
        </MenuItem>
        <MenuItem onClick={() => navigate("/accountSettings")}>
          <Settings /> Paramètres
        </MenuItem>
        <MenuItem onClick={() => setUser(null)}>
          <Logout /> Déconnexion
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileButton;