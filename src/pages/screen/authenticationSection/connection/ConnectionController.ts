import { useState } from "react";
import { forgotPassword } from "@helpers/httpClient/queries/auth/auth";
import useConnect from "@helpers/httpClient/queries/auth/useConnect";

interface ConnectionController {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
  showForgotPasswordModal: boolean;
  openForgotPasswordModal: () => void;
  closeForgotPasswordModal: () => void;
  forgottenPassword: () => Promise<void>;
  connect: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string | undefined;
}

interface ConnectionControllerProps {
  navigate: any;
}

export default function ConnectionController({
  navigate,
}: ConnectionControllerProps): ConnectionController {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { tryToConnect } = useConnect({
    formUsername: username,
    password: password,
    navigate: navigate,
    setError: setError,
  });

  function openForgotPasswordModal(): void {
    setShowForgotPasswordModal(true);
  }

  function closeForgotPasswordModal(): void {
    setShowForgotPasswordModal(false);
  }

  const connectUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await tryToConnect();
    } catch (error: any) {
      if (error && error.message) {
        setError(error.message);
      } else {
        setError(error);
      }
    }
  };

  async function forgottenPassword(): Promise<void> {
    setError("");
    if (emailRegex.test(email) === false) {
      setError("Veuillez rentrer un email valide");
      return;
    }
    await forgotPassword({ email });
    alert(
      "Email envoyé " +
        "Si le compte existe, un email a été envoyé pour réinitialiser le mot de passe."
    );
  }

  return {
    setUsername,
    setEmail,
    setPassword,
    showPassword,
    setShowPassword,
    showForgotPasswordModal,
    openForgotPasswordModal,
    closeForgotPasswordModal,
    forgottenPassword,
    connect: connectUser,
    error,
  };
}
