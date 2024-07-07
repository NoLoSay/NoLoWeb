import { useContext, useState } from "react";
import { UserContext } from "../../../../contexts/UserProvider";

interface SubscriptionController {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmationPassword: (confirmationPassword: string) => void;
  setTelNumber: (telNumber: string) => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  showConfirmationPassword: boolean;
  setShowConfirmationPassword: (showConfirmationPassword: boolean) => void;
  error: string | undefined;
  register: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

interface SubscriptionControllerProps {
  navigate: any;
}

type RegisterUserProps = {
  id: number;
  username: string;
  email: string;
  telNumber: string;
};

export default function SubscriptionController({
  navigate,
}: SubscriptionControllerProps): SubscriptionController {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [telNumber, setTelNumber] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function registerUser({ id, username, email, telNumber }: RegisterUserProps) {
    setUser({
      ...user,
      id: id,
      username: username,
      email: email,
      telNumber: telNumber,
    });
    navigate("/connection");
  }

  const subscribeUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailRegex.test(email) === false) {
      setError("Veuillez rentrer un email valide");
      return;
    }
    if (password.length < 8) {
      setError("Mot de passe trop court");
      return;
    }
    if (password !== confirmationPassword) {
      setError("Mots de passe différents");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          telNumber: telNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        registerUser({
          id: data.id,
          username: data.username,
          email: data.email,
          telNumber: data.telNumber,
        });
      } else {
        setError("Une erreur est survenue");
        throw new Error("Failed to create acccount");
      }
    } catch (e) {
      console.error("API error: ", e);
    }
  };

  return {
    setUsername,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setTelNumber,
    showPassword,
    setShowPassword,
    setShowConfirmationPassword,
    showConfirmationPassword,
    register: subscribeUser,
    error,
  };
}
