import React from "react";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  mainDiv:
    "fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black/[0.5] text-black",

  contentDiv:
    "relative bg-white flex flex-col p-[20px] rounded w-1/2 h-2/3 shadow-cardShadow items-center justify-center",

  header: "mb-2.5 flex space-between items-center",

  body: "m-2.5",

  reconnectButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-sm w-auto ",
};

interface PasswordChangedProps {
  reconnect: () => void;
}

const PasswordChanged: React.FC<PasswordChangedProps> = ({ reconnect }) => {
  return (
    <div className={`PasswordChanged/mainDiv ${styles["mainDiv"]}`}>
      <div className={`PasswordChanged/contentDiv ${styles["contentDiv"]}`}>
        <div className={`PasswordChanged/header ${styles["header"]}`}>
          <h2>
            {
              textData.page.screen.authentificationSection.passwordChanged
                .passwordChangedSuccessfully
            }
          </h2>
        </div>
        <div className={`PasswordChanged/body ${styles["body"]}`}>
          <p>
            {
              textData.page.screen.authentificationSection.passwordChanged
                .goToConnection
            }
          </p>
        </div>
        <button
          onClick={reconnect}
          className={`PasswordChanged/reconnectButton ${styles["reconnectButton"]}`}
        >
          {
            textData.page.screen.authentificationSection.passwordChanged
              .connect
          }
        </button>
      </div>
    </div>
  );
};

export default PasswordChanged;
