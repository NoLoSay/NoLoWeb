import { Button, ButtonBase, Divider, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import testProfile from '../../../../../stories/assets/testProfile.json'
import { UserContext } from '../../../../global/contexts/UserProvider'
import { NULL } from 'sass'

const styles: { [key: string]: string } = {
  container_0: ' py-5',
  container_1: 'grid grid-cols-4',
  container_2: ' pt-5 col-span-3 space-y-3 p-3',
  container_3: 'absolute top-0 right-0 m-2',
  container_4: 'w-full rounded-full p-3',
  container_5: 'absolute top-0 right-0 m-2',
}

type ProfileProps = {
  fullName: string
  username: string
  bio: string
  website: string
  telNumber: string
}

function verifyInformations(infos: ProfileProps) {
  //handle the verification of the informations
}

function SettingsProfileForm() {
  const { user, setUser } = useContext(UserContext)
  const [fullNameValue, setFullNameValue] = useState(testProfile.fullName)
  const [usernameValue, setUsernameValue] = useState(user.username)
  const [bioValue, setBioValue] = useState(testProfile.bio)
  const [websiteValue, setWebsiteValue] = useState(testProfile.website)
  const [telNumberValue, setTelNumberValue] = useState(user.telNumber || '')

  return (
    <div>
      <h1 className={`container_0 ${styles.container_0}`}>Profile</h1>
      <Divider />
      <div className={`container_1 ${styles.container_1}`}>
        <form className={`container_2 ${styles.container_2}`}>
          <div>
            <TextField
              value={fullNameValue}
              size='small'
              fullWidth
              id='outlined-basic'
              label='Nom complet'
              variant='outlined'
            />
          </div>
          <div>
            <TextField
              value={usernameValue}
              size='small'
              fullWidth
              id='outlined-basic'
              label="Nom d'utilisateur"
              variant='outlined'
            />
          </div>
          <div>
            <TextField
              value={bioValue}
              size='small'
              fullWidth
              id='outlined-basic'
              label='Bio'
              variant='outlined'
            />
          </div>
          <div>
            <TextField
              value={websiteValue}
              size='small'
              fullWidth
              id='outlined-basic'
              label='Website'
              variant='outlined'
            />
          </div>
          <div>
            <TextField
              value={telNumberValue}
              size='small'
              fullWidth
              id='outlined-basic'
              label='Numéro de téléphone'
              variant='outlined'
            />
          </div>
          <Button
            className={`container_3 ${styles.container_3}`}
            variant='contained'
          >
            Sauvegarder
          </Button>
        </form>
        <div>
          <ButtonBase
            disableRipple
            onClick={() =>
              verifyInformations({
                fullName: fullNameValue,
                username: usernameValue,
                bio: bioValue,
                website: websiteValue,
                telNumber: telNumberValue,
              })
            }
          >
            <img
              className={`container_4 ${styles.container_4}`}
              src={testProfile.profilePicturePath}
            />
            <EditIcon className={`container_5 ${styles.container_5}`} />
          </ButtonBase>
        </div>
      </div>
    </div>
  )
}

export default SettingsProfileForm
