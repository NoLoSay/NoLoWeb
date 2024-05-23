import { Button, ButtonBase, Divider, FormControl, MenuItem, Paper, Select, TextField } from "@mui/material";
import { useContext, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import testProfile from "../../../stories/assets/testProfile.json"
import { UserContext } from "../../../contexts/UserProvider";

type ProfileProps = {
  fullName: string;
  username: string;
  bio: string;
  website: string;
  telNumber: string;
}

function verifyInformations(infos: ProfileProps) {
  //handle the verification of the informations
  
}

function SettingsProfileForm() {
  const { user, setUser } = useContext(UserContext);
  const [fullNameValue, setFullNameValue] = useState(testProfile.fullName);
  const [usernameValue, setUsernameValue] = useState(user.username);
  const [bioValue, setBioValue] = useState(testProfile.bio);
  const [websiteValue, setWebsiteValue] = useState(testProfile.website);
  const [telNumberValue, setTelNumberValue] = useState(user.telNumber);

  return (
    <div>
      <h1 className=" py-5">Profile</h1>
      <Divider />
      <div className="grid grid-cols-4">
        <form className=" pt-5 col-span-3 space-y-3 p-3">
          <div>
            <TextField value={fullNameValue} size="small" fullWidth id="outlined-basic" label="Nom complet" variant="outlined" />
          </div>
          <div>
            <TextField value={usernameValue} size="small" fullWidth id="outlined-basic" label="Nom d'utilisateur" variant="outlined" />
          </div>
          <div>
            <TextField value={bioValue} size="small" fullWidth id="outlined-basic" label="Bio" variant="outlined" />
          </div>
          <div>
            <TextField value={websiteValue} size="small" fullWidth id="outlined-basic" label="Website" variant="outlined" />
          </div>
          <div>
            <TextField value={telNumberValue} size="small" fullWidth id="outlined-basic" label="Numéro de téléphone" variant="outlined" />
          </div>
          <Button className="absolute top-0 right-0 m-2" variant="contained">
            Enregistrer
          </Button>
        </form>
        <div>
          <ButtonBase disableRipple onClick={() => verifyInformations({
            fullName: fullNameValue,
            username: usernameValue,
            bio: bioValue,
            website: websiteValue,
            telNumber: telNumberValue
          })}>
            <img className="w-full rounded-full p-3" src={testProfile.profilePicturePath} />
            <EditIcon className="absolute top-0 right-0 m-2" />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}

export default SettingsProfileForm;
