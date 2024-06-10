import React, { Fragment, useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserProvider";
import Layout from "../../components/Layout/Layout";
import textData from "../../../public/text.json";

const styles = {
  exhibitionModificationPage:
    "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  exhibitionCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
  image22: "rounded-lg w-1/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "pt-5 pb-2.5",
  descriptionText: "pt-5 pb-2.5",
  divBlockButtonModification:
    "flex w-full justify-center items-center space-x-4",
  backButton:
    "bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 cursor-pointer",
  divButtonSave:
    "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  inputStyle:
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
};

const ExhibitionModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const siteId = location.state?.siteId;
  const defaultExhibition = {
    id: null,
    name: "",
    shortDescription: "",
    longDescription: "",
    telNumber: "",
    siteId: siteId,
    picture: "https://cataas.com/cat",
    description: "",
    createdAt: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
  };

  const [exhibition, setExhibition] = useState(
    location.state?.item || defaultExhibition
  );
  useEffect(() => {
    if (location.state?.exhibition) {
      setExhibition({
        ...location.state.exhibition,
        createdAt: location.state.exhibition.createdAt
          ? new Date(location.state.exhibition.createdAt)
              .toISOString()
              .slice(0, 10)
          : new Date().toISOString().slice(0, 10),
        endDate: location.state.exhibition.endDate
          ? new Date(location.state.exhibition.endDate)
              .toISOString()
              .slice(0, 10)
          : new Date().toISOString().slice(0, 10),
      });
    }
  }, [location.state]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setExhibition((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setExhibition((prev: any) => ({ ...prev, picture: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const isNewExhibition = !exhibition.id;
    const url = isNewExhibition
      ? `http://localhost:3001/exhibitions`
      : `http://localhost:3001/exhibitions/${exhibition.id}`;

    const validStartDate = new Date(exhibition.startDate);
    const validEndDate = new Date(exhibition.endDate);

    if (!validStartDate || !validEndDate) {
      console.error("Invalid date provided");
      alert("Please provide valid dates.");
      return; // Sortie anticipée de la fonction
    }

    try {
      const response = await fetch(url, {
        method: isNewExhibition ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          name: exhibition.name,
          shortDescription: exhibition.shortDescription,
          longDescription: exhibition.longDescription,
          startDate: validStartDate,
          endDate: validEndDate,
          siteId: parseInt(exhibition.siteId, 10),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Operation successful:", responseData);
      navigate("/places");
    } catch (error) {
      console.error("Failed to update exhibition:", error);
    }
  };

  // TODO put this under exhibition image
  // <input type="file" id="imageUpload" accept="image/*" className={styles.hiddenInput}
  //                    onChange={handleImageChange}/>

  return (
    <Fragment>
      <section className={styles.exhibitionModificationPage}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={styles.exhibitionCardModification}
        >
          <div className={styles.divBlockGeneralInformations}>
            <img
              src={exhibition.picture || "https://cataas.com/cat"}
              alt="Exhibition Image"
              className={styles.image22}
              onClick={() => document.getElementById("imageUpload")?.click()}
            />
            <div className={styles.divGeneralInformations}>
              <div className={styles.textName}>
                {textData.page.screen.exhibitionModificationPage.name}
              </div>
              <input
                type="text"
                name="name"
                value={exhibition.name}
                onChange={handleInputChange}
                className={styles.inputStyle}
                placeholder="Enter exhibition name"
              />
              <div className={styles.textName}>
                {textData.page.screen.exhibitionModificationPage.phone}
              </div>
              <input
                type="text"
                name="telNumber"
                value={exhibition.telNumber}
                onChange={handleInputChange}
                className={styles.inputStyle}
                placeholder="Enter telephone number"
              />
              <div className={styles.descriptionText}>
                {
                  textData.page.screen.exhibitionModificationPage
                    .shortdescription
                }
              </div>
              <input
                type="text"
                name="shortDescription"
                value={exhibition.shortDescription}
                onChange={handleInputChange}
                className={styles.inputStyle}
                placeholder="Enter short description"
              />
              <div className={styles.descriptionText}>
                {
                  textData.page.screen.exhibitionModificationPage
                    .longdescription
                }
              </div>
              <input
                type="text"
                name="longDescription"
                value={exhibition.longDescription}
                onChange={handleInputChange}
                className={styles.inputStyle}
                placeholder="Enter long description"
              />
              <div className={styles.textName}>
                {textData.page.screen.exhibitionModificationPage.id}
              </div>
              <input
                type="number"
                name="siteId"
                value={exhibition.siteId}
                onChange={handleInputChange}
                className={styles.inputStyle}
                placeholder="Enter site ID"
              />
            </div>
          </div>
          <div className={styles.textName}>
            {textData.page.screen.exhibitionModificationPage.createdate}
          </div>
          <input
            type="date"
            name="createdAt"
            value={exhibition.createdAt}
            onChange={handleInputChange}
            className={styles.inputStyle}
          />
          <div className={styles.textName}>
            {textData.page.screen.exhibitionModificationPage.enddate}
          </div>
          <input
            type="date"
            name="endDate"
            value={exhibition.endDate}
            onChange={handleInputChange}
            className={styles.inputStyle}
          />
          <div className={styles.divBlockButtonModification}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => navigate(-1)}
            >
              {textData.page.screen.exhibitionModificationPage.back}
            </button>
            <button type="submit" className={styles.divButtonSave}>
              Save
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

ExhibitionModificationPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default ExhibitionModificationPage;
