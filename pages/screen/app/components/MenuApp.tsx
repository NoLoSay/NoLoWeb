import type { NextPage } from "next";

const MenuApp: NextPage = () => {
  return (
    <div className="w-[1423px] flex flex-row items-start justify-center max-w-full text-center text-xs text-base-white font-poppins">
      <div className="w-[715px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center">
        <button className="cursor-pointer [border:none] p-2 bg-base-white h-[93px] w-[93px] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
          <img className="h-[47px] w-9 relative" alt="" src="/icon/MenuApp/vector-1.png" />
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-base-white h-[93px] w-[93px] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
          <img className="h-12 w-[45px] relative" alt="" src="/icon/MenuApp/vector-2.png" />
        </button>
        <div className="h-[93px] w-[143px] flex flex-col items-start justify-start">
          <button className="cursor-pointer [border:none] p-2 bg-base-white w-[93px] flex-1 rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
            <img
              className="h-[51.9px] w-[25.2px] relative object-contain"
              alt=""
              src="/icon/MenuApp/vector-3.png"
            />
          </button>
        </div>
        <div className="h-[93px] w-[93px] rounded-3xs bg-base-white flex flex-col items-end justify-start py-1 px-1.5 box-border z-[1]">
          <div className="w-6 flex flex-row items-start justify-start relative">
            <img
              className="h-12 w-[49px] absolute my-0 mx-[!important] bottom-[-43px] left-[-41px]"
              alt=""
              src="/icon/MenuApp/vector-4.png"
            />
            <div className="flex-1 rounded-21xl bg-yellow-300 flex flex-row items-center justify-center py-[3px] px-0 z-[1]">
              <div className="flex-1 relative font-semibold">6</div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-2 bg-base-white h-[93px] w-[93px] rounded-3xs flex flex-row items-center justify-center box-border z-[1]">
          <img className="h-12 w-[45px] relative" alt="" src="/icon/MenuApp/vector-5.png" />
        </button>
      </div>
    </div>
  );
};

export default MenuApp;
