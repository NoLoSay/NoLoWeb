import React, { Fragment, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "@global/contexts/UserProvider";
import { ButtonBase } from "@mui/material";
import textData from "@public/text.json";

const styles = {
  buttons:
    "flex p-3 w-full rounded-lg bg-white items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20",
  divBlockTitlePage:
    "text-black justify-between items-center flex mb-12 px-8 " +
    "md:flex-row md:items-center md:justify-between md:px-3 " +
    "sm:items-center",
  noExhibitions: "text-black",
  image18: "w-12 h-12 " + "sm:w-6 sm:h-6",
  image17: "w-12 h-12 " + "sm:w-6 sm:h-6",
  divArtwork:
    "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full mb-10 " +
    "md:flex-col md:items-center " +
    "sm:flex-col sm:items-start ",
  divTitlePage: "justify-between items-center flex",
  pageTitle:
    "justify-center items-center flex md:flex-row md:items-center md:justify-center sm:flex-col sm:items-center",
  divBlockExhibitionList: "text-black w-full px-8 md:px-3 sm:px-5",
  divExhibitionList: "flex flex-col w-full",
  image16: "w-36 h-36 md:w-full sm:w-full",
  divBlockExhibitionInfos: "flex-1 w-full sm:items-start pl-5 md:pl-5 sm:pl-0",
  divExhibitionChangeBtn:
    "flex flex-row items-center justify-between mb-5 w-full sm:flex-row sm:items-center md:flex-row md:justify-between",
  divModifyButtons: "flex flex-row",
  heading13: "m-0 self-center sm:text-center",
  changeBtnIcon: "h-10 w-10 sm:h-5 sm:w-5",
  deleteBtnIcon: "h-10 w-10 sm:h-5 sm:w-5",
  divBlockExhibitionInformations:
    "flex flex-row w-full items-center sm:flex-col md:flex-row md:justify-between",
  divExhibitionInformations:
    "flex flex-col gap-x-2.5 gap-y-2.5 pr-5 w-full sm:items-start md:flex-col md:justify-between",
  divGeneralInformation:
    "flex items-start justify-between w-full md:flex-col md:items-start md:justify-between sm:flex-col sm:items-start",
  exhibitionDescription: "flex-[0_auto] pr-0 text-justify w-full sm:text-start",
  divBlockGoToArtworksBtn:
    "flex flex-col items-center justify-between flex-none",
  divBlockArtworkList: "text-black w-full px-8 " + "md:px-3 " + "sm:px-5 ",
  returnToPreviousPageBtn: "desired-css-properties-here",
  addExhibitionBtn: "desired-css-properties-here",
  divArtworksList: "flex flex-col w-full",
  divExhibition:
    "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full mb-10 " +
    "md:flex-col md:items-center " +
    "sm:flex-col sm:items-start ",
  artworkPage:
    "text-black flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  artworkCard: "text-black shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
  image22: "rounded-lg w-1/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "pt-5 pb-2.5",
  artistName: "text-black pt-5 pb-2.5",
  createdAtText: "text-black pt-5 pb-2.5",
  descriptionText: "text-black pt-5 pb-2.5",
  divBlockDescription: "w-full",
  divBlockButtonModification:
    "flex w-full justify-center items-center space-x-4",
  divButtonDontSave:
    "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer",
  divButtonSave:
    "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  divBlockArtworkInfos: "flex-1 w-full sm:items-start pl-5 md:pl-5 sm:pl-0",
  divArtworkChangeBtn:
    "flex flex-row items-center justify-between mb-5 w-full sm:flex-row sm:items-center md:flex-row md:justify-between",
  divBlockArtworkInformations:
    "flex flex-row w-full items-center sm:flex-col md:flex-row md:justify-between",
  divArtworkInformations:
    "flex flex-col gap-x-2.5 gap-y-2.5 pr-5 w-full sm:items-start md:flex-col md:justify-between",
  artworkDescription: "flex-[0_auto] pr-0 text-justify w-full sm:text-start",
};

const ArtworkModificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserContext);
  const [artworks, setArtworks] = useState(location.state?.items || []);

  useEffect(() => {
    if (location.state?.item) {
      console.log("location.state.item", location.state);
      setArtworks(location.state.item);
    }
  }, [location.state]);

  const handleAction = (buttonName: any, artworkId: any) => {
    switch (buttonName) {
      case "modificationArtwork":
        const artwork = artworks.find((art: any) => art.id === artworkId);
        if (artwork) {
          navigate("/places/exhibitions/artworks/artworkModification", {
            state: { item: artwork },
          });
        } else {
          console.log("location.state?.exhibitionId", location.state?.siteId);
          console.log('location.state?.exhibitionId', location.state?.exhibitionId)
          navigate("/places/exhibitions/artworks/artworkModification", {
            state: { item: null, siteId: location.state.siteId, exhibitionId: location.state.exhibitionId },
          });
        }
        break;
      case "deleteArtwork":
        handleDeleteArtwork(artworkId);
        break;
      default:
        console.log(`Unknown action: ${buttonName}`);
    }
  };

  const handleDeleteArtwork = async (artworkId: any, exhibitionId?: any) => {
    try {
      // First, delete the artwork from the main items service
      const response = await fetch(`https://api.nolo.aurelenc.com/items/${artworkId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete the artwork.");
      }

      // If the main deletion is successful, proceed to delete the link from the exhibition
      const linkDeleteResponse = await fetch(
        `https://api.nolo.aurelenc.com/exhibitions/${exhibitionId}/items/${artworkId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (!linkDeleteResponse.ok) {
        throw new Error(
          "Failed to delete the link between the exhibition and the artwork."
        );
      }

      // Update the local state to remove the artwork
      const updatedArtworks = artworks.filter(
        (art: any) => art.id !== artworkId
      );
      setArtworks(updatedArtworks);
      console.log("Artwork and its exhibition link deleted successfully");
    } catch (error) {
      console.error("Error deleting artwork:", error);
    }
  };

  if (artworks.length === 0) {
    return (
      <Fragment>
        <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
          <ButtonBase disableRipple onClick={() => navigate(-1)}>
            <div className={styles.buttons}>
              {textData.page.screen.artworks.back}
            </div>
          </ButtonBase>
          <div className={`divTitlePage ${styles["divTitlePage"]}`}>
            <h1 className={`pageTitle ${styles["pageTitle"]}`}>
              {textData.page.screen.artworks.artworks}
            </h1>
          </div>
          <ButtonBase
            disableRipple
            onClick={() => handleAction("modificationArtwork", 0)}
          >
            <div className={styles.buttons}>
              {textData.page.screen.artworks.add}
            </div>
          </ButtonBase>
        </div>
        <div style={{ textAlign: "center" }}>
          {textData.page.screen.artworks.noavaible}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
          <ButtonBase disableRipple onClick={() => navigate(-1)}>
            <div className={styles.buttons}>
              {textData.page.screen.artworks.back}
            </div>
          </ButtonBase>
          <div className={`divTitlePage ${styles["divTitlePage"]}`}>
            <h1 className={`pageTitle ${styles["pageTitle"]}`}>
              {textData.page.screen.artworks.artworks}
            </h1>
          </div>
          <ButtonBase
            disableRipple
            onClick={() => handleAction("modificationArtwork", 0)}
          >
            <div className={styles.buttons}>
              {textData.page.screen.artworks.add}
            </div>
          </ButtonBase>
        </div>

        <div className={`divBlockArtworkList ${styles["divBlockArtworkList"]}`}>
          <div className={`divArtworksList ${styles["divArtworksList"]}`}>
            {artworks.map((artwork: any) => (
              <div
                key={artwork.id}
                className={`divArtwork ${styles["divArtwork"]}`}
              >
                <img
                  src={artwork.pictures && artwork.pictures.length > 0 ? artwork.pictures[0].hostingUrl : '/images/empty.jpg'}
                  className={`image16 ${styles["image16"]}`}
                />
                <div
                  className={`divBlockExhibitionInfos ${styles["divBlockExhibitionInfos"]}`}
                >
                  <div
                    className={`divExhibitionChangeBtn ${styles["divExhibitionChangeBtn"]}`}
                  >
                    <h1 className={`heading13 ${styles["heading13"]}`}>
                      {" "}
                      {artwork.name}{" "}
                    </h1>
                  </div>
                  <div
                    className={`divBlockExhibitionInformations ${styles["divBlockExhibitionInformations"]}`}
                  >
                    <p>{artwork.description}</p>
                  </div>
                  <div
                    className={`divBlockGoToArtworksBtn ${styles["divBlockGoToArtworksBtn"]}`}
                  >
                    <ButtonBase
                      disableRipple
                      onClick={() =>
                        handleAction("modificationArtwork", artwork.id)
                      }
                    >
                      <div className={styles.buttons}>
                        {textData.page.screen.artworks.modification}
                      </div>
                    </ButtonBase>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
};

export default ArtworkModificationPage;
