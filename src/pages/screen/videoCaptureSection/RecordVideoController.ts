import { UserContext } from "@global/contexts/UserProvider";
import useUploadVideo from "@helpers/httpClient/queries/videos/useUploadVideo";
import {
  useLocation,
  useNavigate,
} from "node_modules/react-router-dom/dist/index";
import { RefObject, useContext, useEffect, useRef, useState } from "react";

interface RecordVideoController {
  videoRef: RefObject<HTMLVideoElement>;
  isRecording: boolean;
  recordedChunks: Blob[];
  file: any | undefined;
  startCapture: () => void;
  stopCapture: () => void;
  saveVideo: () => void;
  uploadVideo: () => void;
  selectVideo: (event: any) => void;
  navigate: any;
  error: string;
}

interface RecordVideoControllerProps {}

export default function RecordVideoController({}: RecordVideoControllerProps): RecordVideoController {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [artworkId, setArtworkId] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const { tryToUploadVideo } = useUploadVideo({
    authorizationToken: user.accessToken,
    artworkId: artworkId,
    setError,
  });

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setMediaStream(stream);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error: any) {
        if (error.message) {
          setError(error.message);
        } else {
          setError(error);
        }
      }
    };

    setupCamera();
  }, []);

  useEffect(() => {
    const getArtworkId = () => {
      const { artworkId } = location.state;
      setArtworkId(artworkId);
    };

    getArtworkId();
  }, [location.state]);

  const startCapture = () => {
    if (mediaStream) {
      const recorderInstance = new MediaRecorder(mediaStream);
      setRecorder(recorderInstance);

      const chunks: Blob[] = [];

      recorderInstance.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorderInstance.onstop = () => {
        setRecordedChunks(chunks);
      };

      recorderInstance.start();
      setIsRecording(true);
    }
  };

  const stopCapture = () => {
    if (recorder) {
      recorder.stop();
      setIsRecording(false);
    }
  };

  const saveVideo = async () => {
    try {
      const videoBlob = new Blob(recordedChunks, { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);
      const videoRequest = new Request(videoUrl);
      fetch(videoRequest).then(() => {
        const link = document.createElement("a");
        link.href = videoUrl;
        link.setAttribute("download", "recorded-video.mp4");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
      } else {
        setError(error);
      }
    }
  };

  const selectVideo = (event: any) => {
    setFile(event.target.files[0]);
  };

  const uploadVideo = async () => {
    try {
      const formData = new FormData();

      if (file) {
        formData.append("file", file);
        await tryToUploadVideo(formData);
      } else {
        throw new Error("Fichier non trouvé");
      }
    } catch (error: any) {
      if (error.message) {
        setError(error.message);
      } else {
        setError(error);
      }
    }
  };

  return {
    videoRef,
    isRecording,
    recordedChunks,
    file,
    startCapture,
    stopCapture,
    saveVideo,
    uploadVideo,
    selectVideo,
    navigate,
    error,
  };
}
