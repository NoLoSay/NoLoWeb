import { ButtonBase } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import Link from "next/link";
import { useNavigate } from 'react-router-dom';


type TitleProps = {
  title: string;
  description: string;
  website: string;
  location: string;
  imgPath?: string;
  pagePath: string;
};

function TitleCard({ title, description, website, location, imgPath, pagePath }: TitleProps) {

  const navigate = useNavigate();

  const handleGoToPlaceList = (pathname: string) => {
    navigate(pathname);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1')] bg-center bg-cover rounded-lg items-center p-10 shadow-lg">
        <div  onClick={() => handleGoToPlaceList(pagePath)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleGoToPlaceList(pagePath);
                    event.preventDefault();
                }
              }}>
          <ButtonBase className="flex-shrink-0 pr-10">
            <ArrowBackIosNewRounded sx={{ color: "#FFF" }} />
          </ButtonBase>
        </div>
        <h1 className="flex-grow flex justify-center pl-5  text-5xl text-white font-bold font-sans drop-shadow-xl">
          {title}
        </h1>
        <div className="pt-4  relative w-full inline-block text-base-black rounded-3xs bg-base-white bg-opacity-70 shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border">
          <p className="text-bold text-lg font-bold">Descrition:</p>
          <p>{description}</p><br/>
          <div className="text-lg pt-2 font-bold">Website: </div><Link href={website}>{website}</Link><br/>
          <p className="text-lg pt-2 font-bold">Location: </p><p> {location}</p><br/>
        </div>
      </div>
    </div>
  );
}

export default TitleCard;
