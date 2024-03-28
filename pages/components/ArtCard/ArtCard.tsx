import NoVideoPlaceholder from "../NoVideoPlaceholder/NoVideoPlaceholder";
import VideoInfo from "../VideoInfo/VideoInfo";
import TitleCard from "../TitleCard/TitleCard";
import { Paper } from "@mui/material";
import { Props } from "recharts/types/container/Surface";

type Infos = {
  title: string;
  artImage?: string;
  videoPath?: string;
  spec?: any;
  description?: string;
};

function ArtCard({ title, videoPath, artImage, description, spec } : Infos) {
  return (
    <div className="
      flex flex-col space-y-5 m-5 
      w-4/5 mx-auto
    ">
      <TitleCard title={title} imgPath="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1" pagePath="/location"/>
      <Paper className="flex p-5 flex-col space-x-5 w-full items-center justify-around">
        <div className=" flex flex-row">
          <VideoInfo artImage={artImage} description={description} spec={spec}/>
          {videoPath ?
            <img src={"/images/launch-video.png"} alt="Image" className='flex h-fit rounded-lg shadow-lg self-center object-cover' />
            :
            <NoVideoPlaceholder />
          }
        </div>
        {videoPath ?
          <div>
            <p className="font-bold">Découvrez d'autres vidéos de l'oeuvre :</p>
            <div className="flex flex-row justify-around items-center p-5">
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
              <img src={"/images/launch-video.png"} alt="Image" className='flex rounded-lg shadow-lg self-center object-cover h-20 w-20' />
            </div>
          </div>
          :
          false
        }
      </Paper>
    </div>
  )
}

export default ArtCard