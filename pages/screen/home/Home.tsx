import { Fragment } from "react";
import Head from "next/head";
import DownloadContainer from "./Views/DownloadContainer";
import VideoCreationContainer from "./Views/VideoCreationContainer";
import Layout from "../../components/Layout";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from 'react';


interface HomeProps {}

const styles: { [key: string]: string } = {
  mainDiv: " flex flex-col items-center justify-center gap-y-16 pb-10 pt-5",

  videoCreationDiv: "w-3/4 flex flex-row justify-start gap-2",
  mdVideoCreationDiv: "md:flex-col md:w-3/4",
  smVideoCreationDiv: "sm:flex-col sm:w-3/4",

  videoCreationImage: "relative w-3/4 self-center",

  descriptionDiv: "relative w-4/5 rounded-xl  p-10 bg-gray-300 bg-cover bg-[url(/images/map.png)] justify-start ",
  lgDescriptionDiv:
    "lg:h-1/4 lg:w-6/7",
  mdDescriptionDiv:
    "md:h-1/4 md:w-6/7",
  smDescriptionDiv:
    "sm:h-1/4 sm:w-9/10 sm:rounded-md",

  descriptionDivImage:
    "flex w-full top-0 left-0 rounded-xl object-cover brightness-50",
  smDescriptionDivImage:
    "sm:rounded-md",

  descriptionDivTextDiv:
    "relative w-full flex flex-col items-start self-center justify-start gap-5 py-20 px-10",
  lgDescriptionDivTextDiv: "lg:py-3 lg:px-16 lg:gap-2",
  mdDescriptionDivTextDiv: "md:py-2 md:px-14 md:gap-2",
  smDescriptionDivTextDiv: "sm:py-2 sm:px-2 sm:gap-1",

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
  const skillRef = useRef(null);
  const DownRef = useRef(null);
  const isDownRefInView = useInView(DownRef, {});
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
          className={`videoCreationDiv ${styles["videoCreationDiv"]} ${styles["mdVideoCreationDiv"]} ${styles["smVideoCreationDiv"]} `}
        >
          <motion.div
            initial={{ opacity: 0}}
            animate={isDownRefInView ? { opacity: 1 } : {opacity: 0}}
            transition={{duration: 3}}
            >
          <div ref={DownRef}>
          <VideoCreationContainer/>
          </div>
          </motion.div> 
          <img
            className={`Home/videoCreationImage ${styles["videoCreationImage"]}`}
            alt="Video Creation Image"
            src="/images/launch-video.png"
          />
        </div>
        <div className={`Home/descriptionDiv ${styles["descriptionDiv"]} ${styles["mdDescriptionDiv"]} ${styles["smDescriptionDiv"]}`}>
          <div
            className={`Home/descriptionDivTextDiv ${styles["descriptionDivTextDiv"]} ${styles["mdDescriptionDivTextDiv"]} ${styles["smDescriptionDivTextDiv"]} ${styles["lgDescriptionDivTextDiv"]}`}
          >
            <p
              className={`Home/descriptionDivTitleText ${styles["descriptionDivTitleText"]} ${styles["lgDescriptionDivTitleText"]} ${styles["mdDescriptionDivTitleText"]} ${styles["smDescriptionDivTitleText"]}`}
            >
              7 MILLIONS de personnes sourdes ou malentendantes en France
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]} ${styles["lgDescriptionDivSubtitleText"]} ${styles["mdDescriptionDivSubtitleText"]} ${styles["smDescriptionDivSubtitleText"]}`}
            >
              65% d'en eux ont des difficultés avec la langue française écrite
            </p>
            <p
              className={`Home/descriptionDivSubtitleText ${styles["descriptionDivSubtitleText"]} ${styles["lgDescriptionDivSubtitleText"]} ${styles["mdDescriptionDivSubtitleText"]} ${styles["smDescriptionDivSubtitleText"]}`}
            >
              34% SONT INACTIFS
            </p>
            <p
              className={`Home/descriptionDivText ${styles["descriptionDivText"]} ${styles["lgDescriptionDivText"]} ${styles["mdDescriptionDivText"]} ${styles["smDescriptionDivText"]}`}
            >
              Faciliter l'accès aux lieux pour les personnes sourdes utilisant la LSF revêt une importance 
              cruciale. L'inclusion sociale dépend de la mise en place de mesures adaptées, permettant à 
              chacun de participer pleinement à la vie communautaire. En rendant les environnements 
              accessibles, nous favorisons l'égalité des chances, la communication fluide et l'intégration 
              harmonieuse de tous, garantissant ainsi une société véritablement inclusive. L'accessibilité, loin 
              d'être une option, devient un impératif pour construire un monde où chaque individu 
              peut s'épanouir sans entraves
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
