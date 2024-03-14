import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';

interface MyAppProps extends AppProps {
  Component: React.ComponentType & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);


  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo/nologo.png" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
