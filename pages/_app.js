import { Fragment } from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>NoLoSay</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="icon"
          href="/App/group-2.svg"
          type="image/svg+xml"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

