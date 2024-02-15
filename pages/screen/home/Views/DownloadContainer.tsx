const styles: { [key: string]: string } = {
  mainDiv:"relative w-[1440px] h-[817px] overflow-hidden shrink-0 text-left text-41xl text-base-white font-poppins",
  BackDiv:"absolute top-[63px] left-[80px] rounded-tl-41xl rounded-tr-xl rounded-br-xl rounded-bl-41xl bg-base-white w-[1280px] h-[692px] overflow-hidden",
  CastleImg:"absolute top-[calc(50%_-_346px)] left-[0px] w-[1289px] h-[692px] object-cover",
  CastleDiv:"absolute top-[calc(50%_-_346px)] left-[0px] rounded-tl-41xl rounded-tr-xl rounded-br-xl rounded-bl-41xl [background:linear-gradient(180deg,_rgba(30,_48,_58,_0),_#1e303a_89.58%)] w-[1289px] h-[692px]",
  ContentDiv:"absolute top-[372px] left-[522px] flex flex-col items-start justify-start gap-[20px]",
  TextDiv: "relative leading-[65px] inline-block w-[675px]",
  NolosayText: "m-0 font-black",
  TitleText: "m-0 text-31xl font-medium",
  IconDiv: "flex flex-row items-center justify-start gap-[17px]",
  IconImg: "relative w-[142.76px] h-[41.24px]",
  LineImg: "absolute top-[194.68px] left-[0px] w-[1694px] h-[543.32px]",
  PhoneDiv: "absolute top-[63px] left-[77px] w-[343px] h-[692.28px]",
  PhoneImg: "absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover",
};

const DownloadContainer: React.FC = () => {
  return (
    <div className={styles["mainDiv"]}>
      <div className={styles["BackDiv"]}>
        <img
          className={styles["CastleImg"]}
          alt=""
          src="/images/castle/chateau-large.png"
        />
        <div className={styles["CastleDiv"]} />
      </div>
      <div className={styles["ContentDiv"]}>
        <div className={styles["TextDiv"]}>
          <p className={styles["NolosayText"]}>Nolosay, </p>
          <p className={styles["TitleText"]}>
            ton assistant de visite 100% interactif !
          </p>
        </div>
        <div className={styles["IconDiv"]}>
          <img
            className={styles["IconImg"]}
            alt=""
            src="/icon/social/app-store.png"
          />
          <img
            className={styles["IconImg"]}
            alt=""
            src="/icon/social/google-play.png"
          />
        </div>
      </div>
      <img className={styles["LineImg"]} alt="" src="/images/line.png" />
      <div className={styles["PhoneDiv"]}>
        <img className={styles["PhoneImg"]} alt="" src="/images/phone.png" />
      </div>
    </div>
  );
};

export default DownloadContainer;
