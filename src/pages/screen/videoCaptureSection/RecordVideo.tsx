import { useState, useRef, useEffect } from "react";
import Layout from "@components/Layout/Layout";
import textData from "@public/text.json";
import { Camera } from "node_modules/@mui/icons-material/index";

const styles: { [key: string]: string } = {
  mainDiv:
    "items-center justify-center flex flex-col relative w-full gap-5 my-8",

  videoDiv: "flex justify-center",

  video: "w-auto rounded-[50px] shadow-cardShadow",

  buttonsDiv: "flex flex-row relative gap-8",

  button:
    "font-poppins text-xs font-normal relative text-center rounded-xl flex gap-2.5 p-2.5 hover: cursor-pointer",
  buttonDisabled: "bg-base-black text-yellow-300 hover:cursor-not-allowed",
  buttonEnabled: "bg-yellow-300 text-base-white",
};

export const RecordVideo = (): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

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
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    setupCamera();
  }, []);

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
      const videoBlob = new Blob(recordedChunks, { type: ".mp4" });
      const videoUrl = URL.createObjectURL(videoBlob);
      const videoRequest = new Request(videoUrl);
      fetch(videoRequest)
        .then(() => {
          const link = document.createElement('a');
          link.href = videoUrl;
          link.setAttribute('download', 'recorded-video.mp4');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`RecordVideo/mainDiv ${styles.mainDiv}`}>
      <div className={`RecordVideo/videoDiv ${styles.videoDiv}`}>
        <Camera
        
        />
        <video
          ref={videoRef}
          width={1280}
          height={720}
          autoPlay
          playsInline
          muted
          className={`RecordVideo/video ${styles.video}`}
        />
      </div>
      <div className={`RecordVideo/buttonsDiv ${styles.buttonsDiv}`}>
        <button
          onClick={startCapture}
          disabled={isRecording}
          className={`RecordVideo/button ${styles.button} ${!isRecording ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.start}
        </button>
        <button
          onClick={stopCapture}
          disabled={!isRecording}
          className={`RecordVideo/button ${styles.button} ${isRecording ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.stop}
        </button>
        <button
          onClick={saveVideo}
          disabled={recordedChunks.length === 0}
          className={`RecordVideo/button ${styles.button} ${recordedChunks.length > 0 ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.save}
        </button>
      </div>
    </div>
  );
};

RecordVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default RecordVideo;
