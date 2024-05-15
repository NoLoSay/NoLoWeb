import React, { useState } from "react";
import { NextPage } from "next";
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, ButtonBase, Divider, FormControl, Modal, TextField, Typography } from "@mui/material";

interface CardInfo {
  title: string;
  description: string;
  imageSrc: string;
  videoCountPlaceholder: string;
  website?: string;
  city?: string;
  location?: string;
  pathname: string;
}

interface LocationCardProps {
  cardInfo: CardInfo;
}

//faire un patch
//fix les any

const LocationEditForm = ({cardInfo}:any) => {

  function handleModification({cardInfo}:any) {

  }

  const [titleValue, setTitleValue] = useState(cardInfo.title);
  const [descriptionValue, setDescriptionValue] = useState(cardInfo.description);
  const [websiteValue, setWebsiteValue] = useState(cardInfo.website);
  const [cityValue, setCityValue] = useState(cardInfo.city);
  const [locationValue, setLocationValue] = useState(cardInfo.location);

  return (
    <div className="">
      <h1 className="py-5">Profile</h1>
      <Divider />
      <div className="grid grid-cols-4">
        <form className="pt-5 col-span-3 space-y-3 p-3">
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
            className="absolute top-0 right-0 m-2"
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
