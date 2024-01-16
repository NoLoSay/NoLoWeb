import NoVideoPlaceholder from "../NoVideoPlaceholder/NoVideoPlaceholder";
import VideoInfo from "../VideoInfo/VideoInfo";
import TitleCard from "../TitleCard/TitleCard";
import { Paper } from "@mui/material";

function ArtCard({ infos }: any) {
  return (
    <div className="
      flex flex-col space-y-5 m-5 justify-center
      w-4/5 mx-auto
    ">
      <TitleCard title={infos?.title} imgPath="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fc/a9/b2/le-jardin-d-anne-de-bretagne.jpg?w=1200&h=-1&s=1" />
      <Paper className="flex p-5 flex-row justify-evenly space-x-5">
        <VideoInfo infos={infos} />
        {infos?.videoPath ?
          <img src={"/images/launch-video.png"} alt="Image" className='flex h-fit rounded-lg shadow-lg self-center' />
          :
          <NoVideoPlaceholder />
        }
      </Paper>
    </div>
  )
}

export default ArtCard