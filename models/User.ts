import { Dispatch, SetStateAction } from "react"

export interface UserType {
  id: number
  uuid: string
  username: string
  email: string
  picture: string
  telNumber: string
  createdAt: Date
  accessToken: string
}

export interface UserContextType {
  user: UserType
  setUser: Dispatch<SetStateAction<UserType>>
}
