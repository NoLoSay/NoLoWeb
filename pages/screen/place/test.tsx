import React, { Fragment, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { UserContext } from '../../../contexts/UserProvider';

const styles = {
  artworkModificationPage: "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  artworkCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
  image22: "rounded-lg w-1/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "pt-5 pb-2.5",
  artistName: "pt-5 pb-2.5",
  createdAtText: "pt-5 pb-2.5",
  descriptionText: "pt-5 pb-2.5",
  divBlockDescription: "w-full",
  divBlockButtonModification: "flex w-full justify-center items-center space-x-4",
  divButtonDontSave: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer",
  divButtonSave: "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  nameInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  descriptionInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  artistNameInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  dateInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  divBlockTitlePage: "text-black justify-between items-center flex mb-12 px-8 md:flex-row md:items-center md:justify-between md:px-3 sm:items-center",
  noExhibitions: "text-black",
  image18: "w-12 h-12 sm:w-6 sm:h-6",
  image17: "w-12 h-12 sm:w-6 sm:h-6",
  divTitlePage: "justify-between items-center flex",
  pageTitle: "justify-center items-center flex md:flex-row md:items-center md:justify-center sm:flex-col sm:items-center ",

};

const ArtworkModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [artworks, setArtworks] = useState(location.state?.items || []);

  const handleGoToArtwork = (action, artwork) => {
    console.log(`Action ${action} triggered for artwork ${artwork.id}`);
    // Add navigation or further action handling here
  };

  const handleAddArtwork = (artwork) => {
    // Check if the artwork object has an id property to determine if we are editing an existing artwork
    if (artwork && artwork.id) {
      navigate(`/places/exhibitions/artworkModification/${artwork.id}`, { state: { item: artwork } });
      console.log(`Editing existing artwork with id ${artwork.id}`);
    } else {
      // Navigate to the artwork modification page without an id to create a new artwork
      navigate('/places/exhibitions/artworkModification', { state: { item: {} } });
      console.log("Creating new artwork");
    }
  };

  const handleBack = () => {
    navigate('/places/exhibitions');
    console.log('go to previous page');
  };

  if (artworks.length === 0) {
    console.log('No exhibitions available to display.');
    return (
      <Fragment>
        <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
          <div
            role="returnToPreviousPageBtn"
            tabIndex={0}
            className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
            onClick={() => handleBack()}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleBack();
                event.preventDefault();
              }
            }}
          >
            <img
              src=""
              loading="lazy"
              alt="Retour"
              className={`image18 ${styles["image18"]}`}
            />
          </div>
          <div className={`divTitlePage ${styles["divTitlePage"]}`}>
            <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes artwork</h1>
          </div>
          <div
            role="addExhibitionBtn"
            tabIndex={0}
            className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
            onClick={() => handleAddArtwork()}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleAddArtwork();
                event.preventDefault();
              }
            }}
          >
            <img
              src=""
              loading="lazy"
              alt="Ajouter une artwork"
              className={`image17 ${styles["image17"]}`}
            />
          </div>
        </div>
        <div className={`noExhibitions ${styles["noExhibitions"]}`}>Aucun artwork disponible.</div>
      </Fragment>
    );
  } else
    return (
      <Fragment>
        <section className={`artworksPage ${styles["artworksPage"]}`}>
          <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
            <div
              role="returnToPreviousPageBtn"
              tabIndex={0}
              className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
              onClick={() => handleAction("returnToPreviousPageBtn")}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleAction("returnToPreviousPageBtn");
                  event.preventDefault();
                }
              }}
            >
              <img
                src=""
                loading="lazy"
                alt="Retour"
                className={`image18 ${styles["image18"]}`}
              />
            </div>
            <div className={`divTitlePage ${styles["divTitlePage"]}`}>
              <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
            </div>
            <div
              role="addArtworkBtn"
              tabIndex={0}
              className={`addArtworkBtn ${styles["addArtworkBtn"]}`}
              onClick={() => handleAction("addArtworkBtn")}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleAction("addArtworkBtn");
                  event.preventDefault();
                }
              }}
            >
              <img
                src=""
                loading="lazy"
                alt="Ajouter une exposition"
                className={`image17 ${styles["image17"]}`}
              />
            </div>
          </div>
          <div className={`divBlockArtworkList ${styles["divBlockArtworkList"]}`}>
            <div className={`divArtworkList ${styles["divArtworkList"]}`}>
              {artworks.map((artwork) => (

                /// TODO Move this code into Artwork Component
                /// TODO Add image in each artworks
                /// TODO Remove debug after test by all developers

                <div key={artwork.id} className={`divArtwork ${styles["divArtwork"]}`}>
                  <img
                    src=""
                    loading="lazy" alt="" className={`image16 ${styles["image16"]}`}/>
                  <div className={`divBlockArtworkInfos ${styles["divBlockArtworkInfos"]}`}>
                    <div className={`divArtworkChangeBtn ${styles["divArtworkChangeBtn"]}`}>
                      <h1 className={`heading13 ${styles["heading13"]}`}> {artwork.name} </h1>
                      <div className={`divModifyButtons ${styles["divModifyButtons"]}`}>
                        <div
                          role="goToChangeArtworkPageBtn"
                          tabIndex={0}
                          className={`divChangeBtn ${styles.divChangeBtn}`}
                          onClick={() => handleAction('changeButton')}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              handleAction('changeButton');
                              event.preventDefault();
                            }
                          }}
                        >
                          <img
                            src=""
                            loading="lazy"
                            alt=""
                            className={`changeBtnIcon ${styles.changeBtnIcon}`}
                          />
                        </div>
                        <div
                          role="deleteArtworkBtn"
                          tabIndex={0}
                          className={`divDeleteBtn ${styles["divDeleteBtn"]}`}
                          onClick={() => handleDeleteArtwork('deleteButton')}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              handleAction('deleteButton');
                              event.preventDefault();
                            }
                          }}
                        >
                          <img
                            src=""
                            loading="lazy"
                            alt=""
                            className={`deleteBtnIcon ${styles["deleteBtnIcon"]}`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`divBlockArtworkInformations ${styles["divBlockArtworkInformations"]}`}>
                      <div
                        className={`divArtworkInformations ${styles["divArtworkInformations"]}`}>
                        <div className={`divGeneralInformation ${styles["divGeneralInformation"]}`}>
                          // TODO put general information of a button
                        </div>
                        <div className={`artworkDescription ${styles["artworkDescription"]}`}>
                          {artwork.description}
                          <br/>
                          <br/>
                        </div>
                      </div>
                      <div className={`divBlockGoToArtworksBtn ${styles["divBlockGoToArtworksBtn"]}`}>
                        <div
                          role="button"
                          tabIndex={0}
                          className={`divGoToArtworksBtn ${styles["divGoToArtworksBtn"]}`}
                          onClick={() => handleGoToArtwork('goToArtworks', artwork)}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              handleGoToArtwork('goToArtworks', artwork);
                              event.preventDefault();
                            }
                          }}
                        >
                          <div className={`goToArtworksText ${styles["goToArtworksText"]}`}>
                            Voir l'oeuvre
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
};

export default ArtworkModificationPage;