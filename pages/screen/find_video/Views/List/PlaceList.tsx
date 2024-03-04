import type { NextPage } from "next";
import PlaceTemplate from "./PlaceTemplate";

interface CardData {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
}

const PlaceList: NextPage = () => {
  const cardData: CardData[] = [
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Place",
      title2: "Ponpidou",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "f",
      title2: "f",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "f",
      title2: "f",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    {
      title1: "Château des Ducs",
      title2: "de Bretagne",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/images/castle/castle-template-list.png",
      videoCountPlaceholder: "22 Vidéos",
    },
    // Ajoutez d'autres objets pour chaque carte
  ];

  const styles: { [key: string]: string } = {
    container: "w-[1280px] flex flex-col items-start justify-start gap-[24px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins",
    TitleText: "m-0 relative text-inherit leading-[22px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[18px]",
    CardsDiv: "self-stretch flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]",
  };

  return (
    <div className={styles.container} >
      <h1 className={styles.TitleText}>
        Lieux
      </h1>
      <div className={styles.CardsDiv}>
        {cardData.map((card, index) => (
          <PlaceTemplate key={index} cardInfos={[card]} />
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
