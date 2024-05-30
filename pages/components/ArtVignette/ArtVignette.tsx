import { ButtonBase, Paper } from "@mui/material";

const styles: { [key: string]: string } = {
  container_0: "m-5 flex flex-row items-center rounded-1.5lg",
  container_1: "h-40 w-40 p-5 object-cover",
  container_2: "flex flex-col",
  container_3: "font-bold",
  container_4: "p-3",
  container_5: "p-2 m-2 rounded-md shadow-md"
};

type VignetteInfos = {
  title: string;
  description: string;
  img: string;
};

function ArtVignette({ title, description, img }: VignetteInfos) {
  return (
    <Paper className={`container_0 ${styles.container_0}`}>
      <img src={img} className={`container_1 ${styles.container_1}`} />
      <div className={`container_2 ${styles.container_2}`}>
        <p className={`container_3 ${styles.container_3}`}>{title}</p>
        <p className={`container_4 ${styles.container_4}`}>{description}</p>
        <ButtonBase className={`container_5 ${styles.container_5}`} sx={{backgroundColor: "#fdc80f"}}>Cliquer pour voir l'oeuvre</ButtonBase>
      </div>
    </Paper>
  );
};

export default ArtVignette;
