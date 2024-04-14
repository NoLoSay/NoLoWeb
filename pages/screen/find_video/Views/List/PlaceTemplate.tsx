import type { NextPage } from "next";
import { useRouter } from 'next/router';


interface CardInfo {
  title1: string;
  title2: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
}

interface PlaceTemplateProps {
  cardInfos: CardInfo[];
}

const styles: { [key: string]: string } = {
  container: "h-[200px] flex-1 flex flex-col items-start justify-start min-w-[281px] max-w-[375px] text-left text-mini text-darkslategray font-poppins mq450:h-auto",
  card: "rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border min-h-[203px]",
  cardContent: "flex flex-row items-center justify-start relative gap-[10px] mq450:flex-wrap",
  cardImage: "h-[115px] w-[113px] relative rounded-md object-cover mq450:flex-1",
  cardDetails: "flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[138px]",
  cardTitle: "self-stretch relative text-inherit leading-[19px] font-bold font-inherit",
  cardDescription: "self-stretch relative text-2xs tracking-[-0.08px] leading-[16px] text-base-black m-0",
  videoCountInput: "w-full [border:none] [outline:none] bg-lightgoldenrodyellow self-stretch h-6 rounded-8xs flex flex-row items-start justify-center py-1 px-2.5 box-border font-poppins font-semibold text-2xs text-limegreen min-w-[127px]",
};


const PlaceTemplate: NextPage<PlaceTemplateProps> = ({ cardInfos }) => {
  const router = useRouter();

  const handleCardClick = (cardInfo: CardInfo) => {
    router.push({
      pathname: '/screen/location/Location',
      query: { ...cardInfo },
    });
  };

  return (
    <div className={styles.container}>
        {cardInfos.map((card, index) => (
          <div key={index} className={styles.card}  onClick={() => handleCardClick(card)}>
            <div className={styles.cardContent}>
              <img className={styles.cardImage} loading="eager" alt="" src={card.imageSrc} />
              <div className={styles.cardDetails}>
                <div className={styles.cardTitle}>
                  <p>{card.title1}</p>
                  <p>{card.title2}</p>
                </div>
                <div className={styles.cardDescription}>{card.description}</div>
                <input className={styles.videoCountInput} placeholder={card.videoCountPlaceholder} type="text" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaceTemplate;
