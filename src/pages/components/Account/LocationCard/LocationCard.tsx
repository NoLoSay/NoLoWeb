import React, {useContext} from "react";
import { NextPage } from "next";
import { useNavigate } from "react-router-dom";
import { ButtonBase} from "@mui/material";
import {UserContext} from "@global/contexts/UserProvider";

interface CardInfo {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  website?: string;
  city?: string;
  location?: string;
  pathname: string;
}

interface LocationCardProps {
  cardInfo: CardInfo;
}

const styles: { [key: string]: string } = {
  container:
    "flex-1 flex flex-col items-start justify-start w-full text-left text-mini text-darkslategray font-poppins mq450:h-auto",
  card: "rounded-1.5lg bg-base-white shadow-[0px_4px_9px_rgba(0,_0,_0,_0.25)] flex flex-col items-start justify-center p-5 box-border min-h-[203px] text-base-black w-full",
  cardContent:
    " flex flex-row items-center justify-start relative gap-[10px] mq450:flex-wrap w-full",
  cardImage:
    "h-[115px] w-[113px] relative rounded-md object-cover mq450:flex-1",
  cardDetails:
    "flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[138px]",
  cardTitle:
    "self-stretch relative text-inherit leading-[19px] font-bold font-inherit text-base",
  cardDescription:
    "self-stretch relative text-xs tracking-[-0.08px] leading-[16px] text-base-black m-0",
  videoCountInput:
    "w-full [border:none] [outline:none] bg-lightyellow self-stretch h-6 rounded-8xs flex flex-row items-start justify-center py-1 px-2.5 box-border font-poppins font-semibold text-2xs text-base-black min-w-[127px]",
  buttons:
    "flex p-3 rounded-lg shadow-lg bg-white items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20",
  container_0:
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 bg-white border-2 border-black shadow-2xl p-4 overflow-y-auto",
  container_1:
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col space-y-5 bg-white border-2 border-black shadow-2xl p-4 overflow-y-auto",
  container_2: "flex flex-row space-x-5",
  container_3: "flex flex-row w-full justify-between pt-5",
};

const LocationCard: NextPage<LocationCardProps> = ({ cardInfo }) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  console.log("image=", cardInfo.imageSrc.hostingUrl)

  const handleAction = async (buttonName: string, siteId:any) => {
    switch (buttonName) {
      /*
      <button
         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
         onClick={() => handleAction("goToModificationSite", site.id)}
       >
         Modify Site
       </button>

       case "goToModificationSite":
         const place = places.filter((place: any) => place.id === siteId);
         navigate('/places/modificationPlace', { state: { site: place }});
         break;
         */
      case 'handleGoToAllArtworks':
        console.log("infos", siteId)
        try {
          const url = 'http://localhost:3001/exhibitions';
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.accessToken}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP status ${response.status}: Failed to fetch exhibitions`);
          }
          const exhibitions = await response.json();
          const exhibitionIds = exhibitions.map((exhibition: { id: any; }) => exhibition.id);

          // Fetch all artworks for each exhibition
          let allArtworks: any[] = [];
          for (const id of exhibitionIds) {
            const artworksUrl = `http://localhost:3001/exhibitions/${id}/items`;
            const artworksResponse = await fetch(artworksUrl, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${user.accessToken}`,
                'Content-Type': 'application/json'
              }
            });

            if (artworksResponse.ok) {
              const artworks = await artworksResponse.json();
              allArtworks = [...allArtworks, ...artworks];
            }
          }
          console.log("allArtworks", allArtworks)
          console.log("siteId", siteId)
          navigate('/places/artworks', { state: { item: allArtworks, from: 'siteArtworks', siteId: siteId } });
        } catch (error) {
          console.error('Failed to fetch exhibition details:', error);
        }
        break;
      case 'handleGoToExhibitions':
        console.log("infos", siteId)
        try {
          const url = 'http://localhost:3001/exhibitions';
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.accessToken}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP status ${response.status}: Failed to fetch exhibitions`);
          }

          const exhibitions = await response.json();
          console.log("exhibitions", exhibitions)
          console.log("siteId", siteId)
          const filteredExhibitions = exhibitions.filter((exhibition:any) => exhibition.site.id == siteId);
          console.log("filteredExhibitions", filteredExhibitions)
          console.log("siteId", siteId)
          navigate('/places/exhibitions', { state: { item: filteredExhibitions , siteId: siteId} });
        } catch (error) {
          console.error('Failed to fetch exhibition details:', error);
        }
        break;
    }
  };

  return (
    <div>
      <div className={`container ${styles.container}`}>
        <div className={`card ${styles.card}`}>
          <div className={`cardContent ${styles.cardContent}`}>
            <img src={cardInfo.imageSrc.hostingUrl} alt={cardInfo.title} className="w-36 h-36 object-cover"/>
            <div className={`cardDetails ${styles.cardDetails}`}>
              <div className={`cardTitle ${styles.cardTitle}`}>
                <p>{cardInfo.title}</p>
                <p>{cardInfo.city}</p>
              </div>
              <div className={`cardDescription ${styles.cardDescription}`}>
                {cardInfo.description}
              </div>
            </div>
          </div>
          <div className={`container_3 ${styles.container_3}`}>
            {/**<ButtonBase disableRipple onClick={handleClick}>
             <div className={styles.buttons}>
             Voir
             </div>
             </ButtonBase>**/}
            {/*<ButtonBase disableRipple onClick={() => handleAction("handleGoToAllArtworks", cardInfo.id)}>*/}
            {/*  <div className={styles.buttons}>Voir les salles</div>*/}
            {/*</ButtonBase>*/}
            <ButtonBase disableRipple onClick={() => handleAction("handleGoToExhibitions", cardInfo.id)}>
              <div className={styles.buttons}>Voir les expositions</div>
            </ButtonBase>
            <ButtonBase disableRipple onClick={() => handleAction("handleGoToAllArtworks", cardInfo.id)}>
              <div className={styles.buttons}>Voir les oeuvres</div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
