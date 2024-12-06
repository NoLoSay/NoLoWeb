import { useState, useEffect, useContext } from 'react'
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index'
import { UserContext, defaultUser } from '../../../global/contexts/UserProvider'
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from '../../../../node_modules/@mui/material/index'
import ProfileButton from './ProfileButton/ProfileButton'
import MenuIcon from '@mui/icons-material/Menu'

const styles: { [key: string]: string } = {
  container_0: 'flex items-center gap-2',
  container_1: 'w-8 h-8',
  container_2: 'bg-transparent hover:cursor-pointer',
  container_3: 'w-32 h-8',
  container_4: 'text-zinc-500 hover:underline hover:cursor-pointer bg-transparent underline-offset-2 text-base',
  container_5: 'flex flex-row justify-around items-center w-full pl-32 pr-32 ',
  container_6: 'flex flex-row justify-between items-center space-x-10 pl-10',
  container_7: 'flex flex-row items-center  text-gray-200 bg-transparent hover:underline hover:cursor-pointer',
  container_9:
    'flex flex-row items-center gap-8 rounded-full bg-gray-300 text-base hover:cursor-pointer flex items-center justify-center py-2 px-6 gap-8 text-base-white font-semibold hover:underline',
  container_10: 'font-semibold text-base',
  container_11: 'p-3',
  container_12: 'flex flex-row items-center px-10 h-24 shadow-md',
  container_13:
    'flex flex-row items-center gap-8 text-gray-200 text-lg bg-transparent hover:underline hover:cursor-pointer',
  container_14:
    'rounded-full bg-gray-300 hover:cursor-pointer flex items-center justify-center py-2 px-6 gap-2 text-base-white font-semibold hover:underline',
  container_15: 'flex flex-row justify-around w-full px-5 items-center gap-5 text-gray-200',
}

export type NavLinkProps = {
  links: { href: string; title: string; image: string; imageClick: string; props?: any }[]
  handleChangePage: (link: string, props?: any) => void
}

type NavbarProps = {
  InApp?: boolean
  LoginStatus?: boolean
}

const NavLinksItems = [
  { href: '/findlocation', title: 'Rechercher', image: '/icon/search.png', imageClick: '/icon/searchClick.png' },
  { href: '/tickets', title: 'Créer', image: '/icon/create.png', imageClick: '/icon/createClick.png' },
  { href: '/myvideos', title: 'Mes Vidéos', image: '/icon/video.png', imageClick: '/icon/videoClick.png' },
]

interface logoButtonProps {
  handleChangePage: (link: string, props?: any) => void
}
const LogoButton = ({ handleChangePage }: logoButtonProps) => {
  return (
    <div className={`container_0 ${styles.container_0}`}>
      <img
        className={`container_1 ${styles.container_1}`}
        alt=''
        src='/images/logo/nologo.png'
      />
      <button
        className={`container_2 ${styles.container_2}`}
        onClick={() => handleChangePage('/home')}
      >
        <img
          className={`container_3 ${styles.container_3}`}
          alt=''
          src='/images/logo/nolosay-black.png'
        />
      </button>
    </div>
  )
}

const NavLinks = ({ links, handleChangePage }: NavLinkProps) => {
  const [activeImages, setActiveImages] = useState<{ [key: number]: string }>({})

  const handleMouseDown = (index: number) => {
    setActiveImages(prevImages => ({
      ...prevImages,
      [index]: links[index].imageClick,
    }))
  }

  const handleMouseUpOrLeave = (index: number) => {
    setActiveImages(prevImages => ({
      ...prevImages,
      [index]: links[index].image,
    }))
  }

  const renderLinks = () => {
    return links.map((link, index) => (
      <div
        key={index}
        onMouseDown={() => handleMouseDown(index)}
        onMouseUp={() => handleMouseUpOrLeave(index)}
        onMouseLeave={() => handleMouseUpOrLeave(index)}
        onClick={() => handleChangePage(link.href, link.props)}
        className='shadow-none bg-white flex items-center space-x-4 text-left text-sm font-medium margin-8 px-7 py-2 border-2 rounded-md border-transparent border-solid hover:cursor-pointer hover:border-yellow-300 focus:outline-none text-black active:text-yellow-300'
      >
        <img
          src={activeImages[index] || link.image}
          className='w-10 h-10'
        />
        <div className='text-lg font-bold'>{link.title}</div>
      </div>
    ))
  }

  return <div className={`container_5 ${styles.container_5}`}>{renderLinks()}</div>
}

interface loginButtonProps {
  handleChangePage: (link: string) => void
}
const LoginButton = ({ handleChangePage }: loginButtonProps) => {
  return (
    <div className={`container_6 ${styles.container_6}`}>
      <button
        onClick={() => handleChangePage('/connection')}
        className={`container_9 ${styles.container_7}`}
      >
        <div className={`container_10 ${styles.container_9}`}>Connexion</div>
      </button>
    </div>
  )
}

export function LinkList({ links, handleChangePage }: NavLinkProps) {
  const renderLinks = () => {
    return links.map((link, index) => (
      <ListItem disablePadding>
        <ListItemButton href={link.href}>
          <ListItemText primary={link.title} />
        </ListItemButton>
      </ListItem>
    ))
  }

  return (
    <Box sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label='main mailbox folders'>
        <List>
          <div className={`container_11 ${styles.container_11}`}>
            <LogoButton handleChangePage={handleChangePage} />
          </div>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton disabled>
              <ListItemText primary={' '} />
            </ListItemButton>
          </ListItem>
          {renderLinks()}
        </List>
      </nav>
    </Box>
  )
}

const AnimatedNavbar: React.FC<NavbarProps> = ({ InApp }: NavbarProps) => {
  const { user, setUser } = useContext(UserContext)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(user.accessToken != '' ? true : false)
  const navigate = useNavigate()

  useEffect(() => {
    const func = async (): Promise<void> => {
      if (user != defaultUser) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    }
    func()
  }, [user])

  function handleChangePage(link: string) {
    navigate(link)
  }

  return (
    <div className={`container_12 ${styles.container_12}`}>
      {InApp && (
        <div>
          <IconButton
            sx={{ paddingX: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon style={{ color: 'black' }} />
          </IconButton>
          <Drawer
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            {isLogged ? (
              <ListItem>
                <ListItemButton>
                  <ProfileButton name={user.username} />
                </ListItemButton>
              </ListItem>
            ) : (
              <List>
                <ListItem>
                  <ListItemButton
                    onClick={() => handleChangePage('/connection')}
                    className={`container_13 ${styles.container_13}`}
                  >
                    <ListItemText primary={'Connexion'} />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </Drawer>
        </div>
      )}
      <LogoButton handleChangePage={handleChangePage} />
      {InApp ? (
        <NavLinks
          links={[...NavLinksItems]}
          handleChangePage={handleChangePage}
        />
      ) : (
        <div className={`container_15 ${styles.container_15}`}>
          {isLogged ? (
            <NavLinks
              links={[...NavLinksItems]}
              handleChangePage={handleChangePage}
            />
          ) : (
            <div className={`container_5 ${styles.container_5}`} />
          )}
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
          />
          {isLogged ? <ProfileButton name={user.username} /> : <LoginButton handleChangePage={handleChangePage} />}
        </div>
      )}
    </div>
  )
}

export default AnimatedNavbar
