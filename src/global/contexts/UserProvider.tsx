import { createContext, useEffect, useMemo, useState } from 'react'
import { UserContextType, UserType } from '../types/User'

export const defaultUser: UserType = {
  id: 0,
  uuid: '',
  username: '',
  email: '',
  picture: '',
  telNumber: '',
  createdAt: new Date(2024, 0, 0, 0, 0, 0, 0),
  accessToken: '',
}

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
})

interface UserProviderProps {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<UserType>(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : defaultUser
  })

  useEffect(() => {
    if (user.id !== 0) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const memorizedContextValue = useMemo(() => ({ user, setUser }), [user])

  return <UserContext.Provider value={memorizedContextValue}>{children}</UserContext.Provider>
}
