import React from "react";
import Link from "../../../../node_modules/next/link";
import Layout from "../../../components/Layout/Layout";

const styles: { [key: string]: string } = {
  mainDiv:
    "relative w-[40%] self-center justify-center items-center rounded-2.5xl\
    flex flex-1 flex-col gap-5 px-10 py-20 my-[5rem] bg-base-white shadow-[0_4px_9px_0_rgba(0,0,0,0.25)]",
  smMainDiv: "sm:w-[90%] sm:px-0",
  mdMainDiv: "md:w-3/4 md:px-5 md:py-15",
  lgMainDiv: "lg:w-2/3",

  titleDiv: "relative items-center flex flex-col flex-auto gap-5",

  titleDivLogo: "relative w-[45%]",

  titleDivTextDiv: "relative flex flex-1 flex-col items-center font-poppins",

  titleDivTextDivTitle: "text-black text-2xl font-bold",

  titleDivTextDivSubtitle: "text-[rgba(100,100,100,1)] text-xl font-normal",

  form: "flex flex-1 flex-col gap-5 items-center relative text-center w-2/5",
  smForm: "sm:w-3/4",
  mdForm: "md:w-3/5",

  formInput:
    "bg-gray-50 w-auto font-normal text-xl p-2 relative rounded-1.5lg w-full",

  formConnectionButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-2/3",
  mdFormConnectionButton: "md:w-3/4",

  otherConnectionsDiv: "flex flex-col gap-5 items-center justify-center w-full",

  otherConnectionsDivSeperationDiv:
    "flex flex-row items-center justify-between w-1/2",

  otherConnectionsDivSeperationDivLine: "bg-black w-1/3 h-px",

  otherConnectionsDivSeperationDivText:
    "font-light font-poppins text-black text-xs",

  otherConnectionsDivButtonDiv:
    "flex flex-row items-center justify-center gap-5 relative w-1/2",

  otherConnectionsDivButtonDivButtons: "hover:cursor-pointer",

  noAccountText:
    "font-normal font-poppins relative text-center text-gray-300 text-xs",

  noAccountLink: "font-bold font-poppins hover:underline text-black",
};

export const ConnectionScreen = (): JSX.Element => {
  return (
    <div
      className={`ConnectionScreen/mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]} ${styles["mdMainDiv"]} ${styles["lgMainDiv"]}`}
    >
      <div className={`ConnectionScreen/titleDiv ${styles["titleDiv"]}`}>
        <img
          className={`ConnectionScreen/titleDivLogo ${styles["titleDivLogo"]}`}
          alt="Black logo"
          src="/images/tmp/Black_logo.png"
        />
        <div
          className={`ConnectionScreen/titleDivTextDiv ${styles["titleDivTextDiv"]}`}
        >
          <p
            className={`ConnectionScreen/titleDivTextDivTitle ${styles["titleDivTextDivTitle"]}`}
          >
            Se connecter
          </p>
          <p
            className={`ConnectionScreen/titleDivTextDivSubtitle ${styles["titleDivTextDivSubtitle"]}`}
          >
            Connecte-toi pour continuer
          </p>
        </div>
      </div>
      <form
        className={`ConnectionScreen/form ${styles["form"]} ${styles["smForm"]} ${styles["mdForm"]}`}
      >
        <input
          className={`ConnectionScreen/formInput ${styles["formInput"]}`}
          type="email"
          placeholder="exemple@gmail.com"
        />
        <input
          className={`ConnectionScreen/formInput ${styles["formInput"]}`}
          type="password"
          placeholder="**********"
        />
        <button
          className={`ConnectionScreen/formConnectionButton ${styles["formConnectionButton"]} ${styles["mdFormConnectionButton"]}`}
        >
          Me connecter
        </button>
      </form>
      <div
        className={`ConnectionScreen/otherConnectionsDiv ${styles["otherConnectionsDiv"]}`}
      >
        <div
          className={`ConnectionScreen/otherConnectionsDivSeperationDiv ${styles["otherConnectionsDivSeperationDiv"]}`}
        >
          <hr
            className={`ConnectionScreen/otherConnectionsDivSeperationDivLine ${styles["otherConnectionsDivSeperationDivLine"]}`}
          />
          <p
            className={`ConnectionScreen/otherConnectionsDivSeperationDivText ${styles["otherConnectionsDivSeperationDivText"]}`}
          >
            ou avec
          </p>
          <hr
            className={`ConnectionScreen/otherConnectionsDivSeperationDivLine ${styles["otherConnectionsDivSeperationDivLine"]}`}
          />
        </div>
        <div
          className={`ConnectionScreen/otherConnectionsDivButtonDiv ${styles["otherConnectionsDivButtonDiv"]}`}
        >
          <img
            className={`ConnectionScreen/otherConnectionsDivButtonDivButtons ${styles["otherConnectionsDivButtonDivButtons"]}`}
            src="/icon/social/Google button.png"
          />
          <img
            className={`ConnectionScreen/otherConnectionsDivButtonDivButtons ${styles["otherConnectionsDivButtonDivButtons"]}`}
            src="/icon/social/Apple button.png"
          />
          <img
            className={`ConnectionScreen/otherConnectionsDivButtonDivButtons ${styles["otherConnectionsDivButtonDivButtons"]}`}
            src="/icon/social/Facebook button.png"
          />
        </div>
      </div>
      <p
        className={`ConnectionScreen/noAccountText ${styles["noAccountText"]}`}
      >
        Pas de compte ?
        <Link
          className={`ConnectionScreen/noAccountLink ${styles["noAccountLink"]}`}
          href={"/screen/authenticationSection/subscription/SubscriptionScreen"}
        >
          {" "}
          Créer un compte
        </Link>
      </p>
    </div>
  );
};

ConnectionScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ConnectionScreen;
