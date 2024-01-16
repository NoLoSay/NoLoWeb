import { ButtonBase, MenuItem, Paper, Select } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function ProfileCard({ infos }: any) {
  return (
    <Paper className="relative flex flex-row m-5 p-5 items-center justify-start">
      <img className="w-20 h-20 rounded-full" src={infos.profilePicturePath} alt="Photo de profile"/>
      <div className="flex flex-col flex-grow mx-5 space-y-2">
        <p className="text-sky-600">Identification</p>
        <p className="text-lg-1 font-bold my-2">{infos.firstName + ' ' + infos.lastName}</p>
        <p>{infos.email}</p>
        <p>{infos.phone}</p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={infos.cityId}
          label="Ville"
          className="mt-3"
        >
          <MenuItem value={1}>Nantes, France</MenuItem>
          <MenuItem value={2}>Paris, France</MenuItem>
        </Select>
      </div>
      <ButtonBase className="absolute top-0 right-0 m-2">
        <EditIcon />
      </ButtonBase>
    </Paper>
  );
}

export default ProfileCard;
