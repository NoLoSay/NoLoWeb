import Layout from "../../components/Layout/Layout";
import { useNavigate } from 'react-router-dom';
import { Fragment } from "react";


interface ExhibitionCardProps {
  exhibition: {
    id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  startDate: string;
  endDate: string;
  site: {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    telNumber: string;
    email: string;
    website: string;
    price: number;
    picture: string;
    type: string;
    tags: string[];
    address: {
      id: number;
      houseNumber: string;
      street: string;
      zip: string;
      City: {
        id: number;
        name: string;
        zip: string;
        Department: {
          id: number;
          name: string;
          Country: {
            id: number;
            name: string;
          };
        };
      };
      otherDetails: string;
      longitude: number;
      latitude: number;
    };
  };
  items: {
    id: number;
    name: string;
    description: string;
    picture: string;
    relatedPerson: {
      id: number;
      name: string;
    };
    itemType: string;
  }[];
  }
}

const staticExhibitions =
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
};

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

const ExhibitionCard: React.FC<ExhibitionCardProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = (props: ExhibitionCardProps) => {
  const navigate = useNavigate();

  const handleAction = (buttonName: string, exhibitionId: number) => {
    console.log(`Le bouton ${buttonName} a été cliqué pour l'exhibition ${exhibitionId}! `);
  };

  const handleGoToArtworks = (exhibition: ExhibitionCardProps) => {
    // Naviguer vers la page Artworks et passer l'exposition complète en état
    console.log(`exxxxx = ${props.exhibition.items}`);
    navigate('/artworks', { state: { items: props.exhibition.items } });
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
          <div className={`divExhibition ${styles["divExhibition"]}`}>
            <img
              src=""
              loading="lazy" alt="" className={`image16 ${styles["image16"]}`} />
            <div className={`divBlockExhibitionInfos ${styles["divBlockExhibitionInfos"]}`}>
              <div className={`divExhibitionChangeBtn ${styles["divExhibitionChangeBtn"]}`}>
                <h1 className={`heading13 ${styles["heading13"]}`}> {props.exhibition.name} </h1>
                <div className={`divModifyButtons ${styles["divModifyButtons"]}`}>
                  <div
                    role="goToChangeExhibitionPageBtn"
                    tabIndex={0}
                    className={`divChangeBtn ${styles.divChangeBtn}`}
                    onClick={() => handleAction('changeButton', props.exhibition.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        handleAction('changeButton', props.exhibition.id);
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
                    onClick={() => handleAction('deleteButton', props.exhibition.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        handleAction('deleteButton', props.exhibition.id);
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
                      {props.exhibition.site.address.street}, {props.exhibition.site.address.zip}
                      {props.exhibition.site.address.City ? `, ${props.exhibition.site.address.City.name}` : ''}
                      {props.exhibition.site.address.City && props.exhibition.site.address.City.Department ? `, ${props.exhibition.site.address.City.Department.name}` : ''}
                      {props.exhibition.site.address.City && props.exhibition.site.address.City.Department && props.exhibition.site.address.City.Department.Country ? `, ${props.exhibition.site.address.City.Department.Country.name}` : ''}
                    </div>
                    <div className={`dateText ${styles["dateText"]}`}>
                      Du {new Date(props.exhibition.startDate).toLocaleDateString()} <br /> Au {new Date(props.exhibition.endDate).toLocaleDateString()}
                    </div>
                    <div
                      className={`priceText ${styles["priceText"]}`}>{props.exhibition.site.price}€
                      l'entrée
                    </div>
                    <div className={`artworkNbText ${styles["artworkNbText"]}`}>nb oeuvres
                    </div>
                  </div>
                  <div className={`exhibitionDescription ${styles["exhibitionDescription"]}`}>
                    {props.exhibition.longDescription}
                    <br />
                    <br />
                    {props.exhibition.site.name}
                  </div>
                </div>
                <div className={`divBlockGoToArtworksBtn ${styles["divBlockGoToArtworksBtn"]}`}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`divGoToArtworksBtn ${styles["divGoToArtworksBtn"]}`}
                    onClick={() => handleGoToArtworks(props)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        handleGoToArtworks(props);
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
        </div>

      </section>
    </Fragment>
  );
};

ExhibitionCard.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExhibitionCard;