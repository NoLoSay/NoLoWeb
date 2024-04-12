import React, { CSSProperties, Fragment } from "react";
import Link from "../../../../node_modules/next/link";
import Layout from "../../../components/Layout/Layout";

const styles: { [key: string]: string } = {
  mainDiv:
    "relative w-[40%] self-center justify-center items-center rounded-2.5xl\
    flex flex-1 flex-col gap-5 px-10 py-20 my-[5rem] bg-base-white shadow-[0_4px_9px_0_rgba(0,0,0,0.25)]",
  smMainDiv: "sm:w-[90%] sm:px-0 sm:py-10",
  mdMainDiv: "md:w-3/4 md:px-5 md:py-15",
  lgMainDiv: "lg:w-2/3",

  titleDiv: "relative flex flex-col flex-auto gap-5 items-center justify-center text-center",
  smTitleDiv: "sm:w-1/2",

  titleDivLogo: "relative w-1/3",

  titleDivTextDiv: "relative flex flex-1 flex-col items-center font-poppins",

  titleDivTextDivTitle: "text-black text-2xl font-bold",
  smTitleDivTextDivTitle: "sm:text-lg",

  titleDivTextDivSubtitle: "text-[rgba(100,100,100,1)] text-xl font-normal",
  smTitleDivTextDivSubtitle: "sm:text-xs",

  form: "flex flex-1 flex-col gap-5 items-center relative text-center w-3/5",

  formInput: "bg-gray-50 font-normal text-xl p-2 relative rounded-1.5lg w-full",
  smFormInput: "sm:text-sm",

  formConnectionButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-2/3",

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

export const SubscriptionScreen = (): JSX.Element => {
  return (
    <div
      className={`SubscriptionScreen/mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]} ${styles["mdMainDiv"]} ${styles["lgMainDiv"]}`}
    >
      <div className={`SubscriptionScreen/titleDiv ${styles["titleDiv"]} ${styles["smTitleDiv"]}`}>
        <img
          className={`SubscriptionScreen/titleDivLogo ${styles["titleDivLogo"]}`}
          alt="Black logo"
          src="/images/tmp/Black_logo.png"
        />
        <div
          className={`SubscriptionScreen/titleDivTextDiv ${styles["titleDivTextDiv"]}`}
        >
          <p
            className={`SubscriptionScreen/titleDivTextDivTitle ${styles["titleDivTextDivTitle"]} ${styles["smTitleDivTextDivTitle"]}`}
          >
            Créer un compte
          </p>
          <p
            className={`SubscriptionScreen/titleDivTextDivSubtitle ${styles["titleDivTextDivSubtitle"]} ${styles["smTitleDivTextDivSubtitle"]}`}
          >
            Renseigne tes informations personnelles
          </p>
        </div>
      </div>
      <form className={`SubscriptionScreen/form ${styles["form"]}`}>
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="text"
          placeholder="Nom"
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="text"
          placeholder="Prénom"
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="email"
          placeholder="exemple@gmail.com"
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="tel"
          placeholder="Téléphone"
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="password"
          placeholder="Mot de passe"
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="password"
          placeholder="Confirmer le mot de passe"
        />
        <button
          className={`SubscriptionScreen/formConnectionButton ${styles["formConnectionButton"]}`} /* style={{ ...classes["s-inscrire"] }} */
        >
          Créer un compte
        </button>
      </form>
      <p
        className={`SubscriptionScreen/noAccountText ${styles["noAccountText"]}`}
      >
        Déjà un compte ?
        <Link
          className={`SubscriptionScreen/noAccountLink ${styles["noAccountLink"]}`}
          href={"/screen/authenticationSection/connection/ConnectionScreen"}
        >
          {" "}
          Se connecter
        </Link>
      </p>
    </div>
  );
};

SubscriptionScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default SubscriptionScreen;
