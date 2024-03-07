import { Logout, Man, Person, Settings } from "@mui/icons-material";
import { Avatar, Menu, MenuItem, Icon, ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  return (
    <div>
      <ButtonBase disableRipple onClick={handleClick} sx={{ padding: 1, borderRadius: 2 }} className="flex flex-row items-center justify-between space-x-3">
        <p>Username</p>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => router.push("/account")}>
          <Person /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Settings /> Paramètres
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Logout /> Déconnexion
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileButton;