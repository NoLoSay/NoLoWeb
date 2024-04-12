import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import { Fragment } from "react";


interface ExhibitionsProps {}

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
        "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full " +
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
        "flex items-center justify-between w-full " +
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
    return (
        <Fragment>
            <section className={`exhibitionsPage ${styles["exhibitionsPage"]}`}>
                <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                    <img src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                         loading="lazy" alt="" className={`image18 ${styles["image18"]}`}/>
                    <div className={`divTitlePage ${styles["divTitlePage"]}`}>
                        <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
                    </div>
                    <img src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                         loading="lazy" alt="" className={`image17 ${styles["image17"]}`}/>
                </div>
                <div className={`divBlockExhibitionList ${styles["divBlockExhibitionList"]}`}>
                    <div className={`divExhibitionList ${styles["divExhibitionList"]}`}>
                        <div className={`divExhibition ${styles["divExhibition"]}`}>
                            <img
                                src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                loading="lazy" alt="" className={`image16 ${styles["image16"]}`}/>
                            <div className={`divBlockExhibitionInfos ${styles["divBlockExhibitionInfos"]}`}>
                                <div className={`divExhibitionChangeBtn ${styles["divExhibitionChangeBtn"]}`}>
                                    <h1 className={`heading13 ${styles["heading13"]}`}>Exposition 1</h1>
                                    <div className={`divModifyButtons ${styles["divModifyButtons"]}`}>
                                        <div className={`divChangeBtn ${styles["divChangeBtn"]}`}>
                                            <img
                                                src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                                loading="lazy" alt=""
                                                className={`changeBtnIcon ${styles["changeBtnIcon"]}`}/>
                                        </div>
                                        <div className={`divDeleteBtn ${styles["divDeleteBtn"]}`}>
                                            <img
                                                src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                                                loading="lazy" alt=""
                                                className={`deleteBtnIcon ${styles["deleteBtnIcon"]}`}/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`divBlockExhibitionInformations ${styles["divBlockExhibitionInformations"]}`}>
                                    <div className={`divExhibitionInformations ${styles["divExhibitionInformations"]}`}>
                                        <div className={`divGeneralInformation ${styles["divGeneralInformation"]}`}>
                                            <div className={`placeText ${styles["placeText"]}`}>Chateau des tourelles
                                                Nantes
                                            </div>
                                            <div className={`dateText ${styles["dateText"]}`}>Du 22 Janvier 2022 au 16
                                                Aout 2056
                                            </div>
                                            <div className={`priceText ${styles["priceText"]}`}>6€ l'entrée</div>
                                            <div className={`artworkNbText ${styles["artworkNbText"]}`}>24 oeuvres</div>
                                        </div>
                                        <div className={`exhibitionDescription ${styles["exhibitionDescription"]}`}>
                                            Description de l'exposition : <br/><br/>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text...
                                        </div>
                                    </div>
                                    <div className={`divBlockGoToArtworksBtn ${styles["divBlockGoToArtworksBtn"]}`}>
                                        <div className={`divGoToArtworksBtn ${styles["divGoToArtworksBtn"]}`}>
                                            <div className={`goToArtworksText ${styles["goToArtworksText"]}`}>Voir les oeuvres
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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