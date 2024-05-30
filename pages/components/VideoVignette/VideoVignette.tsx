import { Fragment } from "react";
import { Paper } from "@mui/material";
import { title } from "process";

type VideoVignetteProps = {
  title?: string;
  description?: string;
  certified?: number;
  img?: string;
};

const styles: { [key: string]: string } = {
  container_0: "m-5 flex flex-row items-center rounded-lg",
  container_1: "h-40 w-40 p-5 object-cover",
  container_2: "flex flex-col",
  container_3: "font-bold",
  container_4: "p-3",
  container_5: "rounded-md p-1 bg-green-100 text-green-600",
  container_6: "rounded-md p-1 bg-red-100 text-red-600"
};

function VideoVignette({ title, description, certified, img }: VideoVignetteProps) {
  return (
    <Paper className={`container_0 ${styles.container_0}`}>
      <img src={img} className={`container_1 ${styles.container_1}`} />
      <div className={`container_2 ${styles.container_2}`}>
        <p className={`container_3 ${styles.container_3}`}>{title}</p>
        <p className={`container_4 ${styles.container_4}`}>{description}</p>
        {
          (certified ?? 0) > 0 ?
            <p className={`container_5 ${styles.container_5}`}>{(certified ?? 0) + ' vidéos certifiées'}</p> :
            <p className={`container_6 ${styles.container_6}`}>Aucune vidéo certifiée</p>
        }
      </div>
    </Paper>
  );
};

export default VideoVignette;
