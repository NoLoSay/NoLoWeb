import React from "react";
import Layout from "@components/Layout/Layout";
import ArtworkCard from "@components/ArtworkCard/ArtworkCard";
import textData from "@public/text.json";
import ArtworkToTranslateSelectionScreenController from "./ArtworkToTranslateSelectionScreenController";

interface artWork {
  id: string;
  name: string;
  pictures: any[];
  description: string;
  site: any;
}

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-white flex flex-col gap-10 items-center justify-center mt-8 relative w-full " +
    "sm:gap-0 " +
    "md:gap-5",

  leftLine: "absolute flex flex-start self-start w-full " + "sm:hidden",

  rightLine: "absolute flex flex-end self-end " + "sm:hidden " + "md:hidden",

  titleDiv: `bg-miroir-d-eau-château-nantes_photo bg-cover bg-center relative rounded-2.5xl w-2/3`,

  titleDivFilterDiv:
    "absolute bg-gray-300 bg-opacity-65 h-full rounded-2.5xl w-full",

  titleDivText:
    "font-black font-helvetica py-5 relative text-center text-white text-6xl " +
    "sm:text-xl " +
    "md:text-4xl",

  artworkList:
    "gap-x-5 gap-y-10 grid grid-cols-3 my-20 w-5/6 " +
    "sm:grid-none sm:flex sm:flex-col sm:w-[92%] " +
    "md:grid-cols-2 " +
    "lg:grid-cols-2",

  errorMessage: "text-red-600 text-center",
};

const ArtworkToTranslateSelectionScreen = (): JSX.Element => {
  const { error, data } = ArtworkToTranslateSelectionScreenController({});

  return (
    <div
      className={`ArtworkToTranslateSelectionScreen/mainDiv ${styles["mainDiv"]}`}
    >
      <img
        className={`ArtworkToTranslateSelectionScreen/leftLine ${styles["leftLine"]}`}
        src="/images/artworkToTranslateSelectionScreen/Vector 60.png"
        alt="Vector"
      />
      <img
        className={`ArtworkToTranslateSelectionScreen/rightLine ${styles["rightLine"]}`}
        src="/images/artworkToTranslateSelectionScreen/Vector 61.png"
        alt="Vector"
      />
      <div
        className={`ArtworkToTranslateSelectionScreen/titleDiv ${styles["titleDiv"]}`}
      >
        <div
          className={`ArtworkToTranslateSelectionScreen/titleDivFilterDiv ${styles["titleDivFilterDiv"]}`}
        />
        <p
          className={`ArtworkToTranslateSelectionScreen/titleDivText ${styles["titleDivText"]}`}
        >
          {
            textData.page.screen.creationSection
              .artworkToTranslateSelectionSection
              .artworkToTranslateSelectionSection.totranslate
          }
        </p>
      </div>
      {error && (
        <p
          className={`ArtworkToTranslateSelectionScreen/errorMessage ${styles["errorMessage"]}`}
        >
          {error}
        </p>
      )}
      <div
        className={`ArtworkToTranslateSelectionScreen/artworkList ${styles["artworkList"]}`}
      >
        {data.map(
          ({ id, name, pictures, description, site }: artWork, index: any) => (
            <ArtworkCard
              key={index}
              id={id}
              title={name}
              description={description}
              imageSrc={pictures[0]?.hostingUrl}
              imageAlt={""}
              location={site.name}
            />
          )
        )}
      </div>
    </div>
  );
};

ArtworkToTranslateSelectionScreen.getLayout = function getLayout(
  page: React.ReactNode
) {
  return <Layout>{page}</Layout>;
};

export default ArtworkToTranslateSelectionScreen;
