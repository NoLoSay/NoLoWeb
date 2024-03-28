import { ButtonBase } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";

type TitleProps = {
  title: string;
  imgPath?: string;
  pagePath: string;
};

function TitleCard({ title, imgPath, pagePath }: TitleProps) {
  return (
    <div className={`flex w-full bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1')] bg-center bg-cover rounded-lg items-center p-3 shadow-lg`}>
      <Link href={pagePath}>
      <ButtonBase className="flex-shrink-0">
        <ArrowBackIosNewRounded sx={{ color: "#FFF" }} />
      </ButtonBase>
      </Link>
      <h1 className="
        flex-grow flex justify-center
        text-41xl text-white font-bold font-sans drop-shadow-xl
      ">{title}</h1>
    </div>
  );
}

export default TitleCard;
