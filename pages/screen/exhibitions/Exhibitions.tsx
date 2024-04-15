import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import { useNavigate } from 'react-router-dom';
import { Fragment } from "react";
import * as objectorarray from "objectorarray";


interface ExhibitionsProps {}

const staticExhibitions = [
    {
        "id": 1,
        "name": "Expo de Test",
        "shortDescription": "Il faut bien une permière a tout",
        "longDescription": "On sait bien qu'elle sera rété mais bon on s'accroche quand meme",
        "startDate": "2024-01-15T00:00:00.000Z",
        "endDate": "2024-01-15T00:00:00.000Z",
        "site": {
            "id": 1,
            "name": "Château d'Angers",
            "shortDescription": "Un chateau trop bien",
            "longDescription": "Je te jure! Tu as une superbe vue et je dis pas ca car c'est ma ville natale ! Non pas du tout !",
            "telNumber": "+33 2 41 86 48 77",
            "email": null,
            "website": null,
            "price": 9.5,
            "picture": null,
            "type": "MUSEUM",
            "tags": [
                "DISABILITY_FRIENDLY",
                "DEAF_FRIENDLY"
            ],
            "address": {
                "id": 1,
                "houseNumber": "2",
                "street": " Prom. du Bout du Monde",
                "zip": "49100",
                "City": {
                    "id": 1,
                    "name": "Angers",
                    "zip": "49000",
                    "Department": {
                        "id": 1,
                        "name": "Maine et Loire",
                        "Country": {
                            "id": 1,
                            "name": "France"
                        }
                    }
                },
                "otherDetails": "",
                "longitude": 491,
                "latitude": 491
            }
        },
        "items": [
            {
                "id": 1,
                "name": "La tete d'un Epoutanflus",
                "description": "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
                "picture": null,
                "relatedPerson": {
                    "id": 1,
                    "name": "Max Verstappen"
                },
                "itemType": null
            },
            {
                "id": 2,
                "name": "La tete d'un Epoutanflus",
                "description": "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
                "picture": null,
                "relatedPerson": {
                    "id": 1,
                    "name": "Max Verstappen"
                },
                "itemType": null
            }
        ]
    },
    {
        "id": 2,
        "name": "Expo de Test",
        "shortDescription": "Il faut bien une permière a tout",
        "longDescription": "On sait bien qu'elle sera rété mais bon on s'accroche quand meme",
        "startDate": "2024-01-15T00:00:00.000Z",
        "endDate": "2024-01-15T00:00:00.000Z",
        "site": {
            "id": 1,
            "name": "Château d'Angers",
            "shortDescription": "Un chateau trop bien",
            "longDescription": "Je te jure! Tu as une superbe vue et je dis pas ca car c'est ma ville natale ! Non pas du tout !",
            "telNumber": "+33 2 41 86 48 77",
            "email": null,
            "website": null,
            "price": 9.5,
            "picture": null,
            "type": "MUSEUM",
            "tags": [
                "DISABILITY_FRIENDLY",
                "DEAF_FRIENDLY"
            ],
            "address": {
                "id": 1,
                "houseNumber": "2",
                "street": " Prom. du Bout du Monde",
                "zip": "49100",
                "City": {
                    "id": 1,
                    "name": "Angers",
                    "zip": "49000",
                    "Department": {
                        "id": 1,
                        "name": "Maine et Loire",
                        "Country": {
                            "id": 1,
                            "name": "France"
                        }
                    }
                },
                "otherDetails": "",
                "longitude": 491,
                "latitude": 491
            }
        },
        "items": [
            {
                "id": 1,
                "name": "La tete d'un Epoutanflus",
                "description": "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
                "picture": null,
                "relatedPerson": {
                    "id": 1,
                    "name": "Max Verstappen"
                },
                "itemType": null
            },
            {
                "id": 2,
                "name": "La tete d'un Epoutanflus",
                "description": "Une relique datant de l'age epoustanflesque decouverte par Verstappen en attendant que ses concurents finissent la course...",
                "picture": null,
                "relatedPerson": {
                    "id": 1,
                    "name": "Max Verstappen"
                },
                "itemType": null
            }
        ]
    }
];

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

    const handleAction = (buttonName: string, exhibitionId: number) => {
        console.log(`Le bouton ${buttonName} a été cliqué pour l'exhibition ${exhibitionId}! `);
    };

    const handleGoToArtworks = (exhibition) => {
        // Naviguer vers la page Artworks et passer l'exposition complète en état
        console.log(`exxxxx = ${exhibition.items}`);
        navigate('/artworks',  { state: { items: exhibition.items } });
    };


    const handleBack = () => {
        console.log('go to previous page');
    };

    const handleAddExhibition = () => {
        console.log('createExhibition');
    };

    return (
        <Fragment>
            <section className={`exhibitionsPage ${styles["exhibitionsPage"]}`}>
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
                        {staticExhibitions.map((exhibition) => (

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
                                                onClick={() => handleGoToArtworks(exhibition)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleGoToArtworks(exhibition);
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