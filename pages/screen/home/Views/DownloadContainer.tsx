const styles: { [key: string]: string } = {
  mainDiv: "relative w-4/5 text-left text-base-white font-poppins items-center",

  backDiv: "relative w-full brightness-50",

  castleImg: "rounded-[4rem] w-full flex object-contain",
  mdCastleImg: "md:rounded-3xl",
  smCastleImg: "sm:rounded-2xl",

  contentDiv:
    "absolute w-[50%] top-[30%] left-[30%] flex flex-col items-start justify-start gap-y-6",
  mdContentDiv: "md:gap-y-0",
  smContentDiv: "sm:gap-y-0",

  textDiv: "relative w-full inline-block",

  titleText: "font-black text-[3.5rem]",
  mdTitleText: "md:text-[3rem]",
  smTitleText: "sm:text-[2rem]",

  nolosayText: "text-[2.25rem] font-medium",
  mdNolosayText: "md:text-[1.25rem]",
  smNolosayText: "sm:text-[0.75rem]",

  iconDiv: "w-full flex flex-row items-center justify-start gap-3",

  iconImg: "relative w-[25%]",

  phoneImg: "absolute h-full top-[0%] left-[-0.5%] brightness-90",

  lineImg: "absolute top-[20%] left-[0%] w-full ",
};

const DownloadContainer: React.FC = () => {
  return (
    <div className={`DownloadContainer/mainDiv ${styles["mainDiv"]}`}>
      <div className={`DownloadContainer/backDiv ${styles["backDiv"]}`}>
        <img
          className={`DownloadContainer/castleImg ${styles["castleImg"]} ${styles["mdCastleImg"]} ${styles["smCastleImg"]}`}
          alt=""
          src="/images/castle/chateau-large.png"
        />
      </div>
      <img
        className={`DownloadContainer/lineImg ${styles["lineImg"]}`}
        alt=""
        src="/images/line.png"
      />
      <div
        className={`DownloadContainer/contentDiv ${styles["contentDiv"]} ${styles["mdContentDiv"]} ${styles["smContentDiv"]}`}
      >
        <div className={`DownloadContainer/textDiv ${styles["textDiv"]}`}>
          <p
            className={`DownloadContainer/titleText ${styles["titleText"]} ${styles["mdTitleText"]} ${styles["smTitleText"]}`}
          >
            Nolosay,
          </p>
          <p
            className={`DownloadContainer/nolosayText ${styles["nolosayText"]} ${styles["mdNolosayText"]} ${styles["smNolosayText"]}`}
          >
            ton assistant de visite 100% interactif !
          </p>
        </div>
        <div className={`DownloadContainer/iconDiv ${styles["iconDiv"]}`}>
          <img
            className={`DownloadContainer/iconImg ${styles["iconImg"]}`}
            alt=""
            src="/icon/social/app-store.png"
          />
          <img
            className={`DownloadContainer/iconImg ${styles["iconImg"]}`}
            alt=""
            src="/icon/social/google-play.png"
          />
        </div>
      </div>
      <img
        className={`DownloadContainer/phoneImg ${styles["phoneImg"]}`}
        alt=""
        src="/images/phone.png"
      />
    </div>
  );
};

export default DownloadContainer;
