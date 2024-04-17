import { Fragment, ReactNode } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import ArtCard from "../../components/ArtCard/ArtCard";
import infosJson from "../../../stories/assets/testArtCard.json"
import VideoVignette from "../../components/VideoVignette/VideoVignette";
import { GetServerSideProps } from 'next';

interface VideoProps {
  name: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  city: string;
  location: string;
}

const VideoAccess = ({ name, description, imageSrc, videoCountPlaceholder }: VideoProps) => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div>
      <ArtCard
          title={name}
          artImage={imageSrc}
          videoPath={"infosJson.videoPath"}
          description={description}
          spec={infosJson.spec}
          pagePath=""/>
        <div className="w-4/5 mx-auto py-14">
          <p className="text-black">Découvrez d'autres oeuvres similaires :</p>
          <div className=" grid grid-cols-3 space-5">
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={3} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={96} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={12} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum" certified={54} />
            <VideoVignette img="/images/castle/chateau-large.png" title="Statue d'Anne de Bretagne" description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<VideoProps> = async (context) => {
  const { query } = context;
  return {
    props: {
      name: query.name as string,
      description: query.description as string,
      imageSrc: query.imageSrc as string,
      city: query.city as string,
      location: query.location as string,
      videoCountPlaceholder: query.videoCountPlaceholder as string,
    },
  };
};

VideoAccess.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default VideoAccess;
