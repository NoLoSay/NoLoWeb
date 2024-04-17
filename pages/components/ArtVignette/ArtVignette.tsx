import { Fragment } from "react";
import { ButtonBase, Paper } from "@mui/material";
import { title } from "process";
import Link from "next/link";

type VignetteInfos = {
  title: string;
  description: string;
  img: string;
};

function ArtVignette({ title, description, img }: VignetteInfos) {
  return (
    <Paper className="m-5 flex flex-row items-center rounded-3xs">
      <img src={img} className="h-40 w-40 p-5 object-cover" />
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="p-3">{description}</p>
        <Link href="/videoAccess">
        <ButtonBase className="p-2 m-2 rounded-md shadow-md" sx={{backgroundColor: "#fdc80f"}}>Cliquer pour voir l'oeuvre</ButtonBase>
        </Link>
      </div>
    </Paper>
  );
};

export default ArtVignette;
