import { Dispatch, SetStateAction } from 'react'

export interface UserType {
  id: number
  uuid: string
  username: string
  email: string
  picture: string
  telNumber: string | null
  createdAt: Date
  accessToken: string
  latitude: number
  longitude: number
}

export interface UserContextType {
  user: UserType
  setUser: Dispatch<SetStateAction<UserType>>
}
