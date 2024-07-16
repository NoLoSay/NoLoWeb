import React from "react";
import { NextPage } from "next";
import { useNavigate } from "react-router-dom";

interface CardInfo {
  title: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website?: string;
  city?: string;
  location?: string;
  pathname: string;
  exhibition: any[];
}

interface CardTemplateProps {
  cardInfo: CardInfo;
}

const styles: { [key: string]: string } = {
  container:
    "hover:cursor-pointer h-[200px] flex flex-col items-start justify-start min-w-[281px] max-w-[395px] text-left text-mini text-darkslategray font-poppins",
  card: "bg-white rounded-xl flex flex-col items-start justify-center min-h-[225px] border-4 border-transparent border-solid hover:border-yellow-300",
  cardContent:
    "bg-white  shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] min-h-[218px] rounded-1.5lg flex flex-row items-center gap-[10px]",
  cardImage:
    "h-[218px] w-[129px] rounded-l-lg object-cover mq450:flex-1",
  cardDetails:
    "flex-1 flex flex-col items-start justify-center py-4 pl-2  gap-[13px] min-w-[138px] p-[10px]",
  cardTitle:
    "self-stretch relative text-inherit leading-[19px] font-bold font-inherit text-lg",
  cardDescription:
    "self-stretch relative tracking-[-0.08px] leading-[16px] text-base-black m-0 text-sm",
  videoCountInput:
    "w-full [border:none] [outline:none] bg-lightyellow self-stretch h-6 rounded-md flex flex-row items-start justify-center py-1 px-2.5 box-border border-hidden font-poppins font-semibold text-2xs text-base-black min-w-[127px]",
};

const CardTemplate: NextPage<CardTemplateProps> = ({ cardInfo }) => {
  const navigate = useNavigate();

  const splitTitle = (title: string): [string, string] => {
    const firstPart = title
      .split(" ")
      .slice(0, Math.ceil(title.split(" ").length / 2))
      .join(" ");
    const secondPart = title
      .split(" ")
      .slice(Math.ceil(title.split(" ").length / 2))
      .join(" ");
    return [firstPart, secondPart];
  };

  const [title1, title2] = splitTitle(cardInfo.title);

  const handleClick = () => {
    navigate(cardInfo.pathname, {
      state: {
        name: title1 + " " + title2,
        description: cardInfo.description,
        imageSrc: cardInfo.imageSrc,
        videoCountPlaceholder: cardInfo.videoCountPlaceholder,
        ...(cardInfo.website && { website: cardInfo.website }),
        ...(cardInfo.city && { city: cardInfo.city }),
        ...(cardInfo.location && { location: cardInfo.location }),
      },
    });
  };

  return (
    <div
      className={`container ${styles.container}`}
      onClick={() => handleClick()}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleClick();
          event.preventDefault();
        }
      }}
    >
      <div className={`card ${styles.card}`}>
        <div className={`cardContent ${styles.cardContent}`}>
          <img
            className={`cardImage ${styles.cardImage}`}
            loading="eager"
            alt=""
            src={cardInfo.imageSrc}
          />
          <div className={`cardDetails ${styles.cardDetails}`}>
            <div className={`cardTitle ${styles.cardTitle}`}>
              <p>{title1}</p>
              <p>{title2}</p>
            </div>
            <div className={`cardDescription ${styles.cardDescription}`}>
              {cardInfo.description}
            </div>
            <input
              className={`videoCountInput ${styles.videoCountInput}`}
              placeholder={cardInfo.videoCountPlaceholder}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
