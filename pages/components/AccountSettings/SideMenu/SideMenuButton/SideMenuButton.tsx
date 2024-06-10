import React from 'react';

interface SideMenuButtonProps {
  title: string;
  color?: string;
  onClick?: () => void;
}

const SideMenuButton = ({title ,onClick, color}: SideMenuButtonProps) => {
  return (
    <button
      className={`items-center w-full text-md hover:bg-slate-100 bg-opacity-80 py-2`}
      onClick={onClick}
      color={color}
    >
      <p>{title}</p>
    </button>
  );
};

export default SideMenuButton