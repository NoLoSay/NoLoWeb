import React from "react";
import Layout from "../../../components/Layout/Layout";
import ArtworkCard from "../../../components/ArtworkCard/ArtworkCard";
import textData from "../../../../public/text.json";


type artWork = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

const artworkList: artWork[] = [
  {
    title: "La tapisserie de Charles X",
    imageSrc: "/images/artworkToTranslateSelectionScreen/image 17.png",
    imageAlt: "Castle image",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "La tapisserie de Charles X",
    imageSrc: "/images/artworkToTranslateSelectionScreen/image 17.png",
    imageAlt: "Castle image",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "La tapisserie de Charles X",
    imageSrc: "/images/artworkToTranslateSelectionScreen/image 17.png",
    imageAlt: "Castle image",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Château sur bois",
    imageSrc: "/images/artworkToTranslateSelectionScreen/Frame 23395.png",
    imageAlt: "Rdv de l'Erdre",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Château sur bois",
    imageSrc: "/images/artworkToTranslateSelectionScreen/Frame 23395.png",
    imageAlt: "Rdv de l'Erdre",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Château sur bois",
    imageSrc: "/images/artworkToTranslateSelectionScreen/Frame 23395.png",
    imageAlt: "Rdv de l'Erdre",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const styles: { [key: string]: string } = {
  mainDiv:
    "bg-white flex flex-col gap-10 items-center justify-center mt-8 relative w-full",
    smMainDiv: "sm:gap-0",
    mdMainDiv: "md:gap-5",

  leftLine: "absolute flex flex-start self-start",
  smLeftLine: "sm:hidden",

  rightLine: "absolute flex flex-end self-end",
  smRightLine: "sm:hidden",
  mdRightLine: "md:hidden",

  titleDiv: `bg-miroir-d-eau-château-nantes_photo bg-cover bg-center relative rounded-2.5xl w-2/3`,

  titleDivFilterDiv:
    "absolute bg-gray-300 bg-opacity-65 h-full rounded-2.5xl w-full",

  titleDivText:
    "font-black font-helvetica py-5 relative text-center text-white text-6xl",
  smTitleDivText: "sm:text-xl",
  mdTitleDivText: "md:text-4xl",

  artworkList: "gap-x-5 gap-y-10 grid grid-cols-3 my-20 w-5/6",
  smArtworkList: "sm:grid-none sm:flex sm:flex-col sm:w-[92%]",
  mdArtworkList: "md:grid-cols-2",
  lgArtworkList: "lg:grid-cols-2",
};

const ArtworkToTranslateSelectionScreen = (): JSX.Element => {
  return (
    <div
      className={`ArtworkToTranslateSelectionScreen/mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]} ${styles["mdMainDiv"]}`}
    >
      <img
        className={`ArtworkToTranslateSelectionScreen/leftLine ${styles["leftLine"]} ${styles["smLeftLine"]}`}
        src="/images/artworkToTranslateSelectionScreen/Vector 60.png"
        alt="Vector"
      />
      <img
        className={`ArtworkToTranslateSelectionScreen/rightLine ${styles["rightLine"]} ${styles["smRightLine"]} ${styles["mdRightLine"]}`}
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
          className={`ArtworkToTranslateSelectionScreen/titleDivText ${styles["titleDivText"]} ${styles["smTitleDivText"]} ${styles["mdTitleDivText"]}`}
        >
          {textData.page.screen.creationSection.artworkToTranslateSelectionSection.artworkToTranslateSelectionSection.totranslate}
        </p>
      </div>
      <div className={`ArtworkToTranslateSelectionScreen/artworkList ${styles["artworkList"]} ${styles["smArtworkList"]} ${styles["mdArtworkList"]} ${styles["lgArtworkList"]}`}>
        {artworkList.map(
          ({ title, imageSrc, imageAlt, description }, index) => (
            <ArtworkCard
              key={index}
              title={title}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              description={description}
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
