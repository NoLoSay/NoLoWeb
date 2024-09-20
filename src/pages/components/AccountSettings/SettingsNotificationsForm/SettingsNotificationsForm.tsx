import { Button, Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material'
import SettingsUICard from './SettingsUICard/SettingsUICard'

const styles: { [key: string]: string } = {
  container_0: ' py-5',
  container_1: 'grid grid-cols-4',
  container_2: ' pt-5 col-span-4 space-y-3 p-3',
  container_3: 'flex flex-row',
  container_4: 'flex flex-row space-x-5 w-full mx-auto',
  container_5: 'flex flex-row space-x-5 w-full mx-auto',
  container_6: 'absolute top-0 right-0 m-2',
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

function SettingsNotificationsForm() {
  return (
    <div>
      <h1 className={`container_0 ${styles.container_0}`}>Notifications</h1>
      <Divider />
      <div className={`container_1 ${styles.container_1}`}>
        <form className={`container_2 ${styles.container_2}`}>
          <div>
            <p>Moyens de notification</p>
            <FormGroup className={`container_3 ${styles.container_3}`}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label='Email'
              />
              <FormControlLabel
                control={<Checkbox />}
                label='Mobile'
              />
              <FormControlLabel
                control={<Checkbox />}
                label='Push'
              />
            </FormGroup>
          </div>
          <div>
            <SettingsUICard
              description="Recevez les actualitées de l'équipe Nolosay chaques mois directement dans votre boite mail."
              title='Newsletter'
            />
          </div>
          <div className={`container_4 ${styles.container_4}`}>
            <SettingsUICard
              description='Récapiltulatif des performance de votre comptes chaque semaine'
              title='Bilan Hebdomadaire'
            />
            <SettingsUICard
              description='Récapiltulatif des performance de votre comptes chaque mois'
              title='Bilan Mensuel'
            />
          </div>
          <div className={`container_5 ${styles.container_5}`}>
            <SettingsUICard
              description='Offres en collaboration avec les acteurs du milieu qui colaborent avec Nolosay'
              title='Offres partenaires'
            />
            <SettingsUICard
              description='Notifications par email'
              title='Email'
            />
          </div>
          <div>
            <SettingsUICard
              description="Notifications vous prévenant en cas d'activité impactante sur votre profil (suppression d'expo, de video, modifications sur le profil)"
              title="Alertes d'activité"
            />
          </div>

          <Button
            className={`container_6 ${styles.container_6}`}
            variant='contained'
          >
            Sauvegarder
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SettingsNotificationsForm
