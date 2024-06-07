import { ButtonBase } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';

type CategoryProps = {
  text?: string;
  description?: string;
  altColor?: boolean;
  onClick?: () => void;
};

const CategoryButton = ({ text, description, altColor, onClick }: CategoryProps) => {
  return (

    <ButtonBase disableRipple className="w-full h-full" onClick={onClick}>
      <div className={`flex p-3 rounded-lg shadow-lg bg-white items-center justify-between space-x-5 stroke-black w-full h-full ${altColor ? "bg-yellow-100" : "bg-white"}`}>
        <PersonIcon />
        <div>
          <p className="font-bold">{text}</p>
          <p>{description}</p>
        </div>
        <ChevronRightIcon className="flex place-items-end"/>
      </div>
    </ButtonBase>
  )
}

export default CategoryButton;