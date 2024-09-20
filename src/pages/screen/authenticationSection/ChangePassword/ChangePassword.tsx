import React from "react";
import { useNavigate } from "node_modules/react-router-dom/dist/index";
import Layout from "@components/Layout/Layout";
import textData from "@public/text.json";
import Input from "@components/Input/Input";
import ChangePasswordController from "./ChangePasswordController";

const styles: { [key: string]: string } = {
  backgroundDiv:
    "relative w-[100%] grid place-items-center bg-changePasswordBackground bg-origin-border\
    bg-clip-border bg-center bg-cover bg-no-repeat",

  mainDiv:
    "relative w-[40%] self-center justify-center items-center rounded-2.5xl\
    flex flex-1 flex-col gap-5 px-10 py-20 my-[5rem] bg-base-white shadow-[0_4px_9px_0_rgba(0,0,0,0.25)] " +
    "sm:w-[90%] sm:px-0 " +
    "md:w-3/4 md:px-5 md:py-15 " +
    "lg:w-2/3",

  titleDiv: "relative items-center flex flex-col flex-auto gap-5",

  titleDivLogo: "relative w-[45%]",

  titleDivTextDiv: "relative flex flex-1 flex-col items-center font-poppins",

  titleDivTextDivTitle: "text-black text-2xl font-bold",

  titleDivTextDivSubtitle: "text-[rgba(100,100,100,1)] text-xl font-normal",

  form:
    "flex flex-1 flex-col gap-5 items-center relative text-center w-2/5 " +
    "sm:w-3/4 " +
    "md:w-3/5",

  formPasswordTitle: "text-black text-left font-medium",

  formInput:
    "bg-gray-50 w-auto font-normal text-xl p-2 relative rounded-1.5lg w-full",

  formPasswordDiv: "flex flex-row bg-gray-50 px-2 w-full rounded-1.5lg",

  formConfirmButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-2/3 " +
    "md:w-3/4",

  errorMessage: "text-red-600 text-center",
};

export const ChangePassword = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    setNewPassword,
    showNewPassword,
    setShowNewPassword,
    setNewConfirmPassword,
    showNewConfirmPassword,
    setShowNewConfirmPassword,
    changePassword,
    error,
  } = ChangePasswordController({ navigate });

  return (
    <div className={`ChangePassword/backgroundDiv ${styles["backgroundDiv"]}`}>
      <div className={`ChangePassword/mainDiv ${styles["mainDiv"]}`}>
        <div className={`ConnectionScreen/titleDiv ${styles["titleDiv"]}`}>
          <div
            className={`ConnectionScreen/titleDivTextDiv ${styles["titleDivTextDiv"]}`}
          >
            <img
              className={`ConnectionScreen/titleDivLogo ${styles["titleDivLogo"]}`}
              alt="Black logo"
              src="/images/tmp/Black_logo.png"
            />
            <p
              className={`ConnectionScreen/titleDivTextDivTitle ${styles["titleDivTextDivTitle"]}`}
            >
              {
                textData.page.screen.authentificationSection.changePassword
                  .changepassword
              }
            </p>
          </div>
        </div>
        <form
          className={`ChangePassword/form ${styles["form"]}`}
          onSubmit={changePassword}
        >
          <div>
            <p
              className={`ChangePassword/formPasswordTitle ${styles["formPasswordTitle"]}`}
            >
              {
                textData.page.screen.authentificationSection.changePassword
                  .newpassword
              }
            </p>
            <Input
              divClassName={`ChangePassword/formPasswordDiv ${styles["formPasswordDiv"]}`}
              inputClassName={`ChangePassword/formInput ${styles["formInput"]}`}
              inputName="newPassword"
              inputOnChange={(e) => setNewPassword(e.target.value)}
              inputPlaceholder={
                textData.page.screen.authentificationSection.changePassword
                  .passwordplaceholder
              }
              isPassword
              showPassword={showNewPassword}
              setShowPassword={setShowNewPassword}
            />
          </div>
          <div>
            <p
              className={`ChangePassword/formPasswordTitle ${styles["formPasswordTitle"]}`}
            >
              {
                textData.page.screen.authentificationSection.changePassword
                  .confirmnewpassword
              }
            </p>
            <Input
              divClassName={`ChangePassword/formPasswordDiv ${styles["formPasswordDiv"]}`}
              inputClassName={`ChangePassword/formInput ${styles["formInput"]}`}
              inputName="newConfirmPassword"
              inputOnChange={(e) => setNewConfirmPassword(e.target.value)}
              inputPlaceholder={
                textData.page.screen.authentificationSection.changePassword
                  .passwordplaceholder
              }
              isPassword
              showPassword={showNewConfirmPassword}
              setShowPassword={setShowNewConfirmPassword}
            />
          </div>
          <button
            className={`ChangePassword/formConfirmButton ${styles["formConfirmButton"]}`}
          >
            {
              textData.page.screen.authentificationSection.changePassword
                .confirm
            }
          </button>
        </form>
        {error && (
          <p
            className={`ChangePassword/errorMessage ${styles["errorMessage"]}`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

ChangePassword.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ChangePassword;
