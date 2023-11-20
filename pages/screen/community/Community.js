// pages/other.js
import { Fragment } from "react";
import Head from "next/head";
import Layout from '../../components/Layout';

const Community = () => {
  return (
    <Fragment>
    <Head>
      <title>Qui sommes-nous ?</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <img className="w-8 h-8" alt="" src="/group-2.svg" />
  </Fragment>
  );
};

Community.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Community;
