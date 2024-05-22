import { Fragment, ReactNode, useState, useContext } from "react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import SettingsProfileForm from "../../components/SettingsProfileForm/SettingsProfileForm";
import MiniProfileCard from "../../components/MiniProfileCard/MiniProfileCard";
import SettingsLocationForm from "../../components/SettingsLocationForm/SettingsLocationForm";
import SettingsTeamAdminForm from "../../components/SettingsTeamAdminForm/SettingsTeamAdminForm";
import SettingsNotificationsForm from "../../components/SettingsNotificationsForm/SettingsNotificationsForm";
import { UserContext } from "../../../contexts/UserProvider";

type BigButtonProps = {
  label: string;
  textSize: string;
};

const FormTab = [
  <SettingsProfileForm />,
  <SettingsLocationForm />,
  <SettingsTeamAdminForm />,
  <SettingsNotificationsForm />
]



const AccountSettigns = () => {
  const location = useLocation();
  const { isPlace } = location.state || {};
  const [currentForm, setCurrentForm] = useState(0)
  const { user, setUser } = useContext(UserContext);

  function handleFormChange(nextForm: number) {
    setCurrentForm(nextForm);
  }

  return (
    <Fragment>
      <Head>
        <title>Nolosay</title>
      </Head>
      <div className="flex w-4/6  mx-auto my-3">
        <MiniProfileCard name="John Doe" userId={user.username} />
      </div>
      <div className="grid grid-cols-4 gap-4 text-black w-4/6 mx-auto my-10">
        <SideMenu handleChangeForm={handleFormChange}/>
        <div className="col-span-3">
          {FormTab[currentForm]}
        </div>
      </div>
    </Fragment>
  );
};

AccountSettigns.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default AccountSettigns;
