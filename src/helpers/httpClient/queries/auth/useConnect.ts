import { useContext } from "react";
import { Header } from "../../../../global/types/httpClient/Header";
import {
  UserContext,
  defaultUser,
} from "../../../../global/contexts/UserProvider";
import ConnectJSON from "../../../../global/types/httpClient/auth/Connection";
import { connect } from "../../../../helpers/httpClient/queries/auth/auth";

interface ConnectProps {
  formUsername: string;
  password: string;
  navigate: any;
  headers?: Header;
  setError: (error: string) => void;
}

type LogUserProps = {
  id: number;
  uuid: string;
  username: string;
  email: string;
  picture: string | null;
  telNumber: string | null;
  accessToken: string;
  createdAt: string;
  status: number;
  message: string;
};

interface useConnect {
  tryToConnect: () => Promise<void>;
}

export default function useConnect({
  formUsername,
  password,
  navigate,
  setError,
}: ConnectProps): useConnect {
  const { user, setUser } = useContext(UserContext);

  const logUser = ({
    id,
    uuid,
    username,
    email,
    picture,
    telNumber,
    accessToken,
    createdAt,
    status,
    message,
  }: LogUserProps) => {
    if (status === 201) {
      setUser({
        ...user,
        id: id,
        uuid,
        email,
        username,
        picture: picture ?? defaultUser.picture,
        telNumber: telNumber ?? "",
        accessToken,
        createdAt: new Date(createdAt),
      });
      navigate("/account");
    } else {
      setError(message);
    }
  };

  const tryToConnect = async () => {
    try {
      var data: ConnectJSON = await connect({ formUsername, password });
      logUser({
        id: data.json.id,
        uuid: data.json.uuid,
        username: data.json.username,
        email: data.json.email,
        picture: data.json.picture,
        telNumber: data.json.telNumber,
        accessToken: data.json.accessToken,
        createdAt: data.json.createdAt,
        status: data.status,
        message: data.message,
      });
    } catch (error: any) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return {
    tryToConnect: tryToConnect,
  };
}
