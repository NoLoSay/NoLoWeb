import { Paper } from "@mui/material";

type CardProps = {
  title: string;
  text: string;
  imgPath?: string;
};

function GenericCard({ title, text, imgPath }: CardProps) {
  return (
    <Paper className={`flex flex-col items-center p-3 space-y-5 m-5`}>
      <h1 className="font-sans text-6xl">{title}</h1>
      <div className="flex flex-row space-x-5 items-center">
        <p>{text}</p>
        {imgPath ? <img src={imgPath} className="w-12 h-12"/> : false}
      </div>
    </Paper>
  );
}

export default GenericCard;
