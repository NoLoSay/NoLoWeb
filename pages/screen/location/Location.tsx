import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import TitleCard from "../../components/TitleCard/TitleCard";
import VideoVignette from "../../components/VideoVignette/VideoVignette";
import ArtVignette from "../../components/ArtVignette/ArtVignette";
import { ReactNode } from "react";

const Location = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className="
      flex flex-col space-y-5 m-5 justify-center
      w-4/5 mx-auto"
      >
        <TitleCard title="Château des ducs de Bretagne" />
        <div className="flex flex-col">
          <h2 className="text-black">Oeuvre accessibles</h2>
          <div className=" grid grid-cols-3 space-5">
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
            <ArtVignette img="/images/castle/old-castle.png" title="Tableau de Louis XIV" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Location.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Location;
