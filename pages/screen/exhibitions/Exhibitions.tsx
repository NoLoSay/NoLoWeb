import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import { Fragment } from "react";


interface ExhibitionsProps {}

const staticExhibitions = [
    {
        id: 1,
        name: "Expo de Test",
        shortDescription: "Il faut bien une première à tout",
        longDescription: "On sait bien qu'elle sera ratée mais bon on s'accroche quand même",
        startDate: "2024-01-15T00:00:00.000Z",
        endDate: "2024-01-15T00:00:00.000Z",
        site: {
            id: 1,
            name: "Château d'Angers",
            shortDescription: "Un château trop bien",
            longDescription: "Je te jure! Tu as une superbe vue et je ne dis pas ça car c'est ma ville natale! Non pas du tout!",
            telNumber: "+33 2 41 86 48 77",
            price: 9.5,
            address: {
                street: "Prom. du Bout du Monde",
                zip: "49100",
                City: {
                    name: "Angers",
                    Department: {
                        name: "Maine et Loire",
                        Country: {
                            name: "France"
                        }
                    }
                }
            }
        }
    },
    {
        id: 2,
        name: "Expo d'Art Moderne",
        shortDescription: "Découvrez l'art moderne comme jamais auparavant",
        longDescription: "Cette exposition explore des œuvres modernes du 20ème siècle avec une attention particulière portée aux expressions artistiques émergentes.",
        startDate: "2024-02-20T00:00:00.000Z",
        endDate: "2024-03-20T00:00:00.000Z",
        site: {
            id: 2,
            name: "Musée des Beaux-Arts",
            shortDescription: "Un musée central à la riche histoire artistique",
            longDescription: "Situé au cœur de la ville, le musée présente une collection impressionnante qui attire les amateurs d'art du monde entier.",
            telNumber: "+33 2 41 23 50 00",
            price: 15,
            address: {
                street: "Rue de la Liberté",
                zip: "75000",
                City: {
                    name: "Paris",
                    Department: {
                        name: "Île-de-France",
                        Country: {
                            name: "France"
                        }
                    }
                }
            }
        }
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

const Exhibition: React.FC<HomeProps> & {
    getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {

    const handleChange = (buttonName: string, exhibitionId: number) => {
        console.log(`Le bouton ${buttonName} a été cliqué pour l'exhibition ${exhibitionId}! `);
    };

    return (
        <Fragment>
            <section className={`exhibitionsPage ${styles["exhibitionsPage"]}`}>
                <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                    <img src=""
                         loading="lazy" alt="" className={`image18 ${styles["image18"]}`}/>
                    <div className={`divTitlePage ${styles["divTitlePage"]}`}>
                        <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
                    </div>
                    <img src=""
                         loading="lazy" alt="" className={`image17 ${styles["image17"]}`}/>
                </div>
                <div className={`divBlockExhibitionList ${styles["divBlockExhibitionList"]}`}>
                    <div className={`divExhibitionList ${styles["divExhibitionList"]}`}>
                        {staticExhibitions.map((exhibition) => (

                            /// TODO move this code into Exhibition Component
                            /// TODO add image in exhibition

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
                                                onClick={() => handleChange('changeButton', exhibition.id)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleChange('changeButton', exhibition.id);
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
                                                onClick={() => handleChange('deleteButton', exhibition.id)}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter' || event.key === ' ') {
                                                        handleChange('deleteButton', exhibition.id);
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
                                            <div className={`divGoToArtworksBtn ${styles["divGoToArtworksBtn"]}`}>
                                                <div className={`goToArtworksText ${styles["goToArtworksText"]}`}>Voir
                                                    les oeuvres
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