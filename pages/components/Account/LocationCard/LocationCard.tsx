import React from "react";
import { NextPage } from "next";
import { useNavigate } from 'react-router-dom';
import { ButtonBase, Modal, Typography } from "@mui/material";
import LocationEditForm from "../LocationEditForm/LocationEditForm";

interface CardInfo {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website?: string;
  city?: string;
  location?: string;
  pathname: string;
}

interface LocationCardProps {
  cardInfo: CardInfo;
}

const styles: { [key: string]: string } = {
  container: "h-[200px] flex-1 flex flex-col items-start justify-start w-full text-left text-mini text-darkslategray font-poppins mq450:h-auto",
  card: "rounded-1.5lg bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border min-h-[203px] text-base-black w-full",
  cardContent: " flex flex-row items-center justify-start relative gap-[10px] mq450:flex-wrap w-full",
  cardImage: "h-[115px] w-[113px] relative rounded-md object-cover mq450:flex-1",
  cardDetails: "flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[138px]",
  cardTitle: "self-stretch relative text-inherit leading-[19px] font-bold font-inherit text-base",
  cardDescription: "self-stretch relative text-xs tracking-[-0.08px] leading-[16px] text-base-black m-0",
  videoCountInput: "w-full [border:none] [outline:none] bg-lightyellow self-stretch h-6 rounded-8xs flex flex-row items-start justify-center py-1 px-2.5 box-border font-poppins font-semibold text-2xs text-base-black min-w-[127px]",
  buttons: "flex p-3 rounded-lg shadow-lg bg-white items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20",
  container_0: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 bg-white border-2 border-black shadow-2xl p-4 overflow-y-auto",
  container_1: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col space-y-5 bg-white border-2 border-black shadow-2xl p-4 overflow-y-auto",
  container_2: "flex flex-row space-x-5",
  container_3: "flex flex-row space-x-5 pt-5"
};


const LocationCard: NextPage<LocationCardProps> = ({ cardInfo }) => {

  const navigate = useNavigate();

  const splitTitle = (title: string): [string, string] => {
    const firstPart = title.split(" ").slice(0, Math.ceil(title.split(" ").length / 2)).join(" ");
    const secondPart = title.split(" ").slice(Math.ceil(title.split(" ").length / 2)).join(" ");
    return [firstPart, secondPart];
  };

  const [title1, title2] = splitTitle(cardInfo.title);

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`container_0 ${styles.container_0}`}>
          <LocationEditForm cardInfo={cardInfo} />
        </div>
      </Modal>
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={`container_1 ${styles.container_1}`}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you really want to delete this location?
          </Typography>
          <div className={`container_2 ${styles.container_2}`}>
            <ButtonBase disableRipple onClick={handleCloseDelete}>
              <div className={styles.buttons}>
                Cancel
              </div>
            </ButtonBase>
            <ButtonBase disableRipple onClick={handleCloseDelete}>
              <div className={styles.buttons}>
                Delete
              </div>
            </ButtonBase>
          </div>
        </div>
      </Modal>
      <div className={`container ${styles.container}`}>
        <div className={`card ${styles.card}`}>
          <div className={`cardContent ${styles.cardContent}`}>
            <img className={`cardImage ${styles.cardImage}`} loading="eager" alt="" src={`${cardInfo.imageSrc}`} />
            <div className={`cardDetails ${styles.cardDetails}`}>
              <div className={`cardTitle ${styles.cardTitle}`}>
                <p>{title1}</p>
                <p>{title2}</p>
              </div>
              <div className={`cardDescription ${styles.cardDescription}`}>{cardInfo.description}</div>
              <input className={`videoCountInput ${styles.videoCountInput}`} placeholder={cardInfo.videoCountPlaceholder} type="text" />
            </div>
          </div>
          <div className={`container_3 ${styles.container_3}`}>
            {/**<ButtonBase disableRipple onClick={handleClick}>
              <div className={styles.buttons}>
                Voir
              </div>
            </ButtonBase>**/}
            <ButtonBase disableRipple onClick={handleOpen}>
              <div className={styles.buttons}>
                Modifier
              </div>
            </ButtonBase>
            <ButtonBase disableRipple onClick={handleOpenDelete} >
              <div className={styles.buttons}>
                Supprimer
              </div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
