import { ButtonBase } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SideMenuButtonProps {
  title: string;
  path: string;
  onClick?: () => void;
}

const SideMenuButton = ({title, path ,onClick}: SideMenuButtonProps) => {
  return (
    <button
      className={`items-center w-full text-md hover:bg-slate-100 bg-opacity-80 py-2`}
      onClick={onClick}
    >
      <p>{title}</p>
    </button>
  );
};

export default SideMenuButton