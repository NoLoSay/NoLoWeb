import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import TitleCard from "../../components/TitleCard/TitleCard";

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
      </div>
    </Fragment>
  );
};

Location.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Location;
