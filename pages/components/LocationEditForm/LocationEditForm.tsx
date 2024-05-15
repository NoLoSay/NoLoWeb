import React from "react";
import { NextPage } from "next";
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonBase, FormControl, Modal, TextField, Typography } from "@mui/material";

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

const LocationCard = (cardInfo:CardInfo) => {

  function handleModification(cardInfo:CardInfo) {

  }

  

  return (
    <div>
      <FormControl>
      <TextField value={cardInfo.title}>
          Titre
        </TextField>
        <TextField  value={cardInfo.description}>
          Description
        </TextField>
        <TextField  value={cardInfo.website}>
          Site Internet
        </TextField>
        <TextField  value={cardInfo.city}>
          Ville
        </TextField>
        <TextField  value={cardInfo.location}>
          Location
        </TextField>
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => handleModification({})}>
        Envoyer
      </Button>
    </div>
  );
};

export default LocationCard;
