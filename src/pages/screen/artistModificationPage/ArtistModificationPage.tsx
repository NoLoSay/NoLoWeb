import React, { Fragment, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "src/global/contexts/UserProvider";
import Layout from "../../components/Layout/Layout";
import {ButtonBase} from "@mui/material";

const styles = {
  buttons: 'flex p-3 w-full rounded-lg bg-white items-center justify-center space-x-5 stroke-black h-full bg-yellow-100 w-20',
  artistForm: "flex flex-col w-full p-8",
  formField: "mb-4",
  input: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  label: "block text-gray-700 text-sm font-bold mb-2",
  button: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  buttonContainer: "flex items-center justify-between",
  pageTitle: "justify-center items-center flex md:flex-row md:items-center md:justify-center sm:flex-col sm:items-center",
  divBlockTitlePage:
    "text-black justify-between items-center flex mb-12 px-8 " +
    "md:flex-row md:items-center md:justify-between md:px-3 " +
    "sm:items-center",
};

const ArtistModificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const initialArtist = location.state?.item || {
    name: '',
    bio: '',
    type: 'OTHER', // Default type
    birthDate: '',
    deathDate: ''
  };

  const [artist, setArtist] = useState(initialArtist);

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setArtist({ ...artist, [name]: value });
  };

  const formatDate = (dateString : any) => {
    return dateString ? dateString : undefined;
  };

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const method = artist.id ? 'PUT' : 'POST';
    const url = `http://localhost:3001/persons${artist.id ? `/${artist.id}` : ''}`;

    const payload = {
      ...artist,
      birthDate: formatDate(artist.birthDate),
      deathDate: formatDate(artist.deathDate)
    };

    console.log("url =", url);
    console.log("payload =", payload);
    console.log("method =", method);

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      console.log(`${artist.id ? 'Updated' : 'Created'} artist successfully:`, responseData);
      navigate('/artists');
    } catch (error) {
      console.error(`Failed to ${artist.id ? 'update' : 'create'} artist:`, error);
    }
  };

  return (
    <Fragment>
      <div>
        <div className={`divBlockTitlePage ${styles["divBlockTitlePage"]}`}>
          <ButtonBase disableRipple onClick={() => navigate(-1)}>
            <div className={styles.buttons}>
              Retour
            </div>
          </ButtonBase>
          <div>
            <h1 className={`pageTitle ${styles["pageTitle"]}`}>{artist.name}</h1>
          </div>

        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={styles.artistForm}>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={artist.name} onChange={handleInputChange}
                   className={styles.input} required/>
          </div>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="bio">Biography</label>
            <textarea id="bio" name="bio" value={artist.bio} onChange={handleInputChange} className={styles.input}
                      required/>
          </div>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="type">Type</label>
            <select id="type" name="type" value={artist.type} onChange={handleInputChange} className={styles.input}>
              <option value="ARTIST">Artist</option>
              <option value="CELEBRITY">Celebrity</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="birthDate">Birth Date</label>
            <input type="date" id="birthDate" name="birthDate"
                   className={styles.input}
                   value={artist.birthDate ? artist.birthDate : ''}
                   onChange={handleInputChange}
                   placeholder="Select birth date"/>
          </div>
          <div className={styles.formField}>
            <label className={styles.label} htmlFor="deathDate">Death Date (optional)</label>
            <input type="date" id="deathDate" name="deathDate"
                   className={styles.input}
                   value={artist.deathDate ? artist.deathDate : ''}
                   onChange={handleInputChange}
                   placeholder="Select death date"/>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>{artist.id ? 'Update Artist' : 'Create Artist'}</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ArtistModificationPage;