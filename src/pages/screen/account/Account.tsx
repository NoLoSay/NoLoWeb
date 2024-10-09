import React, {Fragment, ReactNode, useContext, useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import { Button, ButtonBase, Divider } from "@mui/material";
import ProfileCard from "../../components/Account/ProfileCard/ProfileCard";
import CategoryButton from "../../components/Account/CategoryButton/CategoryButton";
import LocationCard from "../../components/Account/LocationCard/LocationCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "src/global/contexts/UserProvider";

type BigButtonProps = {
  label: string;
  textSize: string;
  onClick?: () => void;
};

const BigButton = ({ label, textSize, onClick }: BigButtonProps) => {
  return (
    <ButtonBase
      className={"shadow-lg items-center rounded-md font-sans font-bold p-8 " + ' ' + textSize}
      onClick={onClick}
    >
      {label}
    </ButtonBase>
  )
}

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [places, setPlaces] = useState([]);

  console.log("user = ", user)

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

  console.log("places", places)

  return (
    <Fragment>
      <div className="w-full flex flex-row">

        <div className="w-full flex flex-col m-5">
          <div className="w-full justify-between flex flex-row text-black">

            {/*
             <ButtonBase disableRipple onClick={() => navigate("/places")}>
              <div className="flex p-3 rounded-lg items-center justify-center space-x-5 stroke-black h-full bg-yellow-100">
                Voir tout les sites d'expositions
              </div>
            </ButtonBase>
            */}

            <ButtonBase disableRipple onClick={() => navigate("/account/artworks", {state: {from: 'accountArtworks'}})}>
              <div className="flex p-3 rounded-lg items-center justify-center space-x-5 stroke-black h-full bg-yellow-100">
                Mes oeuvres
              </div>
            </ButtonBase>
            <ButtonBase disableRipple onClick={() => navigate("/artists")}>
              <div className="flex p-3 rounded-lg items-center justify-center space-x-5 stroke-black h-full bg-yellow-100">
                Voir tous les artistes
              </div>
            </ButtonBase>
            <ButtonBase disableRipple onClick={() => navigate("/artistModification")}>
              <div className="flex p-3 rounded-lg items-center justify-center space-x-5 stroke-black h-full bg-yellow-100">
                Ajouter un artiste
              </div>
            </ButtonBase>
          </div>

          <div>
            Mes sites d'expositions
            <Divider/>
            <div className="flex flex-col space-y-5 mt-5">
              {places && places.length > 0 ? (
                places.map((place) => (
                  <LocationCard
                    key={place.id}
                    cardInfo={{
                      id: place.id.toString(),
                      title: place.name,
                      description: place.longDescription,
                      imageSrc: place.pictures[0],
                      videoCountPlaceholder: "Enter video count",
                      website: place.website,
                      city: place.address.city.name,
                      location: `${place.address.houseNumber} ${place.address.street}`,
                      pathname: "/location/" + place.id
                    }}
                  />
                ))
              ) : (
                <div>Pas de site</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <ProfileCard email={user.email} fullName={user.username} phone={user.telNumber}
                       // profilePicturePath={}
          />
          <p className="text-black font-bold text-xs m-2">Plus d'informations</p>
          <CategoryButton text="Aide et support"/>
          <CategoryButton text="A propos de l'app" onClick={() => navigate("/about")}/>
          <CategoryButton text="Conditions Générales d'Utilisation"/>
        </div>
      </div>

      <div>

      </div>

    </Fragment>
  );
};

Account.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Account;