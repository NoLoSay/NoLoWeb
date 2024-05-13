const styles: { [key: string]: string } = {
  mainDiv: "relative w-4/5 text-left text-base-white font-poppins items-center",

  backDiv: "relative w-full brightness-50",

  castleImg:
    "rounded-[4rem] w-full flex object-contain " +
    "md:rounded-3xl " +
    "sm:rounded-2xl",

  contentDiv:
    "absolute w-[50%] top-[30%] left-[30%] flex flex-col items-start justify-start gap-y-6 " +
    "md:gap-y-0 " +
    "sm:gap-y-0",

  textDiv: "relative w-full contents",

  titleText: "font-black text-6xl " + "md:text-3xl " + "sm:text-xl",

  nolosayText: "text-4xl font-medium " + "md:text-xl " + "sm:text-xs",

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
      <div className={`DownloadContainer/contentDiv ${styles["contentDiv"]}`}>
        <div className={`DownloadContainer/textDiv ${styles["textDiv"]}`}>
          <p className={`DownloadContainer/titleText ${styles["titleText"]}`}>
            Nolosay,
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
            onClick={() => {
              window.location.href =
                "itms-services://?action=download-manifest&url=https://portfolio-nine-rho-17.vercel.app/NoLoSay/manifest.plist";
            }}
          />
          <img
            className={`DownloadContainer/iconImg ${styles["iconImg"]}`}
            alt=""
            src="/icon/social/google-play.png"
            onClick={() => {
              window.location.href = "NoLoSay.apk";
            }}
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
