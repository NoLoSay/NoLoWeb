// NavbarLink.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarButton = ({ onClick, colorBase, colorClick, size, children }) => {
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
      style={{
        cursor: "pointer",
        color: isClicked ? colorClick : colorBase,
        textDecoration: isHovered ? "underline" : "none",
        fontSize: size,
      }}
    >
      {children}
    </div>
  );
};

const NavbarLink = ({ as, href, size, colorBase, colorClick, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
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
