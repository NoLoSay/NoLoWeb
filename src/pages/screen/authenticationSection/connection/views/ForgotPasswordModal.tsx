import React from "react";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  mainDiv:
    "fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black/[0.5] text-black",

  contentDiv:
    "relative bg-white flex flex-col p-[20px] rounded w-1/2 h-2/3 shadow-cardShadow items-center justify-center",

  header: "mb-2.5 flex space-between items-center",

  closeButton:
    "absolute px-2 py-1 right-1 top-1 bg-base-button rounded-xl text-2xl hover:cursor-pointer",

  body: "m-2.5",

  emailInput:
    "bg-gray-50 w-auto font-normal text-xl p-2 relative rounded-1.5lg w-full",

  submitButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-auto "
};

interface ForgotPasswordModalProps {
  onClose: () => void;
  setEmail: (email: string) => void;
  onSubmit: () => Promise<void>;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  onClose,
  setEmail,
  onSubmit,
}) => {

  return (
    <div className={`ForgotPasswordModal/mainDiv ${styles["mainDiv"]}`}>
      <div className={`ForgotPasswordModal/contentDiv ${styles["contentDiv"]}`}>
        <div className={`ForgotPasswordModal/header ${styles["header"]}`}>
          <h2>
            {
              textData.page.screen.authentificationSection.forgottenpassword
                .title
            }
          </h2>
          <button
            onClick={onClose}
            className={`ForgotPasswordModal/closeButton ${styles["closeButton"]}`}
          >
            close
          </button>
        </div>
        <div className={`ForgotPasswordModal/body ${styles["body"]}`}>
          <input
            className={`ForgotPasswordModal/emailInput ${styles["emailInput"]}`}
            type="text"
            placeholder={
              textData.page.screen.authentificationSection.forgottenpassword
                .email
            }
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={onSubmit}
          className={`ForgotPasswordModal/submitButton ${styles["submitButton"]}`}
        >
          {textData.page.screen.authentificationSection.forgottenpassword
                .submit}
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
