import { Fragment } from "react";
import Head from "next/head";
import Layout from "@components/Layout/Layout";
import Container from "@components/About/Container";
import textData from "@public/text.json";
import Timeline from "@components/About/Timeline";

interface AboutProps {}

const styles: { [key: string]: string } = {
  container:
    "w-full py-10 md:py-16 sm:py-12 px-48 md:px-32 sm:px-8 bg-base-white flex flex-col items-center justify-center",
  AboutDiv:
    "sm:rounded-15xl rounded-[80px] w-4/5 overflow-hidden text-left text-base-white relative mb-12",
  TeamImg: "w-full",
  ContentDiv:
    "w-4/5 px-12 py-4 items-center justify-center border-[#FDC81088] border-8 border-solid rounded-xl relative mb-16",
  ContentText:
    "inline-block text-[1.5rem] md:text-[1.2rem] sm:text-[0.8rem] font-black text-center text-black leading-normal",
  TeamTextDiv: "absolute bottom-[10%] w-full text-center",
  TeamText:
    "font-black whitespace-pre-wrap inline-block text-[3rem] md:text-[2rem] sm:text-[1.5rem]",
};

const About: React.FC<AboutProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.AboutDiv}>
          <img
            className={styles.TeamImg}
            alt=""
            src="/images/people/nologroup.png"
          />
          <div className={styles.TeamTextDiv}>
            <div className={styles.TeamText}>
              {textData.page.screen.about.team}
            </div>
          </div>
        </div>
        <div className={styles.ContentDiv}>
          <span className={styles.ContentText}>
            {textData.page.screen.about.description}
          </span>
        </div>
        <Container />
        <Timeline />
      </div>
    </Fragment>
  );
};

About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
