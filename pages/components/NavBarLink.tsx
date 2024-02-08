// NavbarLink.tsx
import { FC, MouseEvent, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarButtonProps {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  colorBase: string;
  colorClick: string;
  size: string;
  children: ReactNode;
}

const NavbarButton: FC<NavbarButtonProps> = ({
  onClick,
  colorBase,
  colorClick,
  size,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`cursor-pointer ${
        isClicked ? `text-${colorClick}` : `text-${colorBase}`
      } ${isHovered ? "underline" : "no-underline"} text-${size}`}
    >
      {children}
    </div>
  );
};

interface NavbarLinkProps {
  as: string;
  href: string;
  size: string;
  colorBase: string;
  colorClick: string;
  passHref?: boolean;
  shallow?: boolean;
  children: ReactNode;
  className: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({
  as,
  href,
  size,
  colorBase,
  colorClick,
  children,
}) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <Link href={href} as={as} passHref>
      <div>
        <NavbarButton
          onClick={handleClick}
          colorBase={colorBase}
          colorClick={colorClick}
          size={size}
        >
          {children}
        </NavbarButton>
      </div>
    </Link>
  );
};

export default NavbarLink;
