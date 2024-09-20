import { useContext } from "react";
import { Header } from "@global/types/httpClient/Header";
import { UserContext } from "@global/contexts/UserProvider";
import SubscribeJSON from "@global/types/httpClient/auth/Subscription";
import { subscribe } from "./auth";

interface SubscribeProps {
  url?: string;
  formUsername: string;
  formEmail: string;
  password: string;
  telNumber: string | null;
  navigate: any;
  headers?: Header;
  setError: (error: string) => void;
}

type RegisterUserProps = {
  status: number;
  message: string;
};

interface useSubscribe {
  tryToSubscribe: () => Promise<void>;
}

export default function useSubscribe({
  formEmail,
  formUsername,
  password,
  telNumber,
  navigate,
  setError,
}: SubscribeProps): useSubscribe {
  const { user, setUser } = useContext(UserContext);

  function registerUser({
    status,
    message,
  }: RegisterUserProps) {
    if (status === 201) {
      navigate("/connection");
    } else {
      setError(message);
    }
  }

  const tryToSubscribe = async () => {
    try {
      var data: SubscribeJSON = await subscribe({
        email: formEmail,
        username: formUsername,
        password: password,
        telNumber: telNumber,
      });
      registerUser({
        status: data.status,
        message: data.message,
      });
    } catch (error: any) {
      setError(error);
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return {
    tryToSubscribe: tryToSubscribe,
  };
}
