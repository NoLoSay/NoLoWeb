import React from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/dist/index";
import Layout from "../../../components/Layout/Layout";
import SubscriptionController from "./SubscriptionController";
import textData from "../../../../public/text.json";

const styles: { [key: string]: string } = {
  mainDiv:
    "relative w-[40%] self-center justify-center items-center rounded-2.5xl\
    flex flex-1 flex-col gap-5 px-10 py-20 my-[5rem] bg-base-white shadow-[0_4px_9px_0_rgba(0,0,0,0.25)]",
  smMainDiv: "sm:w-[90%] sm:px-0 sm:py-10",
  mdMainDiv: "md:w-3/4 md:px-5 md:py-15",
  lgMainDiv: "lg:w-2/3",

  titleDiv:
    "relative flex flex-col flex-auto gap-5 items-center justify-center text-center",
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

  formPasswordDiv: "flex flex-row bg-gray-50 px-2 w-full rounded-1.5lg",

  formConnectionButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-2/3",

  errorMessage: "text-red-600 text-center",

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

  noAccountButton:
    "bg-transparent font-bold font-poppins hover:underline text-black",
};

interface SubscriptionScreenProps {}

const SubscriptionScreen: React.FC<SubscriptionScreenProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
  const navigate = useNavigate();
  const {
    setUsername,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setTelNumber,
    showPassword,
    setShowPassword,
    showConfirmationPassword,
    setShowConfirmationPassword,
    error,
    register,
  } = SubscriptionController({ navigate });

  return (
    <div
      className={`SubscriptionScreen/mainDiv ${styles["mainDiv"]} ${styles["smMainDiv"]} ${styles["mdMainDiv"]} ${styles["lgMainDiv"]}`}
    >
      <div
        className={`SubscriptionScreen/titleDiv ${styles["titleDiv"]} ${styles["smTitleDiv"]}`}
      >
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
            {textData.page.screen.authentificationSection.subscription.create}
          </p>
          <p
            className={`SubscriptionScreen/titleDivTextDivSubtitle ${styles["titleDivTextDivSubtitle"]} ${styles["smTitleDivTextDivSubtitle"]}`}
          >
            {
              textData.page.screen.authentificationSection.subscription
                .information
            }
          </p>
        </div>
      </div>
      <form
        className={`SubscriptionScreen/form ${styles["form"]}`}
        onSubmit={register}
      >
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="text"
          placeholder="Nom d'utilisateur"
          name="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="email"
          placeholder="exemple@gmail.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
          type="tel"
          placeholder="Téléphone"
          name="phoneNumber"
          onChange={(e) => setTelNumber(e.target.value)}
        />
        <div
          className={`SubscriptionScreen/formPasswordDiv ${styles["formPasswordDiv"]}`}
        >
          <input
            className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
        <div
          className={`SubscriptionScreen/formPasswordDiv ${styles["formPasswordDiv"]}`}
        >
          <input
            className={`SubscriptionScreen/formInput ${styles["formInput"]} ${styles["smFormInput"]}`}
            type={showConfirmationPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            name="confirmPassword"
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />
          <input
            type="checkbox"
            onChange={() =>
              setShowConfirmationPassword(!showConfirmationPassword)
            }
          />
        </div>
        <button
          className={`SubscriptionScreen/formConnectionButton ${styles["formConnectionButton"]}`}
        >
          {textData.page.screen.authentificationSection.subscription.create}
        </button>
      </form>
      {error && (
        <p
          className={`SubscriptionScreen/errorMessage ${styles["errorMessage"]}`}
        >
          {error}
        </p>
      )}
      <p
        className={`SubscriptionScreen/noAccountText ${styles["noAccountText"]}`}
      >
        {textData.page.screen.authentificationSection.subscription.already}{" "}
        <button
          className={`SubscriptionScreen/noAccountButton ${styles["noAccountButton"]}`}
          onClick={() => {
            navigate("/connection");
          }}
        >
          {textData.page.screen.authentificationSection.subscription.connecty}
        </button>
      </p>
    </div>
  );
};

SubscriptionScreen.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default SubscriptionScreen;
