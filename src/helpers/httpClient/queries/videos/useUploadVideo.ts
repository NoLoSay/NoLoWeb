import UploadVideoJSON from "@global/types/httpClient/videos/video";
import { uploadVideo } from "./video";

interface UseUploadVideoProps {
  authorizationToken: string;
  artworkId: string;
  setError: (error: string) => void;
}

interface UploadVideoProps {
  status: number;
  message: string;
}

interface useUploadVideo {
  tryToUploadVideo: () => Promise<void>;
}

export default function useUploadVideo({
  authorizationToken,
  artworkId,
  setError,
}: UseUploadVideoProps): useUploadVideo {
  const videoUploaded = ({ status, message }: UploadVideoProps) => {
    if (status === 201) {
      alert("Vidéo envoyée");
    } else {
      console.error(message);
      setError(message);
    }
  };

  const tryToUploadVideo = async () => {
    try {
      var data: UploadVideoJSON = await uploadVideo({
        authorizationToken: authorizationToken,
        artworkId: artworkId,
      });
      videoUploaded({
        status: data.status,
        message: data.message,
      });
    } catch (error: any) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  };

  return {
    tryToUploadVideo: tryToUploadVideo,
  };
}
