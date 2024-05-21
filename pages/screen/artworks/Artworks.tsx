import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserProvider';

const styles = {
    divBlockTitlePage:
      "text-black justify-between items-center flex mb-12 px-8 " +
      "md:flex-row md:items-center md:justify-between md:px-3 " +
      "sm:items-center",
    noExhibitions:
      "text-black",
    image18:
      "w-12 h-12 " +
      "sm:w-6 sm:h-6",
    image17:
      "w-12 h-12 " +
      "sm:w-6 sm:h-6",
    divTitlePage: "justify-between items-center flex",
    artworkPage: "text-black flex flex-col w-full pl-8 pr-8 sm:flex-col text-black",
    artworkCard: "shadow-xl rounded-lg flex flex-col w-full p-5",
    divBlockGeneralInformations: "w-full flex flex-row sm:flex-col",
    image22: "rounded-lg w-1/3 h-auto sm:w-full",
    divGeneralInformations: "w-full pb-0 pl-5 sm:pl-0",
    textName: "pt-5 pb-2.5",
    artistName: "text-black pt-5 pb-2.5",
    createdAtText: "text-black pt-5 pb-2.5",
    descriptionText: "text-black pt-5 pb-2.5",
    divBlockDescription: "w-full",
    divBlockButtonModification: "flex w-full justify-center items-center space-x-4",
    divButtonDontSave: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 cursor-pointer",
    divButtonSave: "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 cursor-pointer",
    image16: "w-36 h-36 md:w-full sm:w-full",
    divBlockArtworkInfos: "flex-1 w-full sm:items-start pl-5 md:pl-5 sm:pl-0",
    divArtworkChangeBtn: "flex flex-row items-center justify-between mb-5 w-full sm:flex-row sm:items-center md:flex-row md:justify-between",
    divModifyButtons: "flex flex-row",
    heading13: "m-0 self-center sm:text-center",
    changeBtnIcon: "h-10 w-10 sm:h-5 sm:w-5",
    deleteBtnIcon: "h-10 w-10 sm:h-5 sm:w-5",
    divBlockArtworkInformations: "flex flex-row w-full items-center sm:flex-col md:flex-row md:justify-between",
    divArtworkInformations: "flex flex-col gap-x-2.5 gap-y-2.5 pr-5 w-full sm:items-start md:flex-col md:justify-between",
    divGeneralInformation: "flex items-start justify-between w-full md:flex-col md:items-start md:justify-between sm:flex-col sm:items-start",
    artworkDescription: "flex-[0_auto] pr-0 text-justify w-full sm:text-start",
};

const ArtworkModificationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(UserContext);
    const [artworks, setArtworks] = useState(location.state?.items || []);

    useEffect(() => {
        if (location.state?.item) {
            setArtworks(location.state.item);
        }
    }, [location.state]);

    const handleAction = (buttonName, artworkId) => {
        switch (buttonName) {
            case 'modificationArtwork':
                const artwork = artworks.find(art => art.id === artworkId);
                if (artwork) {
                    navigate('/places/exhibitions/artworks/artworkModification', { state: { item: artwork } });
                } else {
                    navigate('/places/exhibitions/artworks/artworkModification', { state: { item: null } });
                }
                break;
            case 'deleteArtwork':
                handleDeleteArtwork(artworkId);
                break;
            default:
                console.log(`Unknown action: ${buttonName}`);
        }
    };

    const handleDeleteArtwork = async (artworkId, exhibitionId) => {
        try {
            // First, delete the artwork from the main items service
            const response = await fetch(`http://localhost:3001/items/${artworkId}`,
              {
                  method: 'DELETE',
                  headers: {
                      'Authorization': `Bearer ${user.accessToken}`,
                  }
              });
            if (!response.ok) {
                throw new Error('Failed to delete the artwork.');
            }

            // If the main deletion is successful, proceed to delete the link from the exhibition
            const linkDeleteResponse = await fetch(`http://localhost:3001/exhibitions/${exhibitionId}/items/${artworkId}`,
              {
                method: 'DELETE',
                  headers: {
                      'Authorization': `Bearer ${user.accessToken}`,
                  }
            });
            if (!linkDeleteResponse.ok) {
                throw new Error('Failed to delete the link between the exhibition and the artwork.');
            }

            // Update the local state to remove the artwork
            const updatedArtworks = artworks.filter(art => art.id !== artworkId);
            setArtworks(updatedArtworks);
            console.log('Artwork and its exhibition link deleted successfully');
        } catch (error) {
            console.error('Error deleting artwork:', error);
        }
    };

    if (artworks.length === 0) {
        return (
          <Fragment>
              <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                  <div
                    className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
                    onClick={() => navigate(-1)}
                  >
                      <img
                        src=""
                        loading="lazy"
                        alt="Retour"
                        className={`image18 ${styles["image18"]}`}
                      />
                  </div>
                  <div className={`divTitlePage ${styles["divTitlePage"]}`}>
                      <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
                  </div>
                  <div
                    role="addExhibitionBtn"
                    tabIndex={0}
                    className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
                    onClick={() => handleAction("modificationArtwork", artwork.id)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            handleAction("modificationArtwork", artwork.id);
                            event.preventDefault();
                        }
                    }}
                  >
                      <img
                        src=""
                        loading="lazy"
                        alt="Ajouter une exposition"
                        className={`image17 ${styles["image17"]}`}
                      />
                  </div>
              </div>
              <div style={{textAlign: 'center'}}>No artworks available.</div>
          </Fragment>
        );
    } else {
        return (
          <Fragment>
              <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
                  <div
                    className={`returnToPreviousPageBtn ${styles["returnToPreviousPageBtn"]}`}
                    onClick={() => navigate(-1)}
                  >
                      <img
                        src=""
                        loading="lazy"
                        alt="Retour"
                        className={`image18 ${styles["image18"]}`}
                      />
                  </div>
                  <div className={`divTitlePage ${styles["divTitlePage"]}`}>
                      <h1 className={`pageTitle ${styles["pageTitle"]}`}>Mes exposition</h1>
                  </div>
                  <div
                    role="addExhibitionBtn"
                    tabIndex={0}
                    className={`addExhibitionBtn ${styles["addExhibitionBtn"]}`}
                    onClick={() => handleAction("modificationArtwork", 0)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            handleAction("modificationArtwork", 0);
                            event.preventDefault();
                        }
                    }}
                  >
                      <img
                        src=""
                        loading="lazy"
                        alt="Ajouter une exposition"
                        className={`image17 ${styles["image17"]}`}
                      />
                  </div>
              </div>
              <section style={{padding: '20px'}}>
                  {artworks.map(artwork => (
                    <div key={artwork.id} style={{marginBottom: '10px', border: '1px solid gray', padding: '10px'}}>
                        <img src={artwork.imageUrl} alt={artwork.name} style={{width: '100px', height: '100px'}}/>
                        <div>
                            <h1>{artwork.name}</h1>
                            <p>{artwork.description}</p>
                            <button onClick={() => handleAction('modificationArtwork', artwork.id)}>Modify</button>
                            <button onClick={() => handleDeleteArtwork(artwork.id, location.state.exhibitionId)}>Delete Artwork
                            </button>
                        </div>
                    </div>
                  ))}
              </section>
          </Fragment>
        );
    }
};

export default ArtworkModificationPage;