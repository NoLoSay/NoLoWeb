import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserProvider";

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

type LogUserProps = {
  id: number;
  uuid: string;
  username: string;
  email: string;
  picture: string;
  telNumber: string;
  createdAt: Date;
  accessToken: string;
};

export default function ConnectionController({
  navigate,
}: ConnectionControllerProps): ConnectionController {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function logUser({
    id,
    uuid,
    username,
    email,
    picture,
    telNumber,
    createdAt,
    accessToken,
  }: LogUserProps) {
    setUser({
      ...user,
      id: id,
      uuid: uuid,
      username: username,
      email: email,
      picture: picture,
      telNumber: telNumber,
      createdAt: new Date(createdAt),
      accessToken: accessToken,
    });
    navigate("/account");
  }

  const connectUser = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        logUser({
          id: data.id,
          uuid: data.uuid,
          username: data.username,
          email: data.email,
          picture: data.picture,
          telNumber: data.telNumber,
          createdAt: data.createdAt,
          accessToken: data.accessToken,
        });
      } else if (response.status == 401) {
        setError("Nom d'utilisateur ou mot de passe incorrecte");
        throw new Error("Invalid credentials");
      } else {
        setError("Une erreur est survenue");
        throw new Error("Failed to connect");
      }
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
