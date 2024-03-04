import { Fragment } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";
import { ButtonBase } from "@mui/material";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import testProfile from "../../../stories/components/assets/testProfile.json"
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import GraphCard from "../../components/GraphCard/GraphCard";

const BigButton = ({ label, textSize }: any) => {
  return (
    <ButtonBase
      className={"shadow-lg items-center rounded-lg font-sans font-bold p-5 w-full" + ' ' + textSize}
    >
      {label}
    </ButtonBase>
  )
}

const Account = () => {
  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className="grid grid-cols-3 gap-4 text-black w-4/5 mx-auto my-10">
        <div className="flex flex-col space-y-5 items-center m-5">
          <h2>Rechercher des oeuvres par :</h2>
          <BigButton label="Recherche personnalisée" textSize="text-5xl" />
          <BigButton label="Villes" textSize="text-5xl" />
          <BigButton label="Lieux" textSize="text-5xl" />
          <GraphCard title="Nombre de vues de la semaine" value="49327"/>
        </div>
        <div>
          <GenericCard title="Créer une vidéo" text="The Issues panel now warns you about the cookies that will be affected by the upcoming deprecation and phaseout of third-party cookies." imgPath="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2023/07/shutterstock_pricing_plan_demystified_cover.jpg?resize=1250,1120" />
          <div className="flex flex-ro space-x-5 my-10">
            <BigButton label="Mes vidéos" textSize="text-3xl" />
            <BigButton label="Mes enregistrements" textSize="text-3xl" />
          </div>
          <GraphCard title="Profit du mois" value="20441"/>

        </div>
        <div>
          <ProfileCard infos={testProfile} />
          <div className="space-y-3 m-5">
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Mon compte" />
            <CategoryButton altColor description="Faire des changements sur mon compte" text="Biométrie" />
            <CategoryButton altColor text="Se déconnecter" />
          </div>
          <div className="space-y-3 m-5">
            <p className="font-bold text-xs">Plus d'information</p>
            <CategoryButton text="Aide et support" />
            <CategoryButton text="A propos de l'app" />
            <CategoryButton text="Conditions Générales d'Utilisation" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Account.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Account;
