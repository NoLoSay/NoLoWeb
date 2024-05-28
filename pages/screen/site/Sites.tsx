import React, {Fragment, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../../../contexts/UserProvider";
interface SitesProps {}

const styles: { [key: string]: string } = {
  divBlockTitlePage:
    "text-black justify-between items-center flex mb-12 px-8 " +
    "md:flex-row md:items-center md:justify-between md:px-3 " +
    "sm:items-center",
  image18:
    "w-12 h-12 " +
    "sm:w-6 sm:h-6",
  divTitlePage: "justify-between items-center flex",
  pageTitle:
    "justify-center items-center flex " +
    "md:flex-row md:items-center md:justify-center " +
    "sm:flex-col sm:items-center ",
  divExhibition:
    "shadow-xl flex flex-row items-center justify-start p-5 rounded-lg w-full mb-10 " +
    "md:flex-col md:items-center " +
    "sm:flex-col sm:items-start ",
};

const Sites: React.FC<SitesProps> = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch('http://localhost:3001/sites', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch sites: ${response.status}`);
        }
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching sites:', error);
      }
    };

    if (user && user.accessToken) {
      fetchSites();
    }
  }, [user]);


  const handleAction = async (buttonName: string, siteId:any) => {
   switch (buttonName) {
      case "goToModificationSite":
        const place = places.filter((place: any) => place.id === siteId);        
        navigate('/places/modificationPlace', { state: { site: place }});
        break;
      case "returnToPreviousPageBtn":
       navigate('/account');
        break;
      case 'handleGoToExhibitions':
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
          const filteredExhibitions = exhibitions.filter((exhibition:any) => exhibition.site.id === siteId);
          navigate('/places/exhibitions', { state: { item: filteredExhibitions } });
        } catch (error) {
          console.error('Failed to fetch exhibition details:', error);
        }
        break;
    }
  };

  return (
    <Fragment>
      <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
        <div
          role="returnToPreviousPageBtn"
          tabIndex={0}
          className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
          onClick={() => handleAction('returnToPreviousPageBtn', 0)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleAction('returnToPreviousPageBtn', 0);
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
          <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes sites d'expositions</h1>
        </div>
        <div
          role="addSiteBtn"
          tabIndex={0}
          className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
          onClick={() => handleAction("modificationSite", 0)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleAction("modificationSite", 0);
              event.preventDefault();
            }
          }}
        >
        </div>
      </div>

      <section className="flex flex-col w-full text-black">
        {places.map((site:any) => (
          <div key={site.id} className="flex flex-row items-center justify-start p-5 shadow-xl rounded-lg mb-10">
            <img src={site.picture} alt={site.name} className="w-36 h-36 md:w-full sm:w-full object-cover"/>

            <div className="flex-1 pl-5">
              <h1 className="text-xl font-bold">{site.name}</h1>
              <p className="text-justify">{site.longDescription}</p>
              <div className="flex flex-col mt-4">
                <span className="text-gray-600">{site.address.street}, {site.address.zip}</span>
                <span className="text-gray-600">{site.telNumber}</span>
                <span className="text-gray-600">{site.email}</span>
                <span className="text-gray-600">{site.website}</span>
                <span className="text-gray-600">{site.price}€ entry</span>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => handleAction("goToModificationSite", site.id)}
                >
                  Modify Site
                </button>
                <button onClick={() => handleAction("handleGoToExhibitions", site.id)}
                        className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Voir les expositions de ce site
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Sites;