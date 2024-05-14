import Layout from "../../components/Layout/Layout";
import Home from "../home/Home";
import {useLocation, useNavigate} from 'react-router-dom';
import {Fragment, useState} from "react";

const styles: { [key: string]: string } = {
  artworkModificationPage: "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  artworkCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
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

const ArtworkModificationPage: React.FC<ArtworkModificationPageProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode;
} = () => {

  const location = useLocation();
  console.log('Received state at ArtworksPage:', location.state);
  const [artwork, setArtwork] = useState(location.state?.items || {});
  console.log('Artworks:', artwork);

  console.log('Artworks:', artwork);

  const resetFields = () => {
    // TODO reset filter
  };

  const updateArtwork = async () => {
    try {
      const response = await axios.put('/items', {
        name: artwork.name,
        description: artwork.description,
        picture: artwork.picture,
        relatedPersonId: artwork.relatedPerson.id,
        itemTypeId: artwork.typeId
      });
      console.log('Update response:', response);
    } catch (error) {
      console.error('Failed to update artwork:', error);
    }
  };

  const modifyArtwork = () => {
    console.log("Saving changes:", artwork);
    resetFields();
  };

  const handleAction = (buttonName : string) => {
    console.log(`Le bouton ${buttonName} a été cliqué ! `);
    if (buttonName === 'save') {
      modifyArtwork();
    } else if (buttonName === 'dontSave') {
      resetFields();
    }
  };

  const handleBack = () => {
    console.log('go to previous page');
  };
  artwork.picture = artwork.picture ? artwork.picture : 'https://cataas.com/cat';
  console.log('diyvvidd = ', artwork);
  return (

    <Fragment>
      <section className={`artworkModificationPage ${styles["artworkModificationPage"]}`}>
          <div className={`artworkCardModification ${styles["artworkCardModification"]}`}>
            <div className={styles.divBlockGeneralInformations}>
              <img src={artwork.picture ? artwork.picture : 'https://cataas.com/cat'}
                   loading="lazy" alt="Artwork Image" className={styles.image22}/>
              <div className={styles.divGeneralInformations}>
                <div className={styles.nameBlockInput}>
                  <div className={styles.textName}>Name :</div>
                  <input type="text" className={styles.nameInput}
                         value={artwork.name}
                         onChange={(e) => setArtwork({...artwork, name: e.target.value})}
                         placeholder="Enter artwork name"/>
                </div>

                <div className={styles.artistBlockName}>
                  <div className={styles.artistName}>Artist Name :</div>
                  <input type="text" className={styles.artistNameInput}
                         value={artwork.relatedPerson.name}
                         onChange={(e) => setArtwork({
                           ...artwork,
                           relatedPerson: {...artwork.relatedPerson, name: e.target.value}
                         })}
                         placeholder="Enter artist name"/>
                </div>

                <div className={styles.dateOfCreationBlock}>
                  <div className={styles.createdAtText}>Créer en :</div>
                  <input type="text" className={styles.dateInput}
                    //value={new Date(artwork.videos[0].createdAt).getFullYear().toString()}
                         onChange={(e) => {
                           const newDate = new Date(artwork.videos[0].createdAt);
                           newDate.setFullYear(parseInt(e.target.value, 10));
                           //setArtwork({...artwork, videos: [{...artwork.videos[0], createdAt: newDate.toISOString()}]});
                         }}
                         placeholder="Enter creation year"/>
                </div>
              </div>
            </div>
            <div className={styles.divBlockDescription}>
              <div className={styles.descriptionText}>Description :</div>
              <input type="text" className={styles.descriptionInput}
                     value={artwork.description}
                     onChange={(e) => setArtwork({...artwork, description: e.target.value})}
                     placeholder="Enter artwork description"/>
            </div>

            <div className={`divBlockSecondaryInformation ${styles["divBlockSecondaryInformation"]}`}>
              <div className={`divBlockSecondaryInformations ${styles["divBlockSecondaryInformations"]}`}>
                <div className={`secondaryInformation ${styles["secondaryInformation"]}`}>Secondary Information</div>
                <input type="text" className={`secondaryInfoInput ${styles["secondaryInfoInput"]}`}
                       placeholder="Enter secondary information"/>
              </div>
            </div>
            <div className={`divBlockButtonModification ${styles["divBlockButtonModification"]}`}>
              <div className={`divButtonDontSave ${styles["divButtonDontSave"]}`}
                   onClick={() => handleAction('dontSave')}>
                <button type="button">Don't Save</button>
              </div>
              <div className={`divButtonSave ${styles["divButtonSave"]}`}
                   onClick={() => handleAction('save')}>
                <button type="button">Save</button>
              </div>
            </div>
          </div>
        </section>
    </Fragment>

  );
};

ArtworkModificationPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ArtworkModificationPage;