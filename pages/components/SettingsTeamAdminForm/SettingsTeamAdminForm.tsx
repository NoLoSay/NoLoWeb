import { Button, ButtonBase, Divider, FormControl, MenuItem, Paper, Select, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import testProfile from "../../../stories/assets/testProfile.json"

const styles: { [key: string]: string } = {
  container_0: " py-5",
  container_1: "grid grid-cols-4",
  container_2: " pt-5 col-span-3 space-y-3 p-3",
  container_3: "absolute top-0 right-0 m-2"
};

function SettingsTeamAdminForm() {
  return (
    <div>
      <h1 className={`container_0 ${styles.container_0}`}>Gestion de l'équipe</h1>
      <Divider />
      <div className={`container_1 ${styles.container_1}`}>
        <form className={`container_2 ${styles.container_2}`}>
          <div>
            <TextField size="small" fullWidth id="outlined-basic" label="Nom complet" variant="outlined" />
          </div>
          <div>
            <TextField size="small" fullWidth id="outlined-basic" label="Nom d'utilisateur" variant="outlined" />
          </div>
          <div>
            <TextField size="small"  fullWidth id="outlined-basic" label="Bio" variant="outlined" />
          </div>
          <div>
            <TextField size="small" fullWidth id="outlined-basic" label="Website" variant="outlined" />
          </div>
          <div>
            <TextField size="small" fullWidth id="outlined-basic" label="Nom complet" variant="outlined" />
          </div>
          <Button className={`container_3 ${styles.container_3}`} variant="contained">
            Sauvegarder
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SettingsTeamAdminForm;
