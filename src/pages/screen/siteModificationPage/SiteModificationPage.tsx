import Layout from "../../components/Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useState, useContext, useEffect } from "react";
import { UserContext } from "@global/contexts/UserProvider";
import textData from "@public/text.json";

const styles = {
  siteModificationPage: "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  siteCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
  image22: "rounded-lg w-1/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "pt-5 pb-2.5",
  textInput:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  divBlockButtonModification:
    "flex w-full justify-center items-center space-x-4",
  divButtonSave:
    "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  backButton:
    "bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 cursor-pointer",
};

const SiteModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const initialSite =
    Array.isArray(location.state?.site) && location.state.site.length > 0
      ? location.state.site[0]
      : {
        id: 1,
        name: "",
        shortDescription: "",
        longDescription: "",
        telNumber: "",
        email: "",
        website: "",
        price: 0,
        picture: "",
        type: "MUSEUM",
        tags: [],
        address: {
          houseNumber: "",
          street: "",
          zip: "",
          otherDetails: "",
          longitude: 0,
          latitude: 0,
          cityId: 0,
        },
      };

  const [site, setSite] = useState(initialSite);

  useEffect(() => {
    if (!site || !site.id) {
      navigate("/places");
    }
  }, [site, navigate]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setSite({ ...site, [name]: value });
  };

  const handleSubmit = async () => {
    if (!site.id) {
      console.error("Site ID is missing. Cannot update an unknown site.");
      return;
    }

    const url = `https://api.nolo.aurelenc.com/sites/${site.id}`;

    const bodyContent = {
      name: site.name,
      shortDescription: site.shortDescription,
      longDescription: site.longDescription,
      telNumber: site.telNumber,
      email: site.email,
      website: site.website,
      price: parseFloat(site.price),
      picture: site.picture,
      type: site.type,
      tags: site.tags,
      address: {
        houseNumber: site.address.houseNumber,
        street: site.address.street,
        zip: site.address.zip,
        otherDetails: site.address.otherDetails,
        longitude: parseFloat(site.address.longitude),
        latitude: parseFloat(site.address.latitude),
        cityId: parseInt(site.address.city.id, 10),
      },
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(bodyContent),
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      navigate("/places");
    } catch (error) {
      console.error("Failed to update site:", error);
    }
  };
  return (
    <Fragment>
      <section className={styles.siteModificationPage}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={styles.siteCardModification}
        >
          <div className={styles.divBlockGeneralInformations}>
            <img
              src={site.picture || "https://cataas.com/cat"}
              loading="lazy"
              alt="Site Image"
              className={styles.image22}
            />
            <div className={styles.divGeneralInformations}>
              <div className={styles.textName}>
                {textData.page.screen.siteModificationPage.name}
              </div>
              <input
                type="text"
                className={styles.textInput}
                name="name"
                value={site.name}
                onChange={handleInputChange}
                placeholder={textData.page.screen.siteModificationPage.pname}
              />
              <div className={styles.textName}>
                {textData.page.screen.siteModificationPage.phone}
              </div>
              <input
                type="text"
                className={styles.textInput}
                name="telNumber"
                value={site.telNumber}
                onChange={handleInputChange}
                placeholder={textData.page.screen.siteModificationPage.pphone}
              />
              <div className={styles.textName}>
                {textData.page.screen.siteModificationPage.email}
              </div>
              <input
                type="email"
                className={styles.textInput}
                name="email"
                value={site.email}
                onChange={handleInputChange}
                placeholder={textData.page.screen.siteModificationPage.pemail}
              />
              <div className={styles.textName}>
                {textData.page.screen.siteModificationPage.website}
              </div>
              <input
                type="url"
                className={styles.textInput}
                name="website"
                value={site.website}
                onChange={handleInputChange}
                placeholder={textData.page.screen.siteModificationPage.pwebsite}
              />
            </div>
          </div>
          <div className={styles.divBlockGeneralInformations}>
            <div className={styles.textName}>
              {textData.page.screen.siteModificationPage.price}
            </div>
            <input
              type="number"
              className={styles.textInput}
              name="price"
              value={site.price}
              onChange={handleInputChange}
              placeholder={textData.page.screen.siteModificationPage.pprice}
            />
            <div className={styles.textName}>
              {textData.page.screen.siteModificationPage.details}
            </div>
            <input
              type="text"
              className={styles.textInput}
              name="address.otherDetails"
              value={site.address.otherDetails}
              onChange={handleInputChange}
              placeholder={textData.page.screen.siteModificationPage.pdetails}
            />
          </div>
          <div className={styles.divBlockGeneralInformations}>
            <div className={styles.textName}>
              {textData.page.screen.siteModificationPage.street}
            </div>
            <input
              type="text"
              className={styles.textInput}
              name="address.street"
              value={site.address.street}
              onChange={handleInputChange}
              placeholder={textData.page.screen.siteModificationPage.pstreet}
            />
            <div className={styles.textName}>
              {textData.page.screen.siteModificationPage.numberStreet}
            </div>
            <input
              type="text"
              className={styles.textInput}
              name="address.houseNumber"
              value={site.address.houseNumber}
              onChange={handleInputChange}
              placeholder={
                textData.page.screen.siteModificationPage.pnumberStreet
              }
            />
            <div className={styles.textName}>
              {textData.page.screen.siteModificationPage.cityCode}
            </div>
            <input
              type="text"
              className={styles.textInput}
              name="address.zip"
              value={site.address.zip}
              onChange={handleInputChange}
              placeholder={textData.page.screen.siteModificationPage.pcityCode}
            />
          </div>
          <div className={styles.divBlockButtonModification}>
            <button type="submit" className={styles.divButtonSave}>
              {textData.page.screen.siteModificationPage.save}
            </button>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => navigate(-1)}
            >
              {textData.page.screen.siteModificationPage.back}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

SiteModificationPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default SiteModificationPage;
