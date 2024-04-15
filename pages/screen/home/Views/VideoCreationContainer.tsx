const styles: { [key: string]: string } = {
  mainDiv:
    "w-full flex flex-col items-start justify-center text-left text-2xl text-black font-poppins gap-2",

  title: "relative text-[2rem] font-semibold contents",
  mdTitle: "md:text-2xl",
  smTitle: "sm:text-xs",

  contentDiv: "flex flex-col pl-10 gap-1 text-2xl",
  lgContentDiv: "lg:text-xl lg:pl-8",
  mdContentDiv: "md:text-base md:pl-7",
  smContentDiv: "sm:text-xs sm:pl-4",

  firstLineDiv: "flex flex-row flex-wrap items-center gap-1",

  addImg: "relative px-1",

  translateButton:
    "rounded-1.5lg bg-gray-300 py-2.5 px-5 font-bold text-base-white",
};

const VideoCreationContainer: React.FC = () => {
  return (
    <div className={`VideoCreationContainer/mainDiv ${styles["mainDiv"]}`}>
      <p
        className={`VideoCreationContainer/title ${styles["title"]} ${styles["mdTitle"]} ${styles["smTitle"]}`}
      >
        Pour créer une vidéo, rien de plus simple !
      </p>
      <div
        className={`VideoCreationContainer/contentDiv ${styles["contentDiv"]} ${styles["lgContentDiv"]} ${styles["mdContentDiv"]} ${styles["smContentDiv"]}`}
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
