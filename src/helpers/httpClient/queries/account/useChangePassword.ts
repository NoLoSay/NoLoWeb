import { changePassword } from "./account";
import ChangePasswordJSON from "@global/types/httpClient/account/ChangePassword";

interface ChangePasswordProps {
  newPassword: string;
  token: string | null;
  navigate: any;
  setError: (error: string) => void;
}

interface ChangeUserPasswordProps {
  status: number;
  message: string;
}

interface useChangePassword {
  tryToChangePassword: () => Promise<void>;
}

export default function useChangePassword({
  token,
  newPassword,
  navigate,
  setError,
}: ChangePasswordProps): useChangePassword {

  const changeUserPassword = ({
    status,
    message,
  }: ChangeUserPasswordProps) => {
    if (status === 201) {
      navigate("/connection");
    } else {
      setError(message);
    }
  };

  const tryToChangePassword = async () => {
    try {
      var data: ChangePasswordJSON = await changePassword({
        token: token,
        password: newPassword,
      });
      changeUserPassword({
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
