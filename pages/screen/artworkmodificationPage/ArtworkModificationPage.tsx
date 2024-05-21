import Layout from "../../components/Layout/Layout";
import { useLocation, useNavigate } from 'react-router-dom';
import {Fragment, useState, useContext, useEffect} from "react";
import { UserContext } from "../../../contexts/UserProvider";

const styles: { [key: string]: string } = {
  artworkModificationPage: "flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  artworkCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
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

const ArtworkModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const initialArtwork = location.state?.item || {
    name: '',
    description: '',
    picture: 'https://cataas.com/cat',
    relatedPersonId: 0,
    itemTypeId: 1,
  };

  const exhibitionId = location.state?.exhibitionId;

  const [artwork, setArtwork] = useState(initialArtwork);

  console.log("artwork item = ", artwork)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtwork({ ...artwork, [name]: value });
  };

  const handleSubmit = async () => {
    const method = artwork.id ? 'PUT' : 'POST';
    const url = `http://localhost:3001/items${artwork.id ? `/${artwork.id}` : ''}`;

    console.log("url = ", url);

    try {
      if (method === 'POST') {
        console.log("firstdata = ", artwork);
        console.log("url = ", url);
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({
            name: artwork.name,
            description: artwork.description,
            picture: artwork.picture,
            relatedPersonId: parseInt(artwork.relatedPersonId, 10),
            itemTypeId: parseInt(artwork.itemTypeId, 10),
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Artwork created successfully:', responseData);
        console.log("deuxdata = ", artwork);
        console.log("eeeeefffffff = ", exhibitionId)
        if (exhibitionId) {
          const addToExhibitionResponse = await fetch(`http://localhost:3001/exhibitions/${exhibitionId}/items`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify({ itemId: responseData.id })
          });

          if (!addToExhibitionResponse.ok) {
            throw new Error(`HTTP status ${addToExhibitionResponse.status}`);
          }

          console.log('Artwork added to exhibition successfully:', await addToExhibitionResponse.json());
        }

      } else if (method === 'PUT') {
        console.log("data put = ", artwork);
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify({
            name: artwork.name,
            description: artwork.description,
            picture: artwork.picture,
            relatedPersonId: parseInt(artwork.relatedPersonId, 10),
            itemTypeId: parseInt(artwork.itemTypeId, 10)
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Artwork updated successfully:', responseData);
      }

      // Redirection après une opération réussie
      navigate(-1);
    } catch (error) {
      console.error('Failed to update artwork:', error);
    }
  };

  const resetFields = () => {
    setArtwork({
      name: '',
      description: '',
      picture: 'https://cataas.com/cat', // Default picture URL
      relatedPersonId: 0,
      itemTypeId: 1,
    });
  };

  return (
    <Fragment>
      <section className={`artworkModificationPage ${styles["artworkModificationPage"]}`}>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }} className={`artworkCardModification ${styles["artworkCardModification"]}`}>
          <div className={styles.divBlockGeneralInformations}>
            <img src={artwork.picture} loading="lazy" alt="Artwork Image" className={styles.image22} />
            <div className={styles.divGeneralInformations}>
              <div className={styles.nameBlockInput}>
                <div className={styles.textName}>Name :</div>
                <input type="text" className={styles.nameInput}
                       name="name"
                       value={artwork.name}
                       onChange={handleInputChange}
                       placeholder="Enter artwork name"/>
              </div>

              <div className={styles.artistBlockName}>
                <div className={styles.artistName}>Artist ID :</div>
                <input type="number" className={styles.artistNameInput}
                       name="relatedPersonId"
                       value={artwork.relatedPersonId}
                       onChange={handleInputChange}
                       placeholder="Enter artist ID"/>
              </div>

              <div className={styles.dateOfCreationBlock}>
                <div className={styles.createdAtText}>Creation Date:</div>
                <input type="date" className={styles.dateInput}
                       name="createdAt"
                       value={artwork.createdAt ? new Date(artwork.createdAt).toISOString().substring(0, 10) : ''}
                       onChange={handleInputChange}
                       placeholder="Select creation date"/>
              </div>
            </div>
          </div>
          <div className={styles.divBlockDescription}>
            <div className={styles.descriptionText}>Description :</div>
            <input type="text" className={styles.descriptionInput}
                   name="description"
                   value={artwork.description}
                   onChange={handleInputChange}
                   placeholder="Enter artwork description"/>
          </div>

          <div className={styles.divBlockButtonModification}>
            <button type="button" className={styles.backButton} onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className={styles.divButtonSave}>Save</button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

ArtworkModificationPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default ArtworkModificationPage;