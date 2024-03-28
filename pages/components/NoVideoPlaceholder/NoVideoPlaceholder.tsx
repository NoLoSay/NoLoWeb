import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { ButtonBase } from '@mui/material';

const NoVideoPlaceholder = () => {
  return (
    <div className="flex flex-row text-black max-w-lg">
      <div className='flex flex-col space-y-5 justify-center'>
        <div>
          <p className='font-sans text-5xl'>Créer une vidéo</p>
          <p>Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
        </div>
        <div>
          <p className='font-sans text-5xl'>Demander une traduction</p>
          <p>Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
        </div>
      </div>
      <div className='flex flex-col justify-evenly px-10'>
        <ButtonBase disableRipple><AddBoxOutlinedIcon sx={{ fontSize: 60, color: "#f5d442" }} /></ButtonBase>
        <ButtonBase disableRipple><StarBorderRoundedIcon sx={{ fontSize: 60, color: "#f5d442" }} /></ButtonBase>
      </div>
    </div>
  );
};

export default NoVideoPlaceholder