import { useState } from "react";
import useSubscribe from "../../../../helpers/httpClient/queries/auth/useSubscribe";

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

export default function SubscriptionController({
  navigate,
}: SubscriptionControllerProps): SubscriptionController {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [telNumber, setTelNumber] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { tryToSubscribe } = useSubscribe({
    formEmail: email,
    formUsername: username,
    password: password,
    telNumber: telNumber,
    navigate: navigate,
    setError: setError,
  });

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
      tryToSubscribe();
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
