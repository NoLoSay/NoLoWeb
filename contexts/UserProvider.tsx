import { createContext, useMemo, useState } from "react";
import { UserContextType, UserType } from "../models/User";

export const defaultUser: UserType = {
  id: 0,
  uuid: "",
  username: "",
  email: "",
  picture: "",
  telNumber: "",
  createdAt: new Date(2024, 0, 0, 0, 0, 0, 0),
  accessToken: "",
};

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<UserType>(defaultUser);

  const memorizedContextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={memorizedContextValue}>
      {children}
    </UserContext.Provider>
  );
}
