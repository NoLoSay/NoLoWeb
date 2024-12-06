import { defaultUser, UserContext } from "@global/contexts/UserProvider";
import { UserType } from "@global/types/User";
import { get } from "@helpers/httpClient/common";
import useRemoveProfile from "@helpers/httpClient/queries/profile/useRemoveProfile";
import { useLocation, useNavigate } from "node_modules/react-router-dom/dist/index";
import { useContext, useEffect, useState } from "react";

interface AccountController {
  user: UserType;
  showRemoveProfileModal: boolean;
  setShowRemoveProfileModal: (showRemoveProfileModal: boolean) => void;
  removeProfile: () => Promise<void>;
  closeRemoveProfileModal: () => void;
  navigate: any;
  error: string;
  setError: (error: string) => void;
}

export default function AccountController(): AccountController {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);
  const [showRemoveProfileModal, setShowRemoveProfileModal] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { tryToRemoveProfile } = useRemoveProfile({
    authorizationToken: user.accessToken,
    setError: setError,
  });

  useEffect(() => {
    const getUserFromURL = async () => {
      const params = new URLSearchParams(location.search);

      if (params.get("user")) {
        const userGet = JSON.parse(params.get("user") ?? "");

        try {
          const response: any = await get({
            endpoint: "/users/me",
            authorizationToken: userGet.accessToken,
          });
          if (!response.ok) {
            throw new Error(`Failed to retrieve user: ${response.status}`);
          }
          const data = await response.json();

          setUser({
            ...user,
            email: data.email,
            username: data.username,
            picture: data.picture ?? defaultUser.picture,
            telNumber: data.telNumber ?? "",
            accessToken: userGet.accessToken,
            createdAt: new Date(data.createdAt),
          });
          navigate("/account");
        } catch (error: any) {
          if (error.message) {
            setError(error.message);
          } else {
            setError(error);
          }
        }
      }
    };

    getUserFromURL();
  }, [location.search]);

  function closeRemoveProfileModal() {
    setError("");
    setShowRemoveProfileModal(false);
  }

  const removeProfile = async (): Promise<void> => {
    try {
      await tryToRemoveProfile(setShowRemoveProfileModal);
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
      } else {
        setError(error);
      }
    }
  };

  return {
    user,
    showRemoveProfileModal,
    setShowRemoveProfileModal,
    removeProfile,
    closeRemoveProfileModal,
    navigate,
    error,
    setError,
  };
}
