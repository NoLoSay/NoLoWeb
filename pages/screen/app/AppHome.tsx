import type { NextPage } from "next";
import { useCallback } from "react";
import HearderApp from "./components/HearderApp";
import MenuApp from "./components/MenuApp";
import PlaceList from "./components/PlaceList";

const AppHome: NextPage = () => {
  const onVectorCClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='vectorB']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative rounded-3xs bg-base-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <HearderApp />
      <div className="self-stretch h-[1895px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative max-w-full mq1050:h-auto">
        <img
          className="w-[2569.8px] absolute my-0 mx-[!important] right-[-649.8px] bottom-[-3372.5px] h-[2735.2px] object-contain"
          alt=""
        />
        <main className="w-[2768px] flex flex-col items-start justify-start pt-[42px] px-[350px] pb-[1357px] box-border relative gap-[25px] max-w-[144%] shrink-0 lg:pt-[27px] lg:px-[175px] lg:pb-[882px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[87px] mq750:pr-[87px] mq750:pb-[372px] mq750:box-border mq1050:pt-5 mq1050:pb-[573px] mq1050:box-border">
          <MenuApp />
          <section className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0.5px] bottom-[-0.3px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/icon/MenuApp/vector-b.png"
              data-scroll-to="vectorB"
            />
            <img
              className="absolute top-[42px] left-[561px] rounded-3xs w-[93px] h-[93px] z-[1]"
              loading="eager"
              alt=""
              src="/icon/MenuApp/paint.png"
            />
            <img
              className="absolute top-[50.5px] left-[1133px] w-0.5 h-[76px] object-contain cursor-pointer z-[1]"
              alt=""
              src="/icon/MenuApp/vector-c.png"
              onClick={onVectorCClick}
            />
            <img
              className="absolute top-[197px] left-[349.5px] w-[265.5px] h-0.5 z-[1]"
              alt=""
              src="/icon/MenuApp/vector-a.png"
            />
          </section>
          <PlaceList />
        </main>
      </div>
    </div>
  );
};

export default AppHome;
