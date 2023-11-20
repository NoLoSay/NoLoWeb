const VideoCreationContainer = () => {
  return (
    <div className="w-[467px] flex flex-col items-start justify-center gap-[20px] text-left text-6xl text-base-black font-poppins">
      <div className="self-stretch relative font-semibold">
        <p className="m-0">{`Pour créer une vidéo, `}</p>
        <p className="m-0">rien de plus simple !</p>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-inherit font-inherit">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[7px]">
          <div className="relative">
            <ul className="m-0 pl-5">{`Appuie sur `}</ul>
          </div>
          <img
            className="relative w-[17px] h-[17px] overflow-hidden shrink-0"
            alt=""
            src="/icon/full/add.png"
          />
          <div className="relative text-mini font-poppins">
            puis sélectionne “Vidéo à créer”
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="flex-1 relative">
            <ul className="m-0 pl-5">Choisi une oeuvre à traduire</ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
          <div className="relative">
            <ul className="m-0 pl-5">Te voila prêt à débuter ta création !</ul>
          </div>
        </div>
      </div>
      <div className="rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-2.5 px-5 gap-[10px] text-mini text-base-white">
        <img
          className="relative w-[13.2px] h-[13.2px]"
          alt=""
          src="/icon/full/cross.png"
        />
        <div className="relative font-semibold">Traduire une oeuvre</div>
      </div>
    </div>
  );
};

export default VideoCreationContainer;
