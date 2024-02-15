const styles: { [key: string]: string } = {
  mainDiv: "w-[467px] flex flex-col items-start justify-center gap-[20px] text-left text-6xl text-base-black font-poppins",
  TitleDiv: "self-stretch relative font-semibold m-0",
  ContentDiv: "self-stretch flex flex-col items-start justify-center gap-[10px] text-inherit font-inherit",
  FirstLineDiv: "self-stretch flex flex-row flex-wrap items-center justify-start gap-[7px]",
  PushToDiv: "relative m-0 pl-5",
  AddImg: "relative w-[17px] h-[17px] overflow-hidden shrink-0",
  SelectDiv: "relative text-mini font-poppins",
  ChooseDiv: "self-stretch flex flex-row flex-wrap items-center justify-start flex-1 relative m-0 pl-5",
  ReadyDiv: "self-stretch flex flex-row flex-wrap items-center justify-start relative m-0 pl-5",
  TranslateButtonDiv: "rounded-3xs bg-gray-300 flex flex-row items-center justify-center py-2.5 px-5 gap-[10px] text-mini text-base-white",
  TranslateButtonImg: "relative w-[13.2px] h-[13.2px]",
  TranslateButtonText: "relative font-semibold",
};

const VideoCreationContainer: React.FC = () => {
  return (
    <div className={styles["mainDiv"]}>
      <div className={styles["TitleDiv"]}>
        <p>{`Pour créer une vidéo, `}</p>
        <p>rien de plus simple !</p>
      </div>
      <div className={styles["ContentDiv"]}>
        <div className={styles["FirstLineDiv"]}>
          <div className={styles["PushToDiv"]}>
            <ul>{`Appuie sur `}</ul>
          </div>
          <img className={styles["AddImg"]} alt="" src="/icon/full/add.png" />
          <div className={styles["SelectDiv"]}>
            puis sélectionne “Vidéo à créer”
          </div>
        </div>
        <div className={styles["ChooseDiv"]}>
          <ul>Choisi une oeuvre à traduire</ul>
        </div>
        <div className={styles["ReadyDiv"]}>
          <ul>Te voila prêt à débuter ta création !</ul>
        </div>
      </div>
      <div className={styles["TranslateButtonDiv"]}>
        <img
          className={styles["TranslateButtonImg"]}
          alt=""
          src="/icon/full/cross.png"
        />
        <div className={styles["TranslateButtonText"]}>Traduire une oeuvre</div>
      </div>
    </div>
  );
};

export default VideoCreationContainer;
