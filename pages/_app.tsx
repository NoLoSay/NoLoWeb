import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  Component: React.ComponentType & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo/nologo.png" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
