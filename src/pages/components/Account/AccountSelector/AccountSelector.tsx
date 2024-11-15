import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import CategoryButton from "@components/Account/CategoryButton/CategoryButton";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  accountsList: string[];
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choisir un profil :</DialogTitle>
      <List sx={{ pt: 0 }}>
        {props.accountsList.map((account) => (
          <ListItem disableGutters key={account}>
            <ListItemButton onClick={() => handleListItemClick(account)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={account} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function AccountSelector({
  accountsList,
}: {
  accountsList: string[];
}) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(accountsList[1] || "");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <CategoryButton
        altColor
        description="Choisir un profil parmi la liste"
        text="Changer de profil"
        onClick={handleClickOpen}
      />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        accountsList={accountsList}
      />
    </div>
  );
}
