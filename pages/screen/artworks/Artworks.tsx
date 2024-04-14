import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import { Fragment } from "react";
import { useLocation } from 'react-router-dom';

interface ArtworksProps {}

const styles: { [key: string]: string } = {
    divBlockTitlePage:
        "text-black justify-between items-center flex mb-12 px-8 " +
        "md:flex-row md:items-center md:justify-between md:px-3 " +
        "sm:items-center",
    image18:
        "w-12 h-12 " +
        "sm:w-6 sm:h-6",
    image17:
        "w-12 h-12 " +
        "sm:w-6 sm:h-6",
    divTitlePage: "justify-between items-center flex",
    pageTitle:
        "justify-center items-center flex " +
        "md:flex-row md:items-center md:justify-center " +
        "sm:flex-col sm:items-center ",
    divBlockArtworkList:
        "text-black w-full px-8 " +
        "md:px-3 " +
        "sm:px-5 ",
    divArtworkList: "flex flex-col w-full",
    divArtwork:
        "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full mb-10 " +
        "md:flex-col md:items-center " +
        "sm:flex-col sm:items-start ",
    image16:
        "w-36 h-36 " +
        "md:w-full " +
        "sm:w-full",
    divBlockArtworkInfos:
        "flex-1 w-full " +
        "sm:items-start pl-5 " +
        "md:pl-5 sm:pl-0",
    divArtworkChangeBtn:
        "flex flex-row items-center justify-between mb-5 w-full " +
        "sm:flex-row sm:items-center " +
        "md:flex-row md:justify-between",
    divModifyButtons: "flex flex-row",
    heading13:
        "m-0 self-center " +
        "sm:text-center",
    changeBtnIcon:
        "h-10 w-10 " +
        "sm:h-5 sm:w-5",
    deleteBtnIcon:
        "h-10 w-10 " +
        "sm:h-5 sm:w-5",
    divBlockArtworkInformations:
        "flex flex-row w-full items-center " +
        "sm:flex-col " +
        "md:flex-row md:justify-between",
    divArtworkInformations:
        "flex flex-col gap-x-2.5 gap-y-2.5 pr-5 w-full " +
        "sm:items-start " +
        "md:flex-col md:justify-between",
    divGeneralInformation:
        "flex items-start justify-between w-full " +
        "md:flex-col md:items-start md:justify-between " +
        "sm:flex-col sm:items-start",
    artworkDescription:
        "flex-[0_auto] pr-0 text-justify w-full " +
        "sm:text-start",
    divBlockGoToArtworksBtn:
        "flex flex-col items-center justify-between flex-none",
};

const ArtworksPage: React.FC<HomeProps> & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {

    const handleAction = (buttonName: string, artworkId: number) => {
        console.log(`Le bouton ${buttonName} a été cliqué pour l'artwork ${artworkId}! `);
    };

    const handleBack = () => {
        console.log('go to previous page');
    };

    const handleAddArtwork = () => {
        console.log('createArtwork');
    };

    const location = useLocation();
    console.log('Received state at ArtworksPage:', location.state);
    const { items: artworks } = location.state || {};
    console.log('Artworks:', artworks);
    return (
        <Fragment>
            <section className={`artworksPage ${styles["artworksPage"]}`}>
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
                        <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
                    </div>
                    <div
                        role="addArtworkBtn"
                        tabIndex={0}
                        className={`addArtworkBtn ${styles["addArtworkBtn"]}`}
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
                                                onClick={() => handleAction('changeButton', artwork.id)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleAction('changeButton', artwork.id);
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
                                                onClick={() => handleAction('deleteButton', artwork.id)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleAction('deleteButton', artwork.id);
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
                                                <div className={`artworkNbText ${styles["artworkNbText"]}`}>nb oeuvres
                                                </div>
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
                                                onClick={() => handleAction('goToArtworks', artwork.id)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleAction('goToArtworks', artwork.id);
                                                        event.preventDefault();
                                                    }
                                                }}
                                            >
                                                <div className={`goToArtworksText ${styles["goToArtworksText"]}`}>
                                                    Voir les oeuvres
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

ArtworksPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default ArtworksPage;