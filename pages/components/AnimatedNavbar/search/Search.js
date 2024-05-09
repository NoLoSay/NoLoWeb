import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

const Search = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="flex w-screen h-screen">
        
      </div>
    </Fragment>
  );
};

Search.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Search;
