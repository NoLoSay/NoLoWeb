import type { NextPage } from "next";
import NavbarLink from "../../../components/NavBarLink";

const HearderApp: NextPage = () => {
  return (
    <header className="self-stretch bg-base-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.1)] flex flex-row items-center justify-between pt-[39px] pb-[38px] pr-2 pl-20 box-border gap-[20px] max-w-full text-left text-sm text-base-black font-poppins mq1050:pl-10 mq1050:box-border">
      <div className="flex flex-row items-end justify-start gap-[10px]">
        <img className="h-[29.1px] w-8 relative" alt="" src="/images/logo/nologo.png"/>
        <NavbarLink
            as="/home"
            href="/screen/home/Home"
            size=""
            colorBase=""
            colorClick=""
            className=""
          >
          <img
            className="h-[26px] w-[123.6px] relative"
            loading="eager"
            alt=""
            src="/images/logo/nolosay-black.png"
          />
        </NavbarLink>
      </div>
      <div className="h-[45px] w-[639px] flex flex-row items-center justify-start gap-[20px] max-w-full">
        
        <div className="flex-1 rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] box-border flex flex-row items-center justify-start py-[9px] pr-4 pl-[11px] gap-[57px] max-w-full border-[1px] border-solid border-gray-100 mq450:gap-[28px]">
          <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[21px] max-w-full">
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <div className="relative tracking-[-0.41px] leading-[22px] font-medium">
                Nantes
              </div>
              <img
                className="h-[15px] w-[15px] relative rounded-8xs overflow-hidden shrink-0"
                alt=""
                src="/icon/MenuApp/CityIcon.png"
              />
            </div>
            <div className="flex-1 relative tracking-[-0.41px] leading-[22px] font-medium text-gray-100 whitespace-nowrap">
              Recherche par thème, note...
            </div>
          </div>
          <img className="h-[13.9px] w-3 relative" alt="" src="/icon/MenuApp/search.png" />
        </div>

        <button className="cursor-pointer pt-1.5 px-2.5 pb-[7px] bg-base-white rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-yellow-300 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod">
          <div className="relative text-2xs tracking-[-0.08px] leading-[16px] font-poppins text-yellow-300 text-left">
            Voir la carte
          </div>
          <img
            className="h-[31px] w-[31px] relative overflow-hidden shrink-0"
            alt=""
            src="/icon/MenuApp/MapIcon.png"
          />
        </button>
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-base text-gray font-dm-sans">
        <img
          className="h-[42px] w-[27px] relative overflow-hidden shrink-0"
          alt=""
          src="/icon/MenuApp/PNJ.png"
        />
        <h3 className="m-0 relative text-inherit leading-[19px] font-bold font-inherit whitespace-nowrap">{`Jean-François Mouillé `}</h3>
      </div>
    </header>
  );
};

export default HearderApp;
