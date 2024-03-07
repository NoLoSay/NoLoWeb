import { Avatar } from "@mui/material";

const ProfileButton = () => { 
  return (
    <div>
      <button>
        <p>Username</p>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </button>
    </div>
  ) 
};

export default ProfileButton;