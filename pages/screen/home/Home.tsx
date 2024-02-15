import { Fragment } from "react";
import Head from "next/head";
import DownloadContainer from "./Views/DownloadContainer";
import VideoCreationContainer from "./Views/VideoCreationContainer";
import Layout from "../../components/Layout";

interface HomeProps {}

const styles: { [key: string]: string } = {
  // body styles
  mainDiv: "absolute top-[83px] left-[0px] w-[1920px] flex flex-col items-center justify-center",
  VideoCreationDiv: "w-[1440px] flex flex-row items-center justify-start pt-0 px-[243px] pb-20 box-border gap-[20px]",
  VideoCreationImage: "relative w-[467px] h-[300px] overflow-hidden shrink-0",
  DescriptionDiv: "rounded-xl bg-gray-300 w-[1280px] overflow-hidden flex flex-row items-center justify-start py-20 px-[163px] box-border",
  DescriptionDivTextDiv: "flex-1 flex flex-col items-start justify-center relative gap-[20px]",
  DescriptionDivImage: "absolute my-0 mx-[!important] top-[calc(50%_-_156.5px)] left-[calc(50%_-_640px)] w-[1280px] h-[398px] object-cover opacity-[0.15] z-[0]",
  DescriptionDivTitlteDiv: "flex flex-col items-start justify-center gap-[3px] z-[1]",
  DescriptionDivTitleText: "relative font-medium opacity-[0.6]",
  DescriptionDivSubtitleText: "relative text-6xl font-semibold text-yellow-300",
  DescriptionDivText: "self-stretch relative z-[2]",
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
      <div className={styles["mainDiv"]}>
        <DownloadContainer />
        <div className={styles["VideoCreationDiv"]}>
          <VideoCreationContainer />
          <img
            className={styles["VideoCreationImage"]}
            alt="Video Creation Image"
            src="/images/launch-video.png"
          />
        </div>
        <div className={styles["DescriptionDiv"]}>
          <img
            className={styles["DescriptionDivImage"]}
            alt="Map as a background"
            src="/images/map.png"
          />
          <div className={styles["DescriptionDivTextDiv"]}>
            <div className={"DescriptionDivTitlteDiv"}>
              <div className={"DescriptionDivTitleText"}>
                5,5 millions de personnes utilisent déjà Nolosay au quotidien.
              </div>
              <div className={styles["DescriptionDivSubtitleText"]}>
                Accèdez à +1000 vidéos traduites en langue des signes
              </div>
            </div>
            <div className={styles["DescriptionDivText"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor.
            </div>
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
