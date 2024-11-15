import React, { useState, useContext } from "react";
import { Button, Divider, TextField } from "@mui/material";
import { UserContext } from "@global/contexts/UserProvider";

const styles: { [key: string]: string } = {
  container_0: "py-5",
  container_1: "grid grid-cols-4",
  container_2: "pt-5 col-span-3 space-y-3 p-3",
  container_3: "absolute top-0 right-0 m-2",
};

interface CardInfo {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website?: string;
  city?: string;
  location?: string;
  pathname: string;
}

const LocationEditForm = ({ cardInfo }: any) => {
  const { user, setUser } = useContext(UserContext);

  const handleModification = async ({ cardInfo }: any) => {
    try {
      const response = await fetch(
        "https://api.nolosay.com/sites/" + cardInfo.id,
        {
          method: "PATCH",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cardInfo,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(response);
      } else {
        throw new Error("Failed to create acccount");
      }
    } catch (e) {
      console.error("API error: ", e);
    }
  };

  const [titleValue, setTitleValue] = useState(cardInfo.title);
  const [descriptionValue, setDescriptionValue] = useState(
    cardInfo.description
  );
  const [websiteValue, setWebsiteValue] = useState(cardInfo.website);
  const [cityValue, setCityValue] = useState(cardInfo.city);
  const [locationValue, setLocationValue] = useState(cardInfo.location);

  return (
    <div className="">
      <h1 className={`container_0 ${styles.container_0}`}>Profile</h1>
      <Divider />
      <div className={`container_1 ${styles.container_1}`}>
        <form className={`container_2 ${styles.container_2}`}>
          <div>
            <TextField
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              size="small"
              fullWidth
              id="outlined-basic"
              label="Titre"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              multiline
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={websiteValue}
              onChange={(e) => setWebsiteValue(e.target.value)}
              size="small"
              fullWidth
              id="outlined-basic"
              label="Site internet"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
              size="small"
              fullWidth
              id="outlined-basic"
              label="Ville"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
              size="small"
              fullWidth
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
          </div>
          <Button
            className={`container_3 ${styles.container_3}`}
            variant="contained"
            disableRipple
            onClick={() =>
              handleModification({
                title: titleValue,
                description: descriptionValue,
                website: websiteValue,
                city: cityValue,
                location: locationValue,
                imageSrc: cardInfo.imageSrc,
                videoCountPlaceholder: cardInfo.videoCountPlaceholder,
                pathname: cardInfo.pathname,
              })
            }
          >
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LocationEditForm;
