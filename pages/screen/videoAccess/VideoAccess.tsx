import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import infosJson from "../../../stories/components/assets/testArtCard.json"

const VideoAccess = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div>
        <ArtCard infos={infosJson}/>
      </div>
    </Fragment>
  );
};

VideoAccess.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
