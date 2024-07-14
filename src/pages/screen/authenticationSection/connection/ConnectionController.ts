import { useState } from "react";
import useConnect from "../../../../helpers/httpClient/queries/auth/useConnect";

interface ConnectionController {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  error: string | undefined;
  connect: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

interface ConnectionControllerProps {
  navigate: any;
}

export default function ConnectionController({
  navigate,
}: ConnectionControllerProps): ConnectionController {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { tryToConnect } = useConnect({
    formUsername: username,
    password: password,
    navigate: navigate,
    setError: setError,
  });

  const connectUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      tryToConnect();
    } catch (e) {
      console.error("API error: ", e);
    }
  };

  return {
    setUsername,
    setPassword,
    showPassword,
    setShowPassword,
    connect: connectUser,
    error,
  };
}
