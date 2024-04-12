import { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const toto: string = "bg-yellow-300 text-base-white";
const tata: string = "bg-base-black text-yellow-300";

const classes: { [key: string]: React.CSSProperties } = {
  mainDiv: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    gap: "20px",
    margin: "30px 0px 0px 0px",
  },
  buttonsDiv: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    gap: "30px",
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  video: {
    width: "auto",
    borderRadius: "50px",
    // boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)",
    boxShadow: "0px 4px 9px 0px var(--drop-shadow)",
  },
  buttonBox: {
    // backgroundColor: "var(--colors-base-button)",
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
    padding: "10px",
    position: "relative",
  },
  button: {
    cursor: "pointer",
    // backgroundColor: "var(--colors-base-button)",
    // color: "var(--blackblack)",
    fontFamily: '"Poppins-Bold", Helvetica',
    fontSize: "10px",
    fontWeight: "400",
    letterSpacing: "0px",
    lineHeight: "normal",
    marginTop: "-1px",
    position: "relative",
    textAlign: "center",
  }
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

  const saveVideo = () => {
    if (recordedChunks.length > 0) {
      const videoBlob = new Blob(recordedChunks, { type: "video/webm" });
      const videoUrl = URL.createObjectURL(videoBlob);

      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = "recorded-video.webm";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div style={{ ...classes["mainDiv"] }} className="mainDiv">
      <div style={{ ...classes["videoContainer"] }} className="videoContainer">
        <video
          style={{ ...classes["video"] }}
          ref={videoRef}
          width={1280}
          height={720}
          autoPlay
          playsInline
          muted
          className="video"
        />
      </div>
      <div style={{ ...classes["buttonsDiv"] }} className="buttonsDiv">
        <div
          style={{
            ...classes["buttonBox"],
            // backgroundColor: !isRecording
            //   ? "var(--colors-base-button)"
            //   : "var(--colors-button-disabled)",
          }}
          className={`buttonBox ${
            !isRecording ? toto : tata
          }`}
        >
          <button
            style={{
              ...classes["button"],
              // backgroundColor: !isRecording
              //   ? "var(--colors-base-button)"
              //   : "var(--colors-button-disabled)",
              cursor: !isRecording ? "pointer" : "not-allowed",
            }}
            onClick={startCapture}
            disabled={isRecording}
            className={`button ${
              !isRecording ? toto : tata
            }`}
          >
            Start Recording
          </button>
        </div>
        <div
          style={{
            ...classes["buttonBox"],
            backgroundColor: isRecording
              ? "var(--colors-base-button)"
              : "var(--colors-button-disabled)",
          }}
          className="buttonBox"
        >
          <button
            style={{
              ...classes["button"],
              backgroundColor: isRecording
                ? "var(--colors-base-button)"
                : "var(--colors-button-disabled)",
              cursor: isRecording ? "pointer" : "not-allowed",
            }}
            onClick={stopCapture}
            disabled={!isRecording}
            className="button"
          >
            Stop Recording
          </button>
        </div>
        <div
          style={{
            ...classes["buttonBox"],
            backgroundColor:
              recordedChunks.length > 0
                ? "var(--colors-base-button)"
                : "var(--colors-button-disabled)",
          }}
          className="buttonBox"
        >
          <button
            style={{
              ...classes["button"],
              backgroundColor:
                recordedChunks.length > 0
                  ? "var(--colors-base-button)"
                  : "var(--colors-button-disabled)",
              cursor: recordedChunks.length > 0 ? "pointer" : "not-allowed",
            }}
            onClick={saveVideo}
            disabled={recordedChunks.length === 0}
            className="button"
          >
            Save Video
          </button>
        </div>
      </div>
    </div>
  );
};

RecordVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default RecordVideo;
