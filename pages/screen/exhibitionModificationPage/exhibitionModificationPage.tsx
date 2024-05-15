import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import {useLocation, useNavigate} from 'react-router-dom';
import {Fragment, useState, useContext} from "react";
import {UserContext} from "../../../contexts/UserProvider";

const styles: { [key: string]: string } = {
  exhibitionModificationPage: "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  exhibitionCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row " +
    "sm:flex-col",
  image22: "rounded-lg w-1/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "pt-5 pb-2.5",
  artistName: "pt-5 pb-2.5",
  createdAtText: "pt-5 pb-2.5",
  descriptionText: "pt-5 pb-2.5",
  divBlockDescription: "w-full",
  divBlockButtonModification: "flex w-full justify-center items-center space-x-4",
  divButtonDontSave: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer",
  divButtonSave: "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  nameInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  descriptionInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  artistNameInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
  dateInput: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
};

const ExhibitionModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const initialExhibition = location.state?.item || {
    name: '',
    shortDescription: '',
    longDescription: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    siteId: 0, // Default or dynamic site ID needed
  };

  const [exhibition, setExhibition] = useState(initialExhibition);

  console.log('Exhibition:', exhibition);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExhibition({ ...exhibition, [name]: value });
  };

  const handleSubmit = async () => {
    const method = exhibition.id ? 'PUT' : 'POST';
    const url = `http://localhost:3001/exhibitions${exhibition.id ? `/${exhibition.id}` : ''}`;

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.accessToken}`
        },
        body: JSON.stringify({
          name: exhibition.name,
          shortDescription: exhibition.shortDescription,
          longDescription: exhibition.longDescription,
          startDate: exhibition.startDate,
          endDate: exhibition.endDate,
          siteId: exhibition.siteId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Operation successful:', responseData);
      navigate('/places'); // Redirect after successful operation
    } catch (error) {
      console.error('Failed to update exhibition:', error);
    }
  };

  const resetFields = () => {
    setExhibition({
      name: '',
      description: '',
      longDescription: '',
      shortDescription: '',
      startDate: new Date().toISOString(), // Ensuring the date is always set to now
      endDate: new Date().toISOString(),   // Assuming you might also have an end date
      artistName: '',                      // Clearing the artist name
      createdAt: new Date().toISOString(), // Resetting created at date to current time
      secondaryInformation: '',
      siteId: 0,                           // Assuming default siteId as 0, adjust as necessary
      typeId: 0,                           // Resetting typeId to 0, or some other sensible default
      picture: 'https://cataas.com/cat',   // Default picture URL
      relatedPerson: {
        id: '',
        name: ''
      },
    });
  };
  return (

    <Fragment>
      <section className={`exhibitionModificationPage ${styles["exhibitionModificationPage"]}`}>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }} className={`exhibitionCardModification ${styles["exhibitionCardModification"]}`}>
          <div className={styles.divBlockGeneralInformations}>
            <img src={exhibition.picture ? exhibition.picture : 'https://cataas.com/cat'}
                 loading="lazy" alt="Exhibition Image" className={styles.image22}/>
            <div className={styles.divGeneralInformations}>
              <div className={styles.nameBlockInput}>
                <div className={styles.textName}>Name :</div>
                <input type="text" className={styles.nameInput}
                       name="name"
                       value={exhibition.name}
                       onChange={(e) => handleInputChange(e)}
                       placeholder="Enter exhibition name"/>
              </div>

              <div className={styles.artistBlockName}>
                <div className={styles.artistName}>Artist Name :</div>
                <input type="text" className={styles.artistNameInput}
                       name="artistName"
                       value={exhibition.artistName}
                       onChange={(e) => handleInputChange(e)}
                       placeholder="Enter artist name"/>
              </div>

              <div className={styles.dateOfCreationBlock}>
                <div className={styles.createdAtText}>Created at :</div>
                <input type="date" className={styles.dateInput}
                       name="createdAt"
                       value={exhibition.createdAt ? new Date(exhibition.createdAt).toISOString().substring(0, 10) : ''}
                       onChange={(e) => handleInputChange(e)}
                       placeholder="Select creation date"/>
              </div>
            </div>
          </div>
          <div className={styles.divBlockDescription}>
            <div className={styles.descriptionText}>Description :</div>
            <input type="text" className={styles.descriptionInput}
                   name="description"
                   value={exhibition.description}
                   onChange={(e) => handleInputChange(e)}
                   placeholder="Enter exhibition description"/>
            <div className={styles.descriptionText}>Long Description :</div>
            <input type="text" className={styles.descriptionInput}
                   name="longDescription"
                   value={exhibition.longDescription}
                   onChange={(e) => handleInputChange(e)}
                   placeholder="Enter long exhibition description"/>
            <div className={styles.descriptionText}>Short Description :</div>
            <input type="text" className={styles.descriptionInput}
                   name="shortDescription"
                   value={exhibition.shortDescription}
                   onChange={(e) => handleInputChange(e)}
                   placeholder="Enter short exhibition description"/>
          </div>

          <div className={styles.divBlockSecondaryInformation}>
            <div className={styles.secondaryInformation}>Secondary Information:</div>
            <input type="text" className={styles.secondaryInfoInput}
                   name="secondaryInformation"
                   value={exhibition.secondaryInformation}
                   onChange={(e) => handleInputChange(e)}
                   placeholder="Enter secondary information"/>
          </div>

          <div className={styles.divBlockGeneralInformations}>
            <div className={styles.textName}>Site ID:</div>
            <input type="number" className={styles.nameInput}
                   name="siteId"
                   value={exhibition.siteId}
                   onChange={(e) => handleInputChange(e)}
                   placeholder="Enter Site ID"/>
          </div>

          <div className={`divBlockButtonModification ${styles["divBlockButtonModification"]}`}>
            <button type="submit" className={`divButtonSave ${styles["divButtonSave"]}`}>Save</button>
          </div>
        </form>
      </section>
    </Fragment>

  );
};

ExhibitionModificationPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ExhibitionModificationPage;