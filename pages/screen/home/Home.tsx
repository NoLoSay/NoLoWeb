import { Fragment } from "react";
import Head from "next/head";
import DownloadContainer from "../../components/Home/DownloadContainer";
import VideoCreationContainer from "../../components/Home/VideoCreationContainer";
import Layout from "../../components/Layout/Layout";
import textData from "../../../public/text.json";

interface HomeProps {}

const styles: { [key: string]: string } = {
  mainDiv: "relative w-full flex flex-col items-center justify-center gap-y-5",

  videoCreationDiv: "w-3/4 flex flex-row justify-start gap-2 " +
    "md:flex-col md:w-3/4 " +
    "sm:flex-col sm:w-3/4",

  videoCreationImage: "relative w-3/4 self-center",

  descriptionDiv: "relative rounded-xl bg-gray-300 bg-cover bg-map w-4/5 justify-start " +
    "lg:h-1/4 lg:w-6/7 " +
    "md:h-1/4 md:w-6/7 " +
    "sm:h-1/4 sm:w-9/10 sm:rounded-md",

  descriptionDivImage:
    "flex w-full top-0 left-0 rounded-xl object-cover brightness-50 " +
    "sm:rounded-md",

  descriptionDivTextDiv:
    "relative w-full flex flex-col items-start self-center justify-start gap-5 py-20 px-20 " + 
    "lg:py-3 lg:px-16 lg:gap-2 " +
    "md:py-2 md:px-14 md:gap-2 " +
    "sm:py-2 sm:px-2 sm:gap-1",

  descriptionDivTitleText: "text-6xl font-medium brightness-75 " +
    "lg:text-[1rem] " +
    "md:text-[0.75rem] " +
    "sm:text-[0.5rem]",

  descriptionDivSubtitleText: "text-6xl font-semibold text-yellow-300 " +
    "lg:text-[1rem] " +
    "md:text-[0.75rem] " +
    "sm:text-[0.5rem]",

  descriptionDivText: "text-6xl " +
    "lg:text-[1rem] " +
    "md:text-[0.75rem] " +
    "sm:text-[0.35rem] ",
};

const Home: React.FC<HomeProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <Fragment>
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
          className={`videoCreationDiv ${styles["videoCreationDiv"]} `}
        >
          <VideoCreationContainer />
          <img
            className={`Home/videoCreationImage ${styles["videoCreationImage"]}`}
            alt="Video Creation Image"
            src="/images/launch-video.png"
          />
        </div>
        <div className={`Home/descriptionDiv ${styles["descriptionDiv"]}`}>
          <div
            className={`Home/descriptionDivTextDiv ${styles["descriptionDivTextDiv"]}`}
          >
            <p
              className={`Home/descriptionDivTitleText ${styles["descriptionDivTitleText"]}`}
            >
              {textData.page.home.descriptionDiv.title}
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]}`}
            >
              {textData.page.home.descriptionDiv.subtitle}
            </p>
            <p
              className={`Home/descriptionDivText ${styles["descriptionDivText"]}`}
            >
              {textData.page.home.descriptionDiv.text}
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
