import { Fragment, useContext, useEffect } from "react";
import Head from "../../../node_modules/next/head";
import DownloadContainer from "./Views/DownloadContainer";
import VideoCreationContainer from "./Views/VideoCreationContainer";
import Layout from "../../components/Layout/Layout";
import textData from "../../../public/text.json";
import { UserContext } from "../../../contexts/UserProvider";

interface HomeProps {}

const styles: { [key: string]: string } = {
  mainDiv: "relative w-full flex flex-col items-center justify-center gap-y-5",

  videoCreationDiv: "w-3/4 flex flex-row justify-start gap-2",
  mdVideoCreationDiv: "md:flex-col md:w-3/4",
  smVideoCreationDiv: "sm:flex-col sm:w-3/4",

  videoCreationImage: "relative w-3/4 self-center",

  descriptionDiv:
    "relative rounded-2.5xl bg-gray-300 bg-cover bg-map w-4/5 justify-start",
  lgDescriptionDiv: "lg:h-1/4 lg:w-5/6",
  mdDescriptionDiv: "md:h-1/4 md:w-5/6",
  smDescriptionDiv: "sm:h-1/4 sm:w-11/12 sm:rounded-md",

  descriptionDivTextDiv:
    "relative w-full flex flex-col items-start self-center justify-start gap-5 py-20 px-20",
  lgDescriptionDivTextDiv: "lg:py-10 lg:px-16 lg:gap-2",
  mdDescriptionDivTextDiv: "md:py-5 md:px-14 md:gap-2",
  smDescriptionDivTextDiv: "sm:py-2 sm:px-2 sm:gap-0",

  descriptionDivTitleText: "text-2xl font-medium brightness-75",
  lgDescriptionDivTitleText: "lg:text-base",
  mdDescriptionDivTitleText: "md:text-xs",
  smDescriptionDivTitleText: "sm:text-[0.5rem]",

  descriptionDivSubtitleText: "text-2xl font-semibold text-yellow-300",
  lgDescriptionDivSubtitleText: "lg:text-base",
  mdDescriptionDivSubtitleText: "md:text-xs",
  smDescriptionDivSubtitleText: "sm:text-[0.5rem]",

  descriptionDivText: "text-2xl",
  lgDescriptionDivText: "lg:text-base",
  mdDescriptionDivText: "md:text-xs",
  smDescriptionDivText: "sm:text-[0.35rem]",
};

const Home: React.FC<HomeProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  /* Start of the example to access user data */

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const func = async (): Promise<void> => {
      console.log(user);
    };
    func();
  }, [user]);

  /* End of the example */

  return (
    <Fragment>
      <Head>
        <title className="font-poppins">Nolosay</title>
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
        <div
          className={`Home/descriptionDiv ${styles["descriptionDiv"]} ${styles["mdDescriptionDiv"]} ${styles["smDescriptionDiv"]}`}
        >
          <div
            className={`Home/descriptionDivTextDiv ${styles["descriptionDivTextDiv"]} ${styles["mdDescriptionDivTextDiv"]} ${styles["smDescriptionDivTextDiv"]} ${styles["lgDescriptionDivTextDiv"]}`}
          >
            <p
              className={`Home/descriptionDivTitleText ${styles["descriptionDivTitleText"]} ${styles["lgDescriptionDivTitleText"]} ${styles["mdDescriptionDivTitleText"]} ${styles["smDescriptionDivTitleText"]}`}
            >
              {textData.page.home.descriptionDiv.title}
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]} ${styles["lgDescriptionDivSubtitleText"]} ${styles["mdDescriptionDivSubtitleText"]} ${styles["smDescriptionDivSubtitleText"]}`}
            >
              {textData.page.home.descriptionDiv.subtitle}
            </p>
            <p
              className={`Home/descriptionDivText ${styles["descriptionDivText"]} ${styles["lgDescriptionDivText"]} ${styles["mdDescriptionDivText"]} ${styles["smDescriptionDivText"]}`}
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
