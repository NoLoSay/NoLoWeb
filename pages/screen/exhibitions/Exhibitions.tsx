import Layout from "../../components/Layout/Layout";
import {useLocation, useNavigate} from 'react-router-dom';
import {Fragment, useContext, useState} from "react";
import {UserContext} from "../../../contexts/UserProvider";


interface ExhibitionsProps {}

const styles: { [key: string]: string } = {
    divBlockTitlePage:
        "text-black justify-between items-center flex mb-12 px-8 " +
        "md:flex-row md:items-center md:justify-between md:px-3 " +
        "sm:items-center",
    noExhibitions:
        "text-black",
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
    divBlockExhibitionList:
        "text-black w-full px-8 " +
        "md:px-3 " +
        "sm:px-5 ",
    divExhibitionList: "flex flex-col w-full",
    divExhibition:
        "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full mb-10 " +
        "md:flex-col md:items-center " +
        "sm:flex-col sm:items-start ",
    image16:
        "w-36 h-36 " +
        "md:w-full " +
        "sm:w-full",
    divBlockExhibitionInfos:
        "flex-1 w-full " +
        "sm:items-start pl-5 " +
        "md:pl-5 sm:pl-0",
    divExhibitionChangeBtn:
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
    divBlockExhibitionInformations:
        "flex flex-row w-full items-center " +
        "sm:flex-col " +
        "md:flex-row md:justify-between",
    divExhibitionInformations:
        "flex flex-col gap-x-2.5 gap-y-2.5 pr-5 w-full " +
        "sm:items-start " +
        "md:flex-col md:justify-between",
    divGeneralInformation:
        "flex items-start justify-between w-full " +
        "md:flex-col md:items-start md:justify-between " +
        "sm:flex-col sm:items-start",
    exhibitionDescription:
        "flex-[0_auto] pr-0 text-justify w-full " +
        "sm:text-start",
    divBlockGoToArtworksBtn:
        "flex flex-col items-center justify-between flex-none",
};

const Exhibition: React.FC<ExhibitionsProps> & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [exhibitions, setExhibitions] = useState(location.state?.item || []);
    const { user, setUser } = useContext(UserContext);


    const handleDeleteExhibition = async (exhibitionId) => {
        try {
            const response = await fetch(`http://localhost:3001/exhibitions/${exhibitionId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`,
                }
            });

            if (response.ok) {
                const updatedExhibitions = exhibitions.filter(exhibition => exhibition.id !== exhibitionId);
                setExhibitions(updatedExhibitions);
                console.log('Exhibition deleted successfully');
            } else {
                throw new Error(`HTTP status ${response.status}: Failed to delete the exhibition`);
            }
        } catch (error) {
            console.error('Failed to delete exhibition:', error);
        }
    };


    const handleAction = async (buttonName: string, exhibitionId) => {
        switch (buttonName) {
            case 'handleGoToArtwork':
                try {
                    const url = `http://localhost:3001/exhibitions/${exhibitionId}/items`;
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${user.accessToken}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    let artworks = [];
                    if (response.ok) {
                        artworks = await response.json();
                    } else {
                        console.error(`HTTP status ${response.status}: Failed to fetch exhibitions`);
                    }
                   navigate('/places/exhibitions/artworks', { state: { item: artworks, exhibitionId: exhibitionId } });
                } catch (error) {
                    console.error('Failed to fetch exhibition details:', error);
                    //navigate('/places/exhibitions/artworks', { state: { item: exhibitionId } });
                }
                break;
            case 'deleteButton':
                handleDeleteExhibition(exhibitionId);
                break;
            case 'changeButton':
                const exhibition = exhibitions.find(exh => exh.id === exhibitionId);
                changeExhibition(exhibition);
                break;
        }
    };

    const changeExhibition = (exhibitionsId) => {
        navigate('/places/exhibitions/exhibitionModification', { state: { item: exhibitionsId } });
    }

    const handleAddExhibition = () => {
        navigate('/places/exhibitions/exhibitionModification', { state: { item: location.state?.item[0].siteId } });
    };

    if (!exhibitions || exhibitions.length === 0) {
        return (
          <Fragment>
              <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                  <div
                    className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
                    onClick={() => navigate(-1)}
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
                    role="addExhibitionBtn"
                    tabIndex={0}
                    className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
                    onClick={() => handleAddExhibition()}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            handleAddExhibition();
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
              <div className={`noExhibitions ${styles["noExhibitions"]}`}>Aucune exposition disponible.</div>
          </Fragment>
        );
    } else
        return (
          <Fragment>
              <section className={`exhibitionsPage ${styles["exhibitionsPage"]}`}>
                  <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                      <div
                        className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
                        onClick={() => navigate(-1)}
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
                        role="addExhibitionBtn"
                        tabIndex={0}
                        className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
                        onClick={() => handleAddExhibition()}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                handleAddExhibition();
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
                  <div className={`divBlockExhibitionList ${styles["divBlockExhibitionList"]}`}>
                      <div className={`divExhibitionList ${styles["divExhibitionList"]}`}>
                          {exhibitions.map((exhibition) => (

                            /// TODO Move this code into Exhibition Component
                            /// TODO Add image in each exhibitions
                            /// TODO Remove debug after test by all developers

                            <div key={exhibition.id} className={`divExhibition ${styles["divExhibition"]}`}>
                                <img
                                  src=""
                                  loading="lazy" alt="" className={`image16 ${styles["image16"]}`}/>
                                <div className={`divBlockExhibitionInfos ${styles["divBlockExhibitionInfos"]}`}>
                                    <div className={`divExhibitionChangeBtn ${styles["divExhibitionChangeBtn"]}`}>
                                        <h1 className={`heading13 ${styles["heading13"]}`}> {exhibition.name} </h1>
                                        <div className={`divModifyButtons ${styles["divModifyButtons"]}`}>
                                            <div
                                              role="goToChangeExhibitionPageBtn"
                                              tabIndex={0}
                                              className={`divChangeBtn ${styles.divChangeBtn}`}
                                              onClick={() => handleAction('changeButton', exhibition.id)}
                                              onKeyDown={(event) => {
                                                  if (event.key === 'Enter' || event.key === ' ') {
                                                      handleAction('changeButton', exhibition.id);
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
                                              role="deleteExhibitionBtn"
                                              tabIndex={0}
                                              className={`divDeleteBtn ${styles["divDeleteBtn"]}`}
                                              onClick={() => handleAction('deleteButton', exhibition.id)}
                                              onKeyDown={(event) => {
                                                  if (event.key === 'Enter' || event.key === ' ') {
                                                      handleAction('deleteButton', exhibition.id);
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
                                      className={`divBlockExhibitionInformations ${styles["divBlockExhibitionInformations"]}`}>
                                        <div
                                          className={`divExhibitionInformations ${styles["divExhibitionInformations"]}`}>
                                            <div className={`divGeneralInformation ${styles["divGeneralInformation"]}`}>
                                                <div className={`placeText ${styles["placeText"]}`}>
                                                    {exhibition.site.address.street}, {exhibition.site.address.zip}
                                                    {exhibition.site.address.City ? `, ${exhibition.site.address.City.name}` : ''}
                                                    {exhibition.site.address.City && exhibition.site.address.City.Department ? `, ${exhibition.site.address.City.Department.name}` : ''}
                                                    {exhibition.site.address.City && exhibition.site.address.City.Department && exhibition.site.address.City.Department.Country ? `, ${exhibition.site.address.City.Department.Country.name}` : ''}
                                                </div>
                                                <div className={`dateText ${styles["dateText"]}`}>
                                                    Du {new Date(exhibition.startDate).toLocaleDateString()} <br/> Au {new Date(exhibition.endDate).toLocaleDateString()}
                                                </div>
                                                <div
                                                  className={`priceText ${styles["priceText"]}`}>{exhibition.site.price}€
                                                    l'entrée
                                                </div>
                                                <div className={`artworkNbText ${styles["artworkNbText"]}`}>nb oeuvres
                                                </div>
                                            </div>
                                            <div className={`exhibitionDescription ${styles["exhibitionDescription"]}`}>
                                                {exhibition.longDescription}
                                                <br/>
                                                <br/>
                                                {exhibition.site.name}
                                            </div>
                                        </div>
                                        <div className={`divBlockGoToArtworksBtn ${styles["divBlockGoToArtworksBtn"]}`}>
                                            <div
                                              role="button"
                                              tabIndex={0}
                                              className={`divGoToArtworksBtn ${styles["divGoToArtworksBtn"]}`}
                                              onClick={() => handleAction('handleGoToArtwork', exhibition.id)}
                                              onKeyDown={(event) => {
                                                  if (event.key === 'Enter' || event.key === ' ') {
                                                      handleAction('handleGoToArtwork', exhibition.id);
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

Exhibition.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>;
};

export default Exhibition;