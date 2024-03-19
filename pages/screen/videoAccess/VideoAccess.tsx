import { Fragment, ReactNode } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import infosJson from "../../../stories/assets/testArtCard.json"
import VideoVignette from "../../components/VideoVignette/VideoVignette";

const VideoAccess = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div>
        <ArtCard
          title={infosJson.title}
          videoPath={infosJson.videoPath}
          artImage={infosJson.artImage}
          description={infosJson.description}
          spec={infosJson.spec}/>
        <div className="w-4/5 mx-auto py-14">
          <p className="text-black">Découvrez d'autres oeuvres similaires :</p>
          <div className=" grid grid-cols-3 space-5">
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={3} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={96} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={12} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={54} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

VideoAccess.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
