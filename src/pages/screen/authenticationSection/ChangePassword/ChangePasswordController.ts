import useChangePassword from "@helpers/httpClient/queries/auth/useChangePassword";
import { useLocation } from "node_modules/react-router-dom/dist/index";
import { useEffect, useState } from "react";

interface ChangePasswordController {
  setNewPassword: (password: string) => void;
  showNewPassword: boolean;
  setShowNewPassword: (showNewPassword: boolean) => void;
  setNewConfirmPassword: (password: string) => void;
  showNewConfirmPassword: boolean;
  setShowNewConfirmPassword: (showNewConfirmPassword: boolean) => void;
  changePassword: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string | undefined;
}

interface ChangePasswordControllerProps {
  navigate: any;
}

export default function ChangePasswordController({
  navigate,
}: ChangePasswordControllerProps): ChangePasswordController {
  const [newPassword, setNewPassword] = useState<string>("");
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>("");
  const [showNewConfirmPassword, setShowNewConfirmPassword] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [token, setToken] = useState<string | null>("");
  const location = useLocation();

  useEffect(() => {
    const getTokenFromURL = () => {
      const params = new URLSearchParams(location.search);

      if (params.get("token")) {
        setToken(params.get("token"));
      }
    };

    getTokenFromURL();
  }, []);

  const { tryToChangePassword } = useChangePassword({
    token: token,
    newPassword: newPassword,
    navigate: navigate,
    setError: setError,
  });

  const changeUserPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (newPassword.length < 8) {
      setError("Mot de passe trop court");
      return;
    }
    if (newPassword !== newConfirmPassword) {
      setError("Mots de passe différents");
      return;
    }

    try {
      tryToChangePassword();
    } catch (e) {
      console.error("API error: ", e);
    }
  };

  return {
    setNewPassword,
    showNewPassword,
    setShowNewPassword,
    setNewConfirmPassword,
    showNewConfirmPassword,
    setShowNewConfirmPassword,
    changePassword: changeUserPassword,
    error,
  };
}
