import "./global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo/nologo.png" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
