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
    <div className="flex flex-col space-y-5 font-bold">
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
    <div className="flex flex-col space-y-5 max-w-lg my-5">
      <div className="flex flex-row justify-between space-x-5">
        <img src={artImage} alt="Image" className='flex h-60 rounded-lg shadow-lg'/>
        <Spec specInfos={spec} />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default VideoInfo;
