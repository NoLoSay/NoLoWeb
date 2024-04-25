const styles: { [key: string]: string } = {
  /* original */
  // mainDiv:"relative w-[1440px] h-[817px] overflow-hidden shrink-0 text-left text-41xl text-base-white font-poppins",
  // backDiv:"absolute top-[63px] left-[80px] rounded-tl-41xl rounded-tr-xl rounded-br-xl rounded-bl-41xl bg-base-white w-[1280px] h-[692px] overflow-hidden",
  // CastleImg:"absolute top-[calc(50%_-_346px)] left-[0px] w-[1289px] h-[692px] object-cover",
  // CastleDiv:"absolute top-[calc(50%_-_346px)] left-[0px] rounded-tl-41xl rounded-tr-xl rounded-br-xl rounded-bl-41xl [background:linear-gradient(180deg,_rgba(30,_48,_58,_0),_#1e303a_89.58%)] w-[1289px] h-[692px]",
  // ContentDiv:
  //   "absolute top-[372px] left-[522px] flex flex-col items-start justify-start gap-[20px]",
  // TextDiv: "relative leading-[65px] inline-block w-[675px]",
  // NolosayText: "m-0 font-black",
  // TitleText: "m-0 text-31xl font-medium",
  // IconDiv: "flex flex-row items-center justify-start gap-[17px]",
  // IconImg: "relative w-[142.76px] h-[41.24px]",
  // LineImg: "absolute top-[194.68px] left-[0px] w-[1694px] h-[543.32px]",
  // PhoneDiv: "absolute top-[63px] left-[77px] w-[343px] h-[692.28px]",
  // PhoneImg: "absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",

  /* rework */
  mainDiv: "relative w-4/5 text-left text-base-white font-poppins items-center",

  backDiv: "relative w-full brightness-50",

  castleImg: "rounded-[4rem] w-full flex object-contain " +
    "md:rounded-3xl " +
    "sm:rounded-2xl",

  contentDiv:
    "absolute w-[50%] top-[30%] left-[30%] flex flex-col items-start justify-start gap-y-6 " +
    "md:gap-y-0 " +
    "sm:gap-y-0",

  textDiv: "relative w-full inline-block",

  titleText: "font-black text-[3.5rem] " +
    "md:text-[3rem] " +
    "sm:text-[2rem]",

  nolosayText: "text-[2.25rem] font-medium " +
    "md:text-[1.25rem] " +
    "sm:text-[0.75rem]",

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
          className={`DownloadContainer/castleImg ${styles["castleImg"]}`}
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
        className={`DownloadContainer/contentDiv ${styles["contentDiv"]}`}
      >
        <div className={`DownloadContainer/textDiv ${styles["textDiv"]}`}>
          <p
            className={`DownloadContainer/titleText ${styles["titleText"]}`}
          >
            Nolosay,{" "}
          </p>
          <p
            className={`DownloadContainer/nolosayText ${styles["nolosayText"]}`}
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
      {/* <img className={styles["LineImg"]} alt="" src="/images/line.png" /> */}
      <img
        className={`DownloadContainer/phoneImg ${styles["phoneImg"]}`}
        alt=""
        src="/images/phone.png"
      />
    </div>
  );
};

export default DownloadContainer;
