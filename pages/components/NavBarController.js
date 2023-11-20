// NavbarLink.js
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ as, href, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <Link as={as} href={href} passHref>
      <div onClick={handleClick}>{children}
      </div>
      <div   className="font-medium bg-transparent border-none outline-none"></div>
    </Link>
  );
};

export default NavbarLink;
