import Layout from "@components/Layout/Layout";
import textData from "@public/text.json";
import RecordVideoController from "./RecordVideoController";

const styles: { [key: string]: string } = {
  mainDiv:
    "items-center justify-center flex flex-col relative w-full gap-5 my-8",

  videoDiv: "flex justify-center",

  video: "w-auto rounded-[50px] shadow-cardShadow",

  backButton: "relative self-start ml-8",

  buttonsDiv: "flex flex-row relative gap-8",

  button:
    "font-poppins text-xs font-normal relative text-center rounded-xl flex gap-2.5 p-2.5 hover: cursor-pointer",
  buttonDisabled: "bg-base-black text-yellow-300 hover:cursor-not-allowed",
  buttonEnabled: "bg-yellow-300 text-base-white",

  errorMessage: "text-red-600 text-center",
};

interface RecordVideoProps {}

export const RecordVideo = ({}: RecordVideoProps): JSX.Element => {
  const {
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
  } = RecordVideoController({});

  return (
    <div className={`RecordVideo/mainDiv ${styles.mainDiv}`}>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className={`RecordVideo/button ${styles.button} ${styles.buttonEnabled} ${styles.backButton}`}
      >
        {textData.page.screen.videoCaptureSection.goBack}
      </button>
      <div className={`RecordVideo/videoDiv ${styles.videoDiv}`}>
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
      {error && (
        <p className={`RecordVideo/errorMessage ${styles["errorMessage"]}`}>
          {error}
        </p>
      )}
      <div className={`RecordVideo/buttonsDiv ${styles.buttonsDiv}`}>
        <button
          onClick={startCapture}
          disabled={isRecording}
          className={`RecordVideo/button ${styles.button} ${!isRecording ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.startRecording}
        </button>
        <button
          onClick={stopCapture}
          disabled={!isRecording}
          className={`RecordVideo/button ${styles.button} ${isRecording ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.stopRecording}
        </button>
        <button
          onClick={saveVideo}
          disabled={recordedChunks.length === 0 || isRecording}
          className={`RecordVideo/button ${styles.button} ${recordedChunks.length > 0 ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.saveVideo}
        </button>
        <input
          type={"file"}
          accept={"video/*"}
          onChange={(e) => {
            selectVideo(e);
          }}
          className={`RecordVideo/button ${styles.button} ${styles.buttonEnabled}`}
        />
        <button
          onClick={() => {
            uploadVideo();
          }}
          disabled={!file}
          className={`RecordVideo/button ${styles.button} ${file ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          {textData.page.screen.videoCaptureSection.uploadVideo}
        </button>
      </div>
    </div>
  );
};

RecordVideo.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default RecordVideo;
