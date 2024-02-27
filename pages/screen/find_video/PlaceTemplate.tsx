import type { NextPage } from "next";

const PlaceTemplate: NextPage = () => {
  return (
    <div className="h-[425px] flex-1 flex flex-col items-start justify-start min-w-[281px] max-w-full text-left text-mini text-darkslategray font-poppins mq450:h-auto">
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] min-h-[445px] shrink-0">
        <div className="self-stretch rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border min-h-[203px]">
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px] mq450:flex-wrap">
            <img
              className="h-[115px] w-[113px] relative rounded-md object-cover mq450:flex-1"
              loading="eager"
              alt=""
              src="/images/castle/castle-template-list.png"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[138px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[7px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[19px] font-bold font-inherit">
                  <p className="m-0">{`Château des Ducs `}</p>
                  <p className="m-0">de Bretagne</p>
                </h3>
                <div className="self-stretch relative text-2xs tracking-[-0.08px] leading-[16px] text-base-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-lightgoldenrodyellow self-stretch h-6 rounded-8xs flex flex-row items-start justify-center py-1 px-2.5 box-border font-poppins font-semibold text-2xs text-limegreen min-w-[127px]"
                placeholder="22 Vidéos "
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border min-h-[200px]">
          <div className="self-stretch flex flex-row items-center justify-start relative gap-[10px] mq450:flex-wrap">
            <img
              className="h-[115px] w-[113px] relative rounded-md object-cover mq450:flex-1"
              alt=""
              src="/images/castle/castle-template-list.png"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[138px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[7px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[19px] font-bold font-inherit">
                  <p className="m-0">{`Château des Ducs `}</p>
                  <p className="m-0">de Bretagne</p>
                </h3>
                <div className="self-stretch relative text-2xs tracking-[-0.08px] leading-[16px] text-base-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-lightgoldenrodyellow self-stretch h-6 rounded-8xs flex flex-row items-start justify-center py-1 px-2.5 box-border font-poppins font-semibold text-2xs text-limegreen min-w-[127px]"
                placeholder="22 Vidéos "
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceTemplate;
