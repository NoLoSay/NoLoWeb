import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import infosJson from "../../../stories/components/assets/testArtCard.json"
import VideoVignette from "../../components/VideoVignette/VideoVignette";

const VideoAccess = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div>
        <ArtCard infos={infosJson}/>
        <div className="w-4/5 mx-auto py-14">
          <p>Découvrez d'autres oeuvres similaires :</p>
          <div className=" grid grid-cols-3 space-5">
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          <VideoVignette img="/images/castle/chateau-large.png" title="Château des ducs de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={22}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

VideoAccess.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
