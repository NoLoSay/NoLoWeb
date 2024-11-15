import RemoveProfileJSON from "@global/types/httpClient/auth/RemoveProfile";
import { getActiveProfile, removeProfile } from "./profile";

interface UseRemoveProfileProps {
  authorizationToken: string;
  setError: (error: string) => void;
}

interface RemoveProfileProps {
  setShowRemoveProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  status: number;
  message: string;
}

interface useRemoveProfile {
  tryToRemoveProfile: (
    setShowRemoveProfileModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
}

export default function useRemoveProfile({
  authorizationToken,
  setError,
}: UseRemoveProfileProps): useRemoveProfile {
  const removeActiveProfile = ({
    setShowRemoveProfileModal,
    status,
    message,
  }: RemoveProfileProps) => {
    if (status === 200) {
      setShowRemoveProfileModal(false);
      alert("Profil supprimé");
    } else {
      setError(message);
    }
  };

  const tryToRemoveProfile = async (
    setShowRemoveProfileModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      var profile = await getActiveProfile({ authorizationToken });
      var data: RemoveProfileJSON = await removeProfile({
        authorizationToken: authorizationToken,
        profileId: profile.json.id.toString()
      });
      removeActiveProfile({
        setShowRemoveProfileModal,
        status: data.status,
        message: data.message,
      });
    } catch (error: any) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return {
    tryToRemoveProfile: tryToRemoveProfile,
  };
}
