import { Fragment } from "react";
import Head from "../../../node_modules/next/head";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/About/Container";
import textData from "../../../public/text.json";

interface AboutProps {}

const styles: { [key: string]: string } = {
  container:
    "w-full py-10 md:py-16 sm:py-12 bg-base-white flex flex-col items-center justify-center",
  AboutDiv:
    "sm:rounded-15xl rounded-[80px] w-4/5 overflow-hidden text-left text-base-white relative mb-12",
  gradient:
    "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FDC81065] to-[#00000000]",
  TeamImg: "w-full",
  ContentDiv:
    "w-4/5 px-12 py-4 items-center justify-center border-[#FDC81088] border-8 border-solid rounded-xl relative mb-16",
  ContentText:
    "inline-block text-[1.5rem] md:text-[1.2rem] sm:text-[0.8rem] font-black text-center text-black",
  EpitechImg:
    "absolute w-auto h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  MirrorTeamImg:
    "absolute top-[calc(50% - 338.5px)] left-[457px] w-[1039px] h-[503px] object-cover",
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
          <div className={styles.gradient} />
          <img
            className={styles.TeamImg}
            alt=""
            src="/images/people/nologroup.png"
          />
          <div className={styles.TeamTextDiv}>
            <div className={styles.TeamText}>L’équipe NOLOSAY !</div>
          </div>
        </div>
        <div className={styles.ContentDiv}>
          <span className={styles.ContentText}>
            {textData.page.about.description}
          </span>
          <img
            className={styles.EpitechImg}
            alt=""
            src="/images/logo/logoEpitech.png"
          />
        </div>
        <Container />
      </div>
    </Fragment>
  );
};

About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;