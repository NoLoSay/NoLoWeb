import { Button, TextField } from "@mui/material";
import textData from "../../../../public/text.json";

const styles: { [key: string]: string } = {
  container_0: "font-sans text-2xl w-1/3 text-center text-black font-bold",
  container_1: "flex flex-row rounded-lg bg-white text-slate-600 space-x-5 p-2",
};

function NewsletterField() {
  return (
    <div
      className={`flex flex-col w-full bg-sky-50 bg-center bg-cover items-center py-10 space-y-5`}
    >
      <p className={`container_0 ${styles.container_0}`}>
        {textData.page.components.newsletter.subscribeNews}
      </p>
      <div className={`container_1 ${styles.container_1}`}>
        <TextField id="outlined-basic" label="Addresse mail" />
        <Button sx={{ backgroundColor: "#f5cb42", color: "#000" }}>
          {textData.page.components.newsletter.sub}
        </Button>
      </div>
    </div>
  );
}

export default NewsletterField;
