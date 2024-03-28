import { Button, FormControl, Input, InputLabel, TextField } from "@mui/material";

function NewsletterField() {
  return (
    <div className={`flex flex-col w-full bg-sky-50 bg-center bg-cover items-center py-10 space-y-5`}>
      <p className="font-sans text-5xl w-1/3 text-center text-black font-bold">S'insicrire à la newslettre et découvrir les dernières nouveautés</p>
      <div className="flex flex-row rounded-lg bg-white text-slate-600 space-x-5 p-2">
        <TextField id="outlined-basic" label="Addresse mail" />
        <Button sx={{backgroundColor: "#f5cb42", color: "#000"}}>S'abonner</Button>
      </div>
    </div>
  );
}

export default NewsletterField;
