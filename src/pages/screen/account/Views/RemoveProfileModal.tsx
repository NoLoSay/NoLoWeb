import React from "react";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  mainDiv:
    "fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black/[0.5] text-black",

  contentDiv:
    "relative bg-white flex flex-col p-[20px] rounded w-1/2 h-1/4 gap-y-2 shadow-cardShadow items-center justify-center",

  header: "mb-2.5 flex space-between items-center",

  selectionDiv: "flex flex-row gap-x-5",

  closeButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-lg w-auto",

  submitButton:
    "bg-base-button font-poppins font-semibold hover:cursor-pointer p-2 relative rounded-1.5lg text-black text-lg w-auto",

  errorMessage: "text-red-600 text-center",
};

interface RemoveProfileModalProps {
  onCancel: () => void;
  onConfirm: () => Promise<void>;
  error: string;
}

const RemoveProfileModal: React.FC<RemoveProfileModalProps> = ({
  onCancel,
  onConfirm,
  error,
}) => {
  return (
    <div className={`RemoveProfileModal/mainDiv ${styles["mainDiv"]}`}>
      <div className={`RemoveProfileModal/contentDiv ${styles["contentDiv"]}`}>
        <div className={`RemoveProfileModal/header ${styles["header"]}`}>
          <h2>
            {
              textData.page.screen.profileSection.removeProfileModalSection
                .removeProfileConfirmationText
            }
          </h2>
        </div>
        <div
          className={`RemoveProfileModal/selectionDiv ${styles["selectionDiv"]}`}
        >
          <button
            onClick={onCancel}
            className={`RemoveProfileModal/closeButton ${styles["closeButton"]}`}
          >
            {
              textData.page.screen.profileSection.removeProfileModalSection
                .cancel
            }
          </button>
          <button
            onClick={onConfirm}
            className={`RemoveProfileModal/submitButton ${styles["submitButton"]}`}
          >
            {
              textData.page.screen.profileSection.removeProfileModalSection
                .confirm
            }
          </button>
        </div>
        {error && (
          <p
            className={`RemoveProfileModal/errorMessage ${styles["errorMessage"]}`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default RemoveProfileModal;
