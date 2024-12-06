import React, { useEffect, useState } from "react";
import NoVideoPlaceholder from "@components/NoVideoPlaceholder/NoVideoPlaceholder";
import { ButtonBase } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  container_0:
    "\n      flex flex-col space-y-5 m-5 \n      w-4/5 mx-auto\n    mb-32",
  container_1:
    "flex p-5 flex-col space-x-5 w-full items-center justify-around border border-solid border-4 border-yellow-300",
  container_2: "flex flex-col",
  container_3: "flex flex-row ml-2 mr-7 p-2",
  container_4: "mt-36 ",
  container_5: "flex-shrink-0 pr-10",
  container_6: "w-1/3 mr-2 pl-4",
  container_7: "flex h-80 w-96 rounded-lg shadow-lg",
  container_8:
    "w-2/3 border border-2 border-dashed rounded-md border-solid border-yellow-300 ml-6",
  container_9: "p-5 m-4 flex flex-col justify-between h-full",
  container_10: "font-bold text-4xl",
  container_11: "flex items-center pt-5",
  container_12: "font-bold text-xl mr-2",
  container_13: "flex items-center pt-5",
  container_14: "font-bold text-xl mr-2",
  container_15: "flex items-center pt-5",
  container_16: "font-bold text-xl mr-2",
  container_17: "flex items-center pt-5",
  container_18: "font-bold text-xl mr-2",
  container_19: "flex flex-wrap justify-around items-center p-5",
  container_20:
    "flex m-4 border rounded-lg shadow-lg border-solid border-yellow-300",
  container_21: "w-1/3 mr-4",
  container_22: "flex flex-col m-2 p-2 w-40 h-80 border rounded-lg shadow-lg",
  container_23: "w-2/3",
  container_24: "p-5 m-4 h-full",
  container_25: "font-bold",
  container_26: "flex items-center pt-5",
  container_27: "font-bold ",
  container_28: "flex items-center pt-2",
  container_29: "font-bold ",
  container_30: "flex items-center pt-2",
  container_31: "font-bold ",
};

type VideoDetails = {
  hostingProviderVideoId: any
};

type Infos = {
  title: string;
  artImage?: string;
  description: string;
  pagePath: string;
  videos?: VideoDetails[];
  location: any;
  id: any;
};

function ArtCard({ title, artImage, description, videos, location, id }: Infos) {

  const navigate = useNavigate();

  return (
    <div className={`container_0 ${styles.container_0}`}>
      <Paper className={`container_1 ${styles.container_1}`}>
        <div className={`container_2 ${styles.container_2}`}>
          <div className={`container_3 ${styles.container_3}`}>
            <div
              className={`container_4 ${styles.container_4}`}
              onClick={() => navigate(-1)}
            >
              <ButtonBase className={`container_5 ${styles.container_5}`}>
                <ArrowBackIosNewRounded sx={{ color: "Grey-300" }} />
              </ButtonBase>
            </div>
            <div className={`container_6 ${styles.container_6}`}>
              <img
                src={artImage}
                alt="Image"
                className={`container_7 ${styles.container_7}`}
              />
            </div>
            <div className={`container_8 ${styles.container_8}`}>
              <div className={`container_9 ${styles.container_9}`}>
                <div>
                  <p className={`container_10 ${styles.container_10}`}>
                    {title}
                  </p>
                  <div className={`container_11 ${styles.container_11}`}>
                    <p className={`container_12 ${styles.container_12}`}>
                      {textData.page.components.artCard.description}
                    </p>
                    <p>{description}</p>
                  </div>
                  <div className={`container_17 ${styles.container_17}`}>
                    <p className={`container_18 ${styles.container_18}`}>
                      {textData.page.components.artCard.place}
                    </p>
                    <p>{location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NoVideoPlaceholder artworkId={id} />
          {videos && videos.length > 0 ? (
            <div>
              <div className={`container_19 ${styles.container_19}`}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className={`container_20 ${styles.container_20}`}
                  >
                    <div className={`container_21 ${styles.container_21}`}>
                      <div
                        key={index}
                        className={`container_22 ${styles.container_22}`}
                      >
                        <iframe
                          width="100%"
                          height="300"
                          src={`https://www.youtube.com/embed/${video.hostingProviderVideoId}`}
                          frameBorder="0"
                          allowFullScreen
                          style={{ aspectRatio: "9/16" }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Paper>
    </div>
  );
}

export default ArtCard;
