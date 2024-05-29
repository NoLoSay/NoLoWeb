import { Fragment, ReactNode, useContext } from "react";
import Head from "../../../node_modules/next/head";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";
import { Button, ButtonBase, Divider } from "@mui/material";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import testProfile from "../../../stories/assets/testProfile.json"
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import GraphCard from "../../components/GraphCard/GraphCard";
import locationData from "../../components/LocationCard/example.json"
import LocationCard from "../../components/LocationCard/LocationCard";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AccountSelector from "../../components/AccountSelector/AccountSelector";
import { UserContext } from "../../../contexts/UserProvider";

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
      <Head>
        <title>Nolosay</title>
      </Head>

      <div className="grid grid-cols-3 gap-4 text-black w-4/5 mx-auto my-10">

        <div className="flex flex-col space-y-5 items-center p-5">
          <h2>Rechercher des oeuvres par :</h2>
          <BigButton label="Recherche personnalisée" textSize="text-2xl" />
          <BigButton label="Villes" textSize="text-2xl" />
          <BigButton label="Lieux" textSize="text-2xl" />
        </div>

        <div>
          <GenericCard title="Créer une vidéo" text="The Issues panel now warns you about the cookies that will be affected by the upcoming deprecation and phaseout of third-party cookies." imgPath="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2023/07/shutterstock_pricing_plan_demystified_cover.jpg?resize=1250,1120" />
          <div className="flex flex-ro space-x-5 my-10 px-5">
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
          <div className="space-y-3 m-5">
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Mon compte" onClick={() => navigate("/accountSettings")} />
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Biométrie" />
            <AccountSelector accountsList={["mail1@gmail.com", "mail2@hotmail.fr", "mail3@Aol.us"]}/>
            <CategoryButton altColor text="Se déconnecter" />
          </div>
          <div className="space-y-3 m-5">
            <p className="font-bold text-xs">Plus d'information</p>
            <CategoryButton text="Aide et support" />
            <CategoryButton text="A propos de l'app" onClick={() => navigate("/about")}/>
            <CategoryButton text="Conditions Générales d'Utilisation" />
          </div>
        </div>
        <div className="col-span-2 space-y-5 items-center -mt-96">
          <div className="flex flex-row justify-between ">
          <h2>Lieux modérables</h2>
          {/**<Button onClick={() => navigate("/findLocation")} variant="contained">
            Voir tout
          </Button>**/}
          </div>
          <div className="flex flex-col space-y-5">
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
