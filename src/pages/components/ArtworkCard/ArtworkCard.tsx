import textData from "@public/text.json";
import { useNavigate } from "node_modules/react-router-dom/dist/index";

const styles: { [key: string]: string } = {
  mainDiv:
    "shadow-cardShadow relative rounded-2.5xl p-5 border-solid border-2 border-base-white\
    hover:border-yellow-300 content-center flex " + "sm:px-2",

  contentDiv:
    "grid grid-rows-3 grid-flow-col gap-5 justify-evenly self-center " +
    "sm:gap-2",

  contentDivImageDiv: "content-center row-span-3 flex",

  contentDivImage: "w-full self-center rounded-2.5xl flex flex-1",

  contentDivTextDiv: "flex flex-col w-1/2 self-center gap-2 " + "sm:w-3/4",

  contentDivTextDivTitle:
    "col-span-2 text-gray-300 font-poppins font-bold text-base text-center " +
    "sm:text-sm",

  contentDivTextDivText:
    "col-span-2 text-black font-poppins font-normal text-xs",

  contentDivTextDivButton:
    "row-span-1 col-span-2 rounded-md px-1 py-2 gap-2 bg-yellow-300 hover:cursor-pointer",
};

interface ArtworkCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  location: string;
}

const ArtworkCard = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  location,
}: ArtworkCardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={`ArtworkCard/mainDiv ${styles["mainDiv"]}`}>
      <div className={`ArtworkCard/contentDiv ${styles["contentDiv"]}`}>
        <div
          className={`ArtworkCard/contentDivImageDiv ${styles["contentDivImageDiv"]}`}
        >
          <img
            className={`ArtworkCard/contentDivImage ${styles["contentDivImage"]}`}
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        <p
          className={`ArtworkCard/contentDivTextDivTitle ${styles["contentDivTextDivTitle"]}`}
        >
          {title}
        </p>
        <p
          className={`ArtworkCard/contentDivTextDivText ${styles["contentDivTextDivText"]}`}
        >
          {description}
        </p>
        <button
          className={`ArtworkCard/contentDivTextDivButton ${styles["contentDivTextDivButton"]}`}
          onClick={() => {
            navigate("/videoAccess", {
              state: {
                id: id,
                name: title,
                description: description,
                imageSrc: imageSrc,
                location: location,
              },
            });
          }}
        >
          {textData.page.components.artworkcard.clickToSee}
        </button>
      </div>
    </div>
  );
};

export default ArtworkCard;
