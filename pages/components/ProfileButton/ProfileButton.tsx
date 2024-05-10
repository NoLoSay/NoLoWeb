import { Logout, Man, Person, Settings } from "@mui/icons-material";
import { Avatar, Menu, MenuItem, Icon, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { UserContext, defaultUser } from "../../../contexts/UserProvider";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const resetUser = () => {
    setUser(defaultUser);
    navigate("/home")
  };

  return (
    <div>
      <ButtonBase disableRipple onClick={handleClick} sx={{ padding: 1, borderRadius: 2 }} className="flex flex-row items-center justify-between space-x-3">
        <p>Mon compte</p>
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/account")}>
          <Person /> Profile
        </MenuItem>
        <MenuItem onClick={resetUser}>
          <Logout /> Déconnexion
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileButton;