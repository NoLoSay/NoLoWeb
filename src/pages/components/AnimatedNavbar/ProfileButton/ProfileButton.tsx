import { Logout, Person, Settings } from '@mui/icons-material'
import { Menu, MenuItem, ButtonBase } from '@mui/material'
import { useState, useContext } from 'react'
import { UserContext, defaultUser } from '../../../../global/contexts/UserProvider'
import { useNavigate } from 'react-router-dom'

type ProfileButtonProps = {
  name: string
  avatar?: string
}

const styles: { [key: string]: string } = {
  container_0: 'flex flex-row items-center justify-between space-x-3',
  container_1: 'text-base',
}

const ProfileButton = ({ name, avatar }: ProfileButtonProps) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const navigate = useNavigate()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { user, setUser } = useContext(UserContext)

  const resetUser = () => {
    setUser(defaultUser)
    navigate('/home')
  }

  return (
    <div>
      <ButtonBase
        disableRipple
        onClick={handleClick}
        sx={{ padding: 1, borderRadius: 2 }}
        className={`container_0 ${styles.container_0}`}
      >
        <p className={`container_1 ${styles.container_1}`}>{name}</p>
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate('/account')}>
          <Person /> Profile
        </MenuItem>
        <MenuItem onClick={() => navigate('/accountSettings')}>
          <Settings /> Paramètres
        </MenuItem>
        <MenuItem onClick={resetUser}>
          <Logout /> Déconnexion
        </MenuItem>
      </Menu>
    </div>
  )
}

export default ProfileButton
