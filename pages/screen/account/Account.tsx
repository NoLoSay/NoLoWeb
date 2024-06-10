import React, { Fragment, ReactNode, useContext } from "react";
import Head from "../../../node_modules/next/head";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/Account/GenericCard/GenericCard";
import { ButtonBase, Divider } from "@mui/material";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import testProfile from "../../../stories/assets/testProfile.json"
import CategoryButton from "../../components/Account/CategoryButton/CategoryButton";
import locationData from "../../components/Account/LocationCard/example.json"
import LocationCard from "../../components/Account/LocationCard/LocationCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountSelector from "../../components/Account/AccountSelector/AccountSelector";
import { UserContext } from "../../../contexts/UserProvider";

const styles: { [key: string]: string } = {
  container_0: "grid grid-cols-3 gap-4 text-black w-4/5 mx-auto my-10",
  container_1: "flex flex-col space-y-5 items-center p-5",
  container_2: "flex flex-ro space-x-5 my-10 px-5",
  container_3: "space-y-3 m-5",
  container_4: "space-y-3 m-5",
  container_5: "font-bold text-xs",
  container_6: "col-span-2 space-y-5 items-center -mt-96",
  container_7: "flex flex-row justify-between ",
  container_8: "flex p-3 rounded-lg items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20",
  container_9: "flex flex-col space-y-5"
};

type BigButtonProps = {
  label: string;
  textSize: string;
  onClick?: () => void;
};

const BigButton = ({ label, textSize, onClick }: BigButtonProps) => {
  return (
    <ButtonBase
      className={"shadow-lg items-center rounded-lg font-sans font-bold p-5 w-full" + ' ' + textSize}
      onClick={onClick}
    >
      {label}
    </ButtonBase>
  )
}

const Account = () => {
  const location = useLocation();
  const { isPlace } = location.state || {};
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className={`container_0 ${styles.container_0}`}>
        <div className={`container_1 ${styles.container_1}`}>
          <h2>Rechercher des oeuvres par :</h2>
          <BigButton label="Recherche personnalisée" textSize="text-2xl" />
          <BigButton label="Villes" textSize="text-2xl" />
          <BigButton label="Lieux" textSize="text-2xl" />
        </div>
        <div>
          <GenericCard title="Créer une vidéo" text="The Issues panel now warns you about the cookies that will be affected by the upcoming deprecation and phaseout of third-party cookies." imgPath="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2023/07/shutterstock_pricing_plan_demystified_cover.jpg?resize=1250,1120" />
          <div className={`container_2 ${styles.container_2}`}>
            {isPlace ? (
              <>
                <BigButton label="Mes expositions" textSize="text-3xl"  onClick={() => navigate("/exhibitions")}/>
                <BigButton label="Mes enregistrements" textSize="text-3xl" />
              </>
            ) : (
              <>
                <BigButton label="Mes vidéos" textSize="text-3xl" />
                <BigButton label="Mes enregistrements" textSize="text-3xl" />
              </>
            )}
          </div>
        </div>
        <div>
          <ProfileCard email={user.email} fullName={user.username} phone={user.telNumber} profilePicturePath={testProfile.profilePicturePath} />
          <div className={`container_3 ${styles.container_3}`}>
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Mon compte" onClick={() => navigate("/accountSettings")} />
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Biométrie" />
            <AccountSelector accountsList={["mail1@gmail.com", "mail2@hotmail.fr", "mail3@Aol.us"]}/>
            <CategoryButton altColor text="Se déconnecter" />
          </div>
          <div className={`container_4 ${styles.container_4}`}>
            <p className={`container_5 ${styles.container_5}`}>Plus d'information</p>
            <CategoryButton text="Aide et support" />
            <CategoryButton text="A propos de l'app" onClick={() => navigate("/about")}/>
            <CategoryButton text="Conditions Générales d'Utilisation" />
          </div>
        </div>
        <div className={`container_6 ${styles.container_6}`}>
          <div className={`container_7 ${styles.container_7}`}>
          <h2>Lieux modérables</h2>
            <ButtonBase disableRipple onClick={() => navigate("/places")}>
              <div className={`container_8 ${styles.container_8}`}>
                Voir tout
              </div>
            </ButtonBase>
          </div>
          <div className={`container_9 ${styles.container_9}`}>
            <Divider/>
          <LocationCard cardInfo={locationData[0]} />
          <LocationCard cardInfo={locationData[1]} />
          </div>
        </div>
      </div>

    </Fragment>
  );
};

Account.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Account;
