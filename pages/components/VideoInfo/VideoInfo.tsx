import React from 'react';
import imageArt from '../../../stories/assets/oeuvre1.jpg';

export type SpecInfos = {
  [key: string]: string;
};

type VideoProps = {
  artImage?: string;
  spec?: SpecInfos;
  description?: string;
};

const Spec = ({ specInfos }: { specInfos: SpecInfos }) => {
  return (
    <div className=" space-y-3 font-bold ml-10">
      {Object.entries(specInfos).map(([key, value]) => (
        <div key={key} className="text-line">
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

const VideoInfo = ({artImage, spec = {}, description} : VideoProps) => {
  return (
    <div className="space-y-5 max-w-lg my-5">
      <div className="flex items-center justify-between ">
        <img src={artImage} alt="Image" className='flex h-80 w-96 rounded-lg shadow-lg'/>
        <Spec specInfos={spec} />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default VideoInfo;
