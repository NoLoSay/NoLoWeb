import { Fragment } from "react";
import Head from "next/head";
import DownloadContainer from "./Views/download-container";
import VideoCreationContainer from "./Views/video-creation-container";
import Layout from '../../components/Layout';
const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="absolute top-[83px] left-[0px] w-[1920px] flex flex-col items-center justify-center">
        <DownloadContainer />
        <div className="w-[1440px] flex flex-row items-center justify-start pt-0 px-[243px] pb-20 box-border gap-[20px]">
          <VideoCreationContainer />
          <img
            className="relative w-[467px] h-[300px] overflow-hidden shrink-0"
            alt=""
            src="/images/launch-video.png"
          />
        </div>
        <div className="rounded-xl bg-gray-300 w-[1280px] overflow-hidden flex flex-row items-center justify-start py-20 px-[163px] box-border">
          <div className="flex-1 flex flex-col items-start justify-center relative gap-[20px]">
            <img
              className="absolute my-0 mx-[!important] top-[calc(50%_-_156.5px)] left-[calc(50%_-_640px)] w-[1280px] h-[398px] object-cover opacity-[0.15] z-[0]"
              alt=""
              src="/images/map.png"
            />
            <div className="flex flex-col items-start justify-center gap-[3px] z-[1]">
              <div className="relative font-medium opacity-[0.6]">
                5,5 millions de personnes utilisent déjà Nolosay au quotidien.
              </div>
              <div className="relative text-6xl font-semibold text-yellow-300">
                Accèdez à +1000 vidéos traduites en langue des signes
              </div>
            </div>
            <div className="self-stretch relative z-[2]">
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
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
