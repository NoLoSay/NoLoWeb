// pages/screen/About/about.js
import { Fragment } from "react";
import Head from "next/head";
import Layout from '../../components/Layout';

const About = () => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <img className="w-8 h-8" alt="" src="/group-2.svg" />
    </Fragment>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
