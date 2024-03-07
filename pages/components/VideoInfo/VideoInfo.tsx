import React from 'react';
import imageArt from '../../../stories/assets/oeuvre1.jpg';

const Spec = ({ specInfos }: any) => {
  return (
    <div className="flex flex-col space-y-5 font-bold">
      {Object.entries(specInfos).map(([key, value]: any) => (
        <div key={key} className="text-line">
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

const VideoInfo = ({ infos }: any) => {
  return (
    <div className="flex flex-col space-y-5 max-w-lg my-5">
      <div className="flex flex-row justify-between space-x-5">
        <img src={infos.artImage} alt="Image" className='flex h-60 rounded-lg shadow-lg'/>
        <Spec specInfos={infos?.spec} />
      </div>
      <div>{infos?.description}</div>
    </div>
  );
};

export default VideoInfo;
