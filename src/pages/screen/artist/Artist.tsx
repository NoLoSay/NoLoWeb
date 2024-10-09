import React, {Fragment, useContext, useEffect, useState} from 'react';
import { ButtonBase } from "@mui/material";
import {UserContext} from "src/global/contexts/UserProvider";
import {useNavigate} from "react-router-dom";

const styles = {
  container: 'flex flex-col w-full text-black',
  artistCard: 'flex flex-row items-center justify-between p-5 shadow-xl rounded-lg mb-10',
  artistInfo: 'flex-1 pl-5',
  artistName: 'text-xl font-bold',
  artistDetails: 'text-gray-600',
  divTitlePage: "justify-between items-center flex",
  buttons: 'flex p-3 w-full rounded-lg bg-white items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20',
  pageTitle: "justify-center items-center flex md:flex-row md:items-center md:justify-center sm:flex-col sm:items-center",
  divBlockTitlePage:
    "text-black justify-between items-center flex mb-12 px-8 " +
    "md:flex-row md:items-center md:justify-between md:px-3 " +
    "sm:items-center",
};

interface Artist {
  id: number;
  name: string;
  bio: string;
  type: string;
}

const ArtistPage = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState<Artist[]>([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('http://localhost:3001/persons', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch artists: ${response.status}`);
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, []);

  const handleAction = (buttonName:any, artistId:any) => {
    switch (buttonName) {
      case 'modificationArtwork':
        const artist = artists.find((art:any) => art.id === artistId);
        if (artist) {
          navigate('/artists/artists-modification-page', { state: { item: artist } });
        } else {
          navigate('/artists/artists-modification-page', { state: { item: null } });
        }
        break;
      case 'deleteArtwork':
        //handleDeleteArtwork(artistId);
        break;
      default:
        console.log(`Unknown action: ${buttonName}`);
    }
  };

  return (
    <Fragment>
      <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
        <ButtonBase disableRipple onClick={() => navigate(-1)}>
          <div className={styles.buttons}>
            Retour
          </div>
        </ButtonBase>
        <div className={`divTitlePage ${styles["divTitlePage"]}`}>
          <h1 className={`pageTitle ${styles["pageTitle"]}`}>Oeuvres de l'exposition</h1>
        </div>
        <ButtonBase disableRipple onClick={() => handleAction("modificationArtwork", null)}>
          <div className={styles.buttons}>
            Ajouter un artist
          </div>
        </ButtonBase>
      </div>
      <div className={styles.container}>
        {artists.map((artist) => (
          <div key={artist.id} className={styles.artistCard}>
            <div className={styles.artistInfo}>
              <h1 className={styles.artistName}>{artist.name}</h1>
              <p>{artist.bio}</p>
              <span className={styles.artistDetails}>{artist.type}</span>
            </div>
            <ButtonBase disableRipple onClick={() => handleAction("modificationArtwork", artist.id)}>
              <div className={styles.buttons}>
                Modifier/Voir l'artiste
              </div>
            </ButtonBase>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ArtistPage;