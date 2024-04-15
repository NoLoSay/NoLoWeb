import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import TitleCard from "../../components/TitleCard/TitleCard";
import VideoVignette from "../../components/VideoVignette/VideoVignette";
import ArtVignette from "../../components/ArtVignette/ArtVignette";
import { ReactNode } from "react";
import { GetServerSideProps } from 'next';

interface LocationProps {
  name: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website: string;
  city: string,
  location: string;
}

const Location = ({ name, description, imageSrc, videoCountPlaceholder, website, city, location }: LocationProps) => {
  console.log("Title:", name);
  console.log("Description:", description);
  console.log("Website:", imageSrc);
  console.log("Location:", videoCountPlaceholder);
  console.log("Title:", website);
  console.log("Description:", city);
  console.log("Website:", location);

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className="flex flex-col space-y-5 m-5 justify-center w-4/5 mx-auto">
        <TitleCard
          title={name}
          description={description}
          website={website}
          location={`${city}, ${location}`}
          imgPath=""
          pagePath="../find_video/FindVideo/"
        />
        <div className="flex flex-col pt-10 ">
          <h2 className="text-black">Expostions</h2>
          <div className="border-b-4 border-solid border-yellow-300 w-[800px] mt-2 "></div>
          <div className="grid grid-cols-3 space-5 mt-8">
            <ArtVignette
              img="/images/castle/old-castle.png"
              title="Tableau de Louis XIV"
              description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"
            />
            <ArtVignette
              img="/images/castle/old-castle.png"
              title="Tableau de Louis XIV"
              description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"
            />
            <ArtVignette
              img="/images/castle/old-castle.png"
              title="Tableau de Louis XIV"
              description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"
            />
            <ArtVignette
              img="/images/castle/old-castle.png"
              title="Tableau de Louis XIV"
              description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"
            />
            <ArtVignette
              img="/images/castle/old-castle.png"
              title="Tableau de Louis XIV"
              description="Lorem Imsum Lorem Imsum Lorem Imsum v vLorem Imsum Lorem Imsum Lorem Imsum"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps<LocationProps> = async (context) => {
  const { query } = context;
  return {
    props: {
      name: query.name as string,
      description: query.description as string,
      imageSrc: query.imageSrc as string,
      videoCountPlaceholder: query.videoCountPlaceholder as string,
      website: query.website as string,
      city: query.city as string,
      location: query.location as string,
    },
  };
};

Location.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Location;
