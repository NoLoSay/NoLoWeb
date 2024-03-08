import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Container from "./Views/Container";

interface AboutProps {}

const styles: { [key: string]: string } = {
  container: "absolute top-[111px] left-[0px] w-[1920px] h-[1556px]",
  LineImg: "absolute top-[388.86px] left-[440.49px] w-[585.95px] h-[757.03px] object-contain",
  ContentDiv: "absolute top-[610px] left-[364px] rounded-41xl bg-base-white box-border w-[1226px] h-[310px] mix-blend-normal text-center text-[26px] text-gray-300 border-[3px] border-solid border-gray-300",
  ContentText: "absolute top-[86px] left-[77px] inline-block w-[1066px] h-[239px]",
  EpitechImg: "absolute top-[10px] left-[459px] w-[302px] h-[288px] object-cover",
  AboutDiv: "absolute top-[34px] left-[0px] rounded-tl-41xl rounded-tr-xl rounded-br-xl rounded-bl-41xl w-[1954px] h-[739px] overflow-hidden text-left text-[60px] text-base-white",
  TeamImg: "absolute top-[12px] left-[461px] rounded-41xl w-[1033px] h-[503px] object-cover",
  MirrorTeamImg: "absolute top-[calc(50% - 338.5px)] left-[457px] w-[1039px] h-[503px] object-cover",
  TeamTextDiv: "absolute top-[406px] left-[505px] flex flex-col items-start justify-start",
  TeamText: "relative leading-[65px] font-black whitespace-pre-wrap inline-block w-[675px]",
};

const About: React.FC<AboutProps> & { getLayout: (page: React.ReactNode) => React.ReactNode } = () => {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={styles.container}>
        <img className={styles.LineImg} alt="" src="/images/lineAbout.png" />
        <div className={styles.ContentDiv}>
          <b className={styles.ContentText}>
            NoLoSay, un projet étudiant de 8 personnes en 4ème année du
            programme Grande École à EPITECH. Le projet se déroule sur 3 ans et
            nous souhaitons répandre la langue des signes en mettant à disposition
            des vidéos pour la communauté réalisées par la communauté.
          </b>
          <img className={styles.EpitechImg} alt="" src="/images/logo/logoEpitech.png" />
        </div>
        <Container />
        <div className={styles.AboutDiv}>
          <img className={styles.TeamImg} alt="" src="/images/people/nologroup.png" />
          <img className={styles.MirrorTeamImg} alt="" src="/images/people/miroir-nologroup.png" />
          <div className={styles.TeamTextDiv}>
            <div className={styles.TeamText}>
              L’équipe NOLOSAY !
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

About.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default About;
