import { ButtonBase } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

type CategoryProps = {
  text?: string;
  description?: string;
  altColor?: boolean;
  onClick?: () => void;
};

const CategoryButton = ({
                          text,
                          description,
                          altColor,
                          onClick,
                        }: CategoryProps) => {
  return (
    <ButtonBase
      disableRipple
      onClick={onClick}
    >
      <div
        className={`text-black flex p-3 rounded-lg shadow-lg bg-white items-center justify-between m-3 ml-0 mr-5 space-x-5 stroke-black w-full h-10 ${
          altColor ? "bg-yellow-100" : "bg-white"
        }`}
      >
        <div>
          <p>{text}</p>
          <p>{description}</p>
        </div>
        <ChevronRightIcon/>
      </div>
    </ButtonBase>
  );
};

export default CategoryButton;
