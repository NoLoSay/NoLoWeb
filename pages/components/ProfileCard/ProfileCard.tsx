import { ButtonBase, MenuItem, Paper, Select } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type ProfileProps = {
  profilePicturePath?: string;
  fullName?:string;
  email?: string;
  phone?: string;
};

function ProfileCard({ profilePicturePath, fullName, email, phone }: ProfileProps) {
  return (
    <Paper className="relative flex flex-row m-5 p-5 items-center justify-start">
      <img className="w-20 h-20 rounded-full" src={profilePicturePath} alt="Photo de profile"/>
      <div className="flex flex-col flex-grow mx-5 space-y-2">
        <p className="text-sky-600">Identification</p>
        <p className="text-lg font-bold my-2">{fullName}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <ButtonBase className="absolute top-0 right-0 m-2">
        <EditIcon />
      </ButtonBase>
    </Paper>
  );
}

export default ProfileCard;
