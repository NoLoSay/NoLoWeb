import { Button, ButtonBase, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, MenuItem, Paper, Select, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import testProfile from "../../../stories/assets/testProfile.json"
import SettingsUICard from "../SettingsUICard/SettingsUICard";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function SettingsNotificationsForm() {
  return (
    <div>
      <h1 className=" py-5">Notifications</h1>
      <Divider />
      <div className="grid grid-cols-4">
        <form className=" pt-5 col-span-4 space-y-3 p-3">
          <div>
            <p>Moyens de notification</p>
            <FormGroup className="flex flex-row">
              <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
              <FormControlLabel control={<Checkbox />} label="Mobile" />
              <FormControlLabel control={<Checkbox />} label="Push" />
            </FormGroup>
          </div>
          <div>
            <SettingsUICard description="Recevez les actualitées de l'équipe Nolosay chaques mois directement dans votre boite mail." title="Newsletter" />
          </div>
          <div className="flex flex-row space-x-5 w-full mx-auto">
            <SettingsUICard description="Récapiltulatif des performance de votre comptes chaque semaine" title="Bilan Hebdomadaire" />
            <SettingsUICard description="Récapiltulatif des performance de votre comptes chaque mois" title="Bilan Mensuel" />
          </div>
          <div className="flex flex-row space-x-5 w-full mx-auto">
              <SettingsUICard description="Offres en collaboration avec les acteurs du milieu qui colaborent avec Nolosay" title="Offres partenaires" />
              <SettingsUICard description="Notifications par email" title="Email" />
          </div>
          <div>
            <SettingsUICard description="Notifications vous prévenant en cas d'activité impactante sur votre profil (suppression d'expo, de video, modifications sur le profil)" title="Alertes d'activité" />
          </div>

          <Button className="absolute top-0 right-0 m-2" variant="contained">
            Enregistrer
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SettingsNotificationsForm;
