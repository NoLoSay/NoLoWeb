const styles: { [key: string]: string } = {
  /* original */
  // mainDiv: "w-[467px] flex flex-col items-start justify-center gap-[20px] text-left text-6xl text-base-black font-poppins",
  // title: "self-stretch relative font-semibold m-0",
  // contentDiv:
  //   "self-stretch flex flex-col items-start justify-center gap-[10px] text-inherit font-inherit",
  // firstLineDiv:
  //   "self-stretch flex flex-row flex-wrap items-center justify-start gap-[7px]",
  // pushToDiv: "relative m-0 pl-5",
  // addImg: "relative w-[17px] h-[17px] overflow-hidden shrink-0",
  // selectDiv: "relative text-mini font-poppins",
  // secondLineDiv:
  //   "self-stretch flex flex-row flex-wrap items-center justify-start flex-1 relative m-0 pl-5",
  // readyDiv:
  //   "self-stretch flex flex-row flex-wrap items-center justify-start relative m-0 pl-5",
  // translateButtonDiv:
  //   "rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-2.5 px-5 gap-[10px] text-mini text-base-white",
  // translateButtonImg: "relative w-[13.2px] h-[13.2px]",
  // translateButtonText: "relative font-semibold",

  /* rework */
  mainDiv:
    "w-full flex flex-col items-start justify-center text-left text-[1.5rem] text-black font-poppins gap-2",

  title: "relative text-[2rem] font-semibold " +
    "md:text-[1.5rem] " +
    "sm:text-[0.75rem]",

  contentDiv: "flex flex-col pl-10 gap-1 text-[1.5rem] " +
    "md:text-[1rem] md:pl-7 " +
    "sm:text-[0.5rem] sm:pl-4",

  firstLineDiv: "flex flex-row flex-wrap items-center gap-1",

  addImg: "relative px-1",

  translateButton:
    "rounded-3xs bg-gray-300 py-2.5 px-5 font-bold text-base-white",
};

const VideoCreationContainer: React.FC = () => {
  return (
    <div className={`VideoCreationContainer/mainDiv ${styles["mainDiv"]}`}>
      <p
        className={`VideoCreationContainer/title ${styles["title"]}`}
      >
        Pour créer une vidéo, rien de plus simple !
      </p>
      <div
        className={`VideoCreationContainer/contentDiv ${styles["contentDiv"]}`}
      >
        <ol type="1">
          <div
            className={`VideoCreationContainer/firstLineDiv ${styles["firstLineDiv"]}`}
          >
            <li>Appuie sur</li>
            <img
              className={`VideoCreationContainer/addImg ${styles["addImg"]}`}
              alt=""
              src="/icon/full/add.png"
            />
            <p>puis sélectionne “Vidéo à créer”</p>
          </div>
          <li>Choisi une oeuvre à traduire</li>
          <li>Te voila prêt à débuter ta création !</li>
        </ol>
      </div>
      <button
        className={`VideoCreationContainer/translateButton ${styles["translateButton"]}`}
      >
        + Traduire une oeuvre
      </button>
    </div>
  );
};

export default VideoCreationContainer;
