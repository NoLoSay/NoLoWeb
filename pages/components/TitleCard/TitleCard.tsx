import { ButtonBase } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import textData from "../../../public/text.json";

const styles: { [key: string]: string } = {
  container_0: "relative w-full",
  container_1:
    "flex w-full bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1')] bg-center bg-cover rounded-lg items-center p-10 shadow-lg",
  container_2: "flex-shrink-0 pr-10",
  container_3:
    "flex-grow flex justify-center pl-5  text-5xl text-white font-bold font-sans drop-shadow-xl",
  container_4:
    "pt-4  relative w-full inline-block text-base-black rounded-1.5lg bg-base-white bg-opacity-70 shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border",
  container_5: "text-bold text-lg font-bold",
  container_6: "text-lg pt-2 font-bold",
  container_7: "text-lg pt-2 font-bold",
};

type TitleProps = {
  title: string;
  description: string;
  website: string;
  location: string;
  imgPath?: string;
  pagePath: string;
};

function TitleCard({
  title,
  description,
  website,
  location,
  pagePath,
}: TitleProps) {
  const navigate = useNavigate();

  const handleGoToPlaceList = (pathname: string) => {
    navigate(pathname);
  };

  return (
    <div className={`container_0 ${styles.container_0}`}>
      <div className={`container_1 ${styles.container_1}`}>
        <div
          onClick={() => handleGoToPlaceList(pagePath)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleGoToPlaceList(pagePath);
              event.preventDefault();
            }
          }}
        >
          <ButtonBase className={`container_2 ${styles.container_2}`}>
            <ArrowBackIosNewRounded sx={{ color: "#FFF" }} />
          </ButtonBase>
        </div>
        <h1 className={`container_3 ${styles.container_3}`}>{title}</h1>
        <div className={`container_4 ${styles.container_4}`}>
          <p className={`container_5 ${styles.container_5}`}>
            {textData.page.components.titleCard.description}
          </p>
          <p>{description}</p>
          <br />
          <div className={`container_6 ${styles.container_6}`}>
            {textData.page.components.titleCard.website}
          </div>
          <Link href={website}>{website}</Link>
          <br />
          <p className={`container_7 ${styles.container_7}`}>
            {textData.page.components.titleCard.location}
          </p>
          <p> {location}</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
