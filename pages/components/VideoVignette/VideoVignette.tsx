import { Fragment } from "react";
import { Paper } from "@mui/material";
import { title } from "process";

function VideoVignette({ title, description, certified, img }: any) {
  return (
    <Paper className="m-5 flex flex-row items-center rounded-lg">
      <img src={img} className="h-40 w-40 p-5 object-cover" />
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="p-3">{description}</p>
        {
          certified > 0 ?
            <p className="rounded-md p-1 bg-green-100 text-green-600">{certified + ' vidéos certifiées'}</p> :
            <p className="rounded-md p-1 bg-red-100 text-red-600">Aucune vidéo certifiée</p>
        }
      </div>
    </Paper>
  );
};

export default VideoVignette;
