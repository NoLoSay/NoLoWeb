import { Fragment } from "react";
import DownloadContainer from "../../components/Home/DownloadContainer";
import VideoCreationContainer from "../../components/Home/VideoCreationContainer";
import Layout from "../../components/Layout/Layout";
import textData from "../../../public/text.json";

interface HomeProps {}

const styles: { [key: string]: string } = {
  mainDiv: "flex flex-col items-center justify-center gap-y-16 pb-10 pt-3",

  videoCreationDiv:
    "w-3/4 flex flex-row justify-start gap-2 " +
    "md:flex-col md:w-3/4 " +
    "sm:flex-col sm:w-3/4",

  videoCreationImage: "relative w-3/4 self-center rounded-xl",

  descriptionDiv:
    "relative w-4/5 rounded-xl  p-10 bg-gray-300 bg-cover bg-[url(/images/map.png)] justify-start " +
    "lg:h-1/4 lg:w-6/7 " +
    "md:h-1/4 md:w-6/7 " +
    "sm:h-1/4 sm:w-9/10 sm:rounded-md",

  descriptionDivTextDiv:
    "relative w-full flex flex-col items-start self-center justify-start gap-5 py-20 px-10" +
    "lg:py-3 lg:px-16 lg:gap-2 " +
    "md:py-2 md:px-14 md:gap-2 " +
    "sm:py-2 sm:px-2 sm:gap-1",

  descriptionDivTitleText:
    "text-2xl font-medium brightness-75 " +
    "lg:text-base " +
    "md:text-xs " +
    "sm:text-[0.5rem]",

  descriptionDivSubtitleText:
    "text-2xl font-semibold text-yellow-300 " +
    "llg:text-base " +
    "md:text-xs " +
    "sm:text-[0.5rem]",

  descriptionDivText:
    "text-2xl " + "lg:text-base " + "md:text-xs " + "sm:text-[0.35rem] ",
  container_0: "font-poppins",
};

const Home: React.FC<HomeProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <Fragment>
      <div className={`mainDiv ${styles["mainDiv"]}`}>
        <DownloadContainer />
        <div className={`videoCreationDiv ${styles["videoCreationDiv"]} `}>
          <VideoCreationContainer />
          <img
            className={`Home/videoCreationImage ${styles["videoCreationImage"]}`}
            alt="Video Creation Image"
            src="/images/SignImage.jpg"
          />
        </div>
        <div className={`Home/descriptionDiv ${styles["descriptionDiv"]}`}>
          <div
            className={`Home/descriptionDivTextDiv ${styles["descriptionDivTextDiv"]}`}
          >
            <p
              className={`Home/descriptionDivTitleText ${styles["descriptionDivTitleText"]}`}
            >
              {textData.page.screen.home.title}
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]}`}
            >
              {textData.page.screen.home.subtitle}
            </p>
            <p
              className={`Home/descriptionDivText ${styles["descriptionDivText"]}`}
            >
              {textData.page.screen.home.text}
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
