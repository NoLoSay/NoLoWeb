import { Button, ButtonBase, Divider, FormControl, MenuItem, Paper, Select, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import testProfile from "../../../stories/assets/testProfile.json"

function SettingsProfileForm() {
  return (
    <div>
      <h1 className=" py-5">Profile</h1>
      <Divider />
      <div className="grid grid-cols-4">
        <form className=" pt-5 col-span-3 space-y-3 p-3">
          <div>
            <TextField defaultValue={testProfile.fullName} size="small" fullWidth id="outlined-basic" label="Nom complet" variant="outlined" />
          </div>
          <div>
            <TextField defaultValue={testProfile.uid} size="small" fullWidth id="outlined-basic" label="Nom d'utilisateur" variant="outlined" />
          </div>
          <div>
            <TextField defaultValue={testProfile.bio} size="small"  fullWidth id="outlined-basic" label="Bio" variant="outlined" />
          </div>
          <div>
            <TextField defaultValue={testProfile.website} size="small" fullWidth id="outlined-basic" label="Website" variant="outlined" />
          </div>
          <div>
            <TextField defaultValue={testProfile.phone} size="small" fullWidth id="outlined-basic" label="Numéro de téléphone" variant="outlined" />
          </div>
          <Button className="absolute top-0 right-0 m-2" variant="contained">
            Save
          </Button>
        </form>
        <div>
          <ButtonBase disableRipple>
            <img className="w-full rounded-full p-3" src={testProfile.profilePicturePath} />
            <EditIcon  className="absolute top-0 right-0 m-2"/>
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}

export default SettingsProfileForm;
