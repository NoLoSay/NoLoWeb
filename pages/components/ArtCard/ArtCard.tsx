import React, { useEffect, useState } from 'react';
import NoVideoPlaceholder from "../NoVideoPlaceholder/NoVideoPlaceholder";

import { Paper } from "@mui/material";
import videoData from './videos.json';

type VideoDetails = {
  videoId: string;
  title: string;
  creator: string;
  duration: string;
  language: string;
};

type Infos = {
  title: string;
  artImage?: string;
  description: string;
  pagePath: string;
};

function ArtCard({ title, artImage, description, pagePath } : Infos) {
  const [videos, setVideos] = useState<VideoDetails[]>([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  return (
    <div className="
      flex flex-col space-y-5 m-5 
      w-4/5 mx-auto
    ">
      <Paper className="flex p-5 flex-col space-x-5 w-full items-center justify-around">
        <div className="flex flex-col">
          <div className='flex flex-row ml-2 mr-7 p-2'>
                <div className="w-1/3 mr-2 pl-4">
                  <img src={artImage} alt="Image" className='flex h-80 w-96 rounded-lg shadow-lg'/>
                </div>
                <div className="w-2/3 border border-2 border-dashed rounded-md border-solid border-yellow-300 ml-6">
                <div className="p-5 m-4 flex flex-col justify-between h-full">
                  <div>
                    <p className="font-bold text-4xl">{title}</p>
                    <div className='flex items-center pt-5'>
                      <p className='font-bold text-xl mr-2'>Description:</p>
                      <p>{description}</p>
                    </div>
                    <div className='flex items-center pt-5'>
                      <p className='font-bold text-xl mr-2'>Auteur:</p>
                      <p>{`Creator name`}</p>
                    </div>
                    <div className='flex items-center pt-5'>
                      <p className='font-bold text-xl mr-2'>Date de création:</p>
                      <p>{`1986`}</p>
                    </div>
                    <div className='flex items-center pt-5'>
                      <p className='font-bold text-xl mr-2'>Lieu:</p>
                      <p>{`Nantes`}</p>
                    </div>
                  </div>
            </div>
          </div>
          </div>
          {videos && videos.length > 0 ? (
            <div>
              <div className="flex flex-wrap justify-around items-center p-5">
                {videos.map((video, index) => (
                  <div key={index} className='flex m-4 border rounded-lg shadow-lg border-solid border-yellow-300 w-96'>
                    <div className="w-1/3 mr-4">
                    <div key={index} className='flex flex-col m-2 p-2 w-40 h-80 border rounded-lg shadow-lg'>
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      frameBorder="0"
                      allowFullScreen
                      style={{ aspectRatio: '9/16' }}
                    ></iframe>
                    </div>
                    </div>
                    <div className="w-2/3">
                      <div className="p-5 m-4 h-full">
                        <div>
                          <p className="font-bold">{video.title}</p>
                          <div className='flex items-center pt-5'>
                            <p className='font-bold '>Créateur:&nbsp;</p>
                            <p>{video.creator}</p>
                          </div>
                          <div className='flex items-center pt-2'>
                            <p className='font-bold '>Durée:&nbsp;</p>
                            <p>{video.duration}</p>
                          </div>
                          <div className='flex items-center pt-2'>
                            <p className='font-bold '>Langue:&nbsp;</p>
                            <p>{video.language}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <NoVideoPlaceholder />
          )}
        </div>
      </Paper>
    </div>
  );
}

export default ArtCard;
