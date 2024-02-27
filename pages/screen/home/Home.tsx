import { Fragment } from "react";
import Head from "next/head";
import DownloadContainer from "./Views/DownloadContainer";
import VideoCreationContainer from "./Views/VideoCreationContainer";
import Layout from "../../components/Layout";

interface HomeProps {}

const styles: { [key: string]: string } = {
  /* original */
  // mainDiv: "absolute top-[83px] left-[0px] w-[1920px] flex flex-col items-center justify-center",
  // videoCreationDiv: "w-[1440px] flex flex-row items-center justify-start pt-0 px-[243px] pb-20 box-border gap-[20px]",
  // videoCreationImage: "relative w-[467px] h-[300px] overflow-hidden shrink-0",
  // descriptionDiv: "rounded-xl bg-gray-300 w-[1280px] overflow-hidden flex flex-row items-center justify-start py-20 px-[163px] box-border",
  // descriptionDivTextDiv: "flex-1 flex flex-col items-start justify-center relative gap-[20px]",
  // descriptionDivImage: "absolute my-0 mx-[!important] top-[calc(50%_-_156.5px)] left-[calc(50%_-_640px)] w-[1280px] h-[398px] object-cover opacity-[0.15] z-[0]",
  // descriptionDivTitlteDiv: "flex flex-col items-start justify-center gap-[3px] z-[1]",
  // descriptionDivTitleText: "relative font-medium opacity-[0.6]",
  // descriptionDivSubtitleText: "relative text-6xl font-semibold text-yellow-300",
  // descriptionDivText: "self-stretch relative z-[2]",

  /* rework */
  mainDiv: "relative w-full flex flex-col items-center justify-center gap-y-5",

  videoCreationDiv: "w-3/4 flex flex-row justify-start gap-2",
  mdVideoCreationDiv: "md:flex-col md:w-3/4",
  smVideoCreationDiv: "sm:flex-col sm:w-3/4",

  videoCreationImage: "relative w-3/4 self-center",

  descriptionDiv: "relative rounded-xl bg-gray-300 w-4/5 justify-start",
  lgDescriptionDiv:
    "md:h-1/4 md:w-6/7",
  mdDescriptionDiv:
    "md:h-1/4 md:w-6/7",
  smDescriptionDiv:
    "sm:h-1/4 sm:w-9/10 sm:rounded-sm",

  descriptionDivImage:
    "flex w-full top-0 left-0 rounded-xl object-cover brightness-50",
  smDescriptionDivImage:
    "sm:rounded-sm",

  descriptionDivTextDiv:
    "absolute top-0 left-0 flex flex-col items-start self-center justify-start gap-5 py-20 px-20",
  lgDescriptionDivTextDiv: "lg:px-16 lg:gap-2 lg:py-3",
  mdDescriptionDivTextDiv: "md:py-2 md:px-14 md:gap-2",
  smDescriptionDivTextDiv: "sm:py-0 sm:px-2 sm:gap-1",

  descriptionDivTitleText: "text-6xl font-medium brightness-75",
  lgDescriptionDivTitleText: "lg:text-[1rem]",
  mdDescriptionDivTitleText: "md:text-[0.75rem]",
  smDescriptionDivTitleText: "sm:text-[0.5rem]",

  descriptionDivSubtitleText: "text-6xl font-semibold text-yellow-300",
  lgDescriptionDivSubtitleText: "lg:text-[1rem]",
  mdDescriptionDivSubtitleText: "md:text-[0.75rem]",
  smDescriptionDivSubtitleText: "sm:text-[0.5rem]",

  descriptionDivText: "text-6xl",
  lgDescriptionDivText: "lg:text-[1rem]",
  mdDescriptionDivText: "md:text-[0.75rem]",
  smDescriptionDivText: "sm:text-[0.35rem]",
};

const Home: React.FC<HomeProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <Fragment>
      {/* <div className={`buttonBox ${
            !isRecording ? toto : tata
          }`}></div> */}
      <Head>
        <title>Nolosay</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={`mainDiv ${styles["mainDiv"]}`}>
        <DownloadContainer />
        <div
          className={`videoCreationDiv ${styles["videoCreationDiv"]} ${styles["mdVideoCreationDiv"]} ${styles["smVideoCreationDiv"]} `}
        >
          <VideoCreationContainer />
          <img
            className={`Home/videoCreationImage ${styles["videoCreationImage"]}`}
            alt="Video Creation Image"
            src="/images/launch-video.png"
          />
        </div>
        <div className={`Home/descriptionDiv ${styles["descriptionDiv"]} ${styles["mdDescriptionDiv"]} ${styles["smDescriptionDiv"]}`}>
          <img
            className={`Home/descriptionDivImage ${styles["descriptionDivImage"]} ${styles["smDescriptionDivImage"]}`}
            alt="Map as a background"
            src="/images/map.png"
          />
          <div
            className={`Home/descriptionDivTextDiv ${styles["descriptionDivTextDiv"]} ${styles["mdDescriptionDivTextDiv"]} ${styles["smDescriptionDivTextDiv"]} ${styles["lgDescriptionDivTextDiv"]}`}
          >
            <p
              className={`Home/descriptionDivTitleText ${styles["descriptionDivTitleText"]} ${styles["lgDescriptionDivTitleText"]} ${styles["mdDescriptionDivTitleText"]} ${styles["smDescriptionDivTitleText"]}`}
            >
              5,5 millions de personnes utilisent déjà Nolosay au quotidien.
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]} ${styles["lgDescriptionDivSubtitleText"]} ${styles["mdDescriptionDivSubtitleText"]} ${styles["smDescriptionDivSubtitleText"]}`}
            >
              Accèdez à +1000 vidéos traduites en langue des signes
            </p>
            <p
              className={`Home/descriptionDivText ${styles["descriptionDivText"]} ${styles["lgDescriptionDivText"]} ${styles["mdDescriptionDivText"]} ${styles["smDescriptionDivText"]}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
