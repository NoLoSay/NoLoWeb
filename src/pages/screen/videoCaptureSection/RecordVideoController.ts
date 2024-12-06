import { UserContext } from "@global/contexts/UserProvider";
import useUploadVideo from "@helpers/httpClient/queries/videos/useUploadVideo";
import {
  useLocation,
  useNavigate,
} from "node_modules/react-router-dom/dist/index";
import { RefObject, useContext, useEffect, useRef, useState } from "react";
import { createFFmpeg } from "@ffmpeg/ffmpeg";

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

  const ffmpeg = createFFmpeg({ log: true });

  const convertBlobToMp4 = async (blob) => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    // Chargez le blob dans le système de fichiers virtuel de FFmpeg
    const webmFile = new Uint8Array(await blob.arrayBuffer());
    ffmpeg.FS("writeFile", "input.webm", webmFile);

    // Commande FFmpeg pour convertir en MP4
    await ffmpeg.run("-i", "input.webm", "output.mp4");

    // Récupérez le fichier MP4 converti
    const mp4Data = ffmpeg.FS("readFile", "output.mp4");
    const mp4Blob = new Blob([mp4Data.buffer], { type: "video/mp4" });

    return mp4Blob; // Retourne le Blob MP4
  };

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
      const mp4Blob = await convertBlobToMp4(webmBlob);
      const videoUrl = URL.createObjectURL(mp4Blob);
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
