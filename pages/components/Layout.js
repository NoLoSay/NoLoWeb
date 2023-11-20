// components/Layout.js
import NavBar from "./NavBarScreen";
import FooterContainer from "./FooterContainer";

const Layout = ({ children }) => {
  return (
    <div className="relative rounded-3xs bg-base-white w-full h-[2041px] overflow-hidden text-left text-mini text-base-white font-poppins">
      <NavBar />
      {children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
