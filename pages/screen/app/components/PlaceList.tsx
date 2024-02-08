import type { NextPage } from "next";
import PlaceTemplate from "./PlaceTemplate";

const PlaceList: NextPage = () => {
  return (
    <div className="w-[1280px] flex flex-col items-start justify-start gap-[24px] min-h-[493px] max-w-full text-left text-3xl text-base-black font-poppins">
      <h1 className="m-0 relative text-inherit leading-[22px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[18px]">
        Lieux
      </h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[77px] max-w-full z-[1] text-mini text-darkslategray mq450:gap-[19px] mq750:gap-[38px]">
        <PlaceTemplate />
        <PlaceTemplate />
        <PlaceTemplate />
      </div>
    </div>
  );
};

export default PlaceList;
