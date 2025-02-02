import Layout from "../../components/Layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import React, { Fragment, useState, useContext, useEffect } from "react";
import { UserContext } from "src/global/contexts/UserProvider";
import textData from "@public/text.json";

const styles: { [key: string]: string } = {
  artworkModificationPage:
    "font-black flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
  artworkCardModification: "shadow-xl rounded-lg flex flex-col w-full p-5",
  divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
  image22: "rounded-lg w-2/3 h-auto sm:w-full",
  divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
  textName: "font-black pt-5 pb-2.5",
  artistName: "font-black pt-5 pb-2.5",
  createdAtText: "font-black pt-5 pb-2.5",
  descriptionText: "font-black pt-5 pb-2.5",
  divBlockDescription: "w-full",
  divBlockButtonModification:
    "flex w-full justify-center items-center space-x-4",
  divButtonDontSave:
    "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer",
  divButtonSave:
    "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
  nameInput:
    "font-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
  descriptionInput:
    "font-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
  artistNameInput:
    "font-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
  dateInput:
    "font-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
};

const ArtworkModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  interface Artist {
    id: number;
    name: string;
  }

  const initialArtwork = location.state?.item || {
    name: "",
    description: "",
    picture: "https://cataas.com/cat",
    relatedPersonId: 0,
    itemTypeId: 1,
    textToTranslate: "", // Ajouter cette propriété
  };

  const [artwork, setArtwork] = useState(initialArtwork);

  const exhibitionId = location.state?.exhibitionId;
  const siteId = location.state?.siteId;

  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch(
          `https://api.nolo.aurelenc.com/persons`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json();
        console.log("Artists fetched successfully:", data);
        setArtists(data);
        console.log("Artists fetched successfully:", data);
      } catch (error) {
        console.error("Failed to fetch artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setArtwork({ ...artwork, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setArtwork((previousState: any) => ({
        ...previousState,
        picture: file,
      }));
    }
  };

  const handleSubmit = async () => {
    const method = artwork.id ? "PUT" : "POST";
    const url = `https://api.nolo.aurelenc.com/items${artwork.id ? `/${artwork.id}` : ""}`;

    try {
      const formData = new FormData();
      formData.append("name", artwork.name);
      formData.append("description", artwork.description);
      formData.append("relatedPersonId", artwork.relatedPersonId.toString());
      formData.append("itemTypeId", artwork.itemTypeId.toString());
      formData.append("textToTranslate", artwork.textToTranslate);
      formData.append("siteId", siteId ? siteId : "1");

      if (artwork.picture instanceof File) {
        formData.append("picture", artwork.picture); // Inclure le fichier image
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      if (method === "POST" && exhibitionId) {
        const addToExhibitionResponse = await fetch(
          `https://api.nolo.aurelenc.com/exhibitions/${exhibitionId}/items`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify({ itemId: responseData.id }),
          }
        );

        if (!addToExhibitionResponse.ok) {
          throw new Error(`HTTP status ${addToExhibitionResponse.status}`);
        }
      }

      navigate("/places");
    } catch (error) {
      console.error("Failed to update artwork:", error);
    }
  };


  const resetFields = () => {
    setArtwork({
      name: "",
      description: "",
      picture: "https://cataas.com/cat", // Default picture URL
      relatedPersonId: 0,
      itemTypeId: 1,
    });
  };

  return (
    <Fragment>
      <section
        className={`artworkModificationPage ${styles["artworkModificationPage"]}`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={`artworkCardModification ${styles["artworkCardModification"]}`}
        >
          <div className={styles.divBlockGeneralInformations}>
            <div>
              <img
                src={
                  artwork.picture instanceof File
                    ? URL.createObjectURL(artwork.picture) // Prévisualisation du fichier
                    : artwork.picture
                }
                alt="Exhibition Image"
                className={styles.image22}
                onClick={() => document.getElementById("imageUpload")?.click()}
              />
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{display: "none"}}
              />
            </div>

            <div className={styles.divGeneralInformations}>
              <div className={styles.nameBlockInput}>
                <div className={styles.textName}>
                  {textData.page.screen.artworkmodificationPage.name}
                </div>
                <input
                  type="text"
                  className={styles.nameInput}
                  name="name"
                  value={artwork.name}
                  onChange={handleInputChange}
                  placeholder={
                    textData.page.screen.artworkmodificationPage.pname
                  }
                />
              </div>

              <div className={styles.artistBlockName}>
                <div className={styles.artistName}>
                  {textData.page.screen.artworkmodificationPage.artistid}
                </div>
                <select
                  name="relatedPersonId"
                  value={artwork.relatedPersonId}
                  onChange={handleInputChange}
                  className={styles.artistNameInput}
                >
                  <option value="">Select an artist</option>
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.id}>
                      {artist.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.dateOfCreationBlock}>
                <div className={styles.createdAtText}>
                  {textData.page.screen.artworkmodificationPage.createdate}
                </div>
                <input
                  type="date"
                  className={styles.dateInput}
                  name="createdAt"
                  value={
                    artwork.createdAt
                      ? new Date(artwork.createdAt)
                        .toISOString()
                        .substring(0, 10)
                      : ""
                  }
                  onChange={handleInputChange}
                  placeholder={
                    textData.page.screen.artworkmodificationPage.pcreatedate
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.divBlockDescription}>
            <div className={styles.descriptionText}>
              {textData.page.screen.artworkmodificationPage.description}
            </div>
            <input
              type="text"
              className={styles.descriptionInput}
              name="description"
              value={artwork.description}
              onChange={handleInputChange}
              placeholder={
                textData.page.screen.artworkmodificationPage.pdescription
              }
            />
          </div>
          <div className={styles.divBlockDescription}>
            <div className={styles.descriptionText}>
              {textData.page.screen.artworkmodificationPage.textToTranslate || "Text to Translate"}
            </div>
            <input
              type="text"
              className={styles.descriptionInput}
              name="textToTranslate"
              value={artwork.textToTranslate}
              onChange={handleInputChange}
              placeholder="Enter text to translate"
            />
          </div>

          <div className={styles.divBlockButtonModification}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => navigate(-1)}
            >
              {textData.page.screen.artworkmodificationPage.back}
            </button>
            <button type="submit" className={styles.divButtonSave}>
              {textData.page.screen.artworkmodificationPage.save}
            </button>
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
