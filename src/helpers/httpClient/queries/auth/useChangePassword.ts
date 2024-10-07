import ChangePasswordJSON from "@global/types/httpClient/account/ChangePassword";
import { changePassword } from "./auth";

interface ChangePasswordProps {
  newPassword: string;
  token: string | null;
  navigate: any;
  setError: (error: string) => void;
}

interface ChangeUserPasswordProps {
  setPasswordStatus: (passwordStatus: boolean) => void;
  status: number;
  message: string;
}

interface useChangePassword {
  tryToChangePassword: (passwordStatus: (passwordStatus: boolean) => void) => Promise<void>;
}

export default function useChangePassword({
  token,
  newPassword,
  navigate,
  setError,
}: ChangePasswordProps): useChangePassword {

  const changeUserPassword = ({
    setPasswordStatus,
    status,
    message,
  }: ChangeUserPasswordProps) => {
    if (status === 201) {
      setPasswordStatus(true);
    } else {
      setError(message);
    }
  };

  const tryToChangePassword = async (setPasswordStatus: (passwordStatus: boolean) => void) => {
    try {
      var data: ChangePasswordJSON = await changePassword({
        token: token,
        password: newPassword,
      });
      changeUserPassword({
        setPasswordStatus,
        status: data.status,
        message: data.message,
      });
    } catch (error: any) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return {
    tryToChangePassword: tryToChangePassword,
  };
}
