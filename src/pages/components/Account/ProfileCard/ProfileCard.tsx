import { Button, ButtonBase, IconButton, Modal, Paper, TextField, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { SetStateAction, useContext, useState} from "react";
import {UserContext} from "@global/contexts/UserProvider";

const styles: { [key: string]: string } = {
  row: "flex flex-row w-full justify-between",
};

interface UserType {
  username: string;
  email: string;
  telNumber: string;
  picture: {
    hostingUrl: any;
  };
  profilePicturePath?: string;
}

interface ProfileCardProps {
  profilePicturePath: any;
  fullName: string;
  email: string;
  phone: string;
}

function ProfileCard({
                       profilePicturePath,
                       fullName,
                       email,
                       phone,
                     }: ProfileCardProps) {
  const {user, setUser} = useContext(UserContext);
  const [editMode, setEditMode] = useState('');  // Controls which field is being edited
  const [newName, setNewName] = useState(fullName);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newProfilePicture, setNewProfilePicture] = useState(profilePicturePath);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEdit = (mode: SetStateAction<string>) => {
    setEditMode(mode);
    if (mode && mode === 'picture') {
      const fileInput = document.getElementById('icon-button-file');
      if (fileInput) {
        fileInput.click();
      }
    }
  };

  const handleClose = () => {
    setEditMode('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSave = async () => {
    const url = 'https://api.nolo.aurelenc.com/users/me';

    // Initialize payload with the most up-to-date info from edit fields
    const payload = {
      username: editMode === 'name' ? newName : user.username,
      email: editMode === 'email' ? newEmail : user.email,
      telNumber: editMode === 'phone' ? newPhone : user.telNumber,
      picture: editMode === 'picture' ? newProfilePicture : user.picture,
    };

    // if (editMode === 'password' && newPassword === confirmPassword) {
    //   payload.password = newPassword;
    // } else if (editMode === 'password' && newPassword !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.accessToken,
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedUser = await response.json();

      setUser({
        ...user,
        username: updatedUser.username || user.username,
        email: updatedUser.email || user.email,
        telNumber: updatedUser.telNumber || user.telNumber,
        picture: updatedUser.picture || user.picture,
      });

      alert('Profile updated successfully!');
      handleClose(); // Close the edit modal or panel
    } catch (error) {
      alert('Failed to update profile.');
    }
  };

  return (
    <Paper className="relative flex flex-row m-5 ml-0 p-5 items-center justify-start">
      <div className="flex flex-col flex-grow mx-5 space-y-2">
        <div className="flex items-center space-x-2">
          <img src={newProfilePicture?.hostingUrl} alt="Profile" className="w-20 h-20 rounded-full"/>
          <label htmlFor="icon-button-file">
            <input accept="image/*" id="icon-button-file" type="file" className="hidden"
                   onClick={() => handleEdit('picture')}/>
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera/>
            </IconButton>
          </label>
        </div>
        <div className={`row ${styles.row}`}>
          <p className="text-lg font-bold my-2">{user.username}</p>
          <ButtonBase onClick={() => handleEdit('name')}><EditIcon/></ButtonBase>
        </div>
        <div className={`row ${styles.row}`}>
          <p>{user.email}</p>
          <ButtonBase onClick={() => handleEdit('email')}><EditIcon/></ButtonBase>
        </div>
        <div className={`row ${styles.row}`}>
          <p>{user.telNumber}</p>
          <ButtonBase onClick={() => handleEdit('phone')}><EditIcon/></ButtonBase>
        </div>
        <div className={`row ${styles.row}`}>
          <p>Change password</p>
          <ButtonBase onClick={() => handleEdit('password')}><EditIcon/></ButtonBase>
        </div>
      </div>

      {editMode && (
        <Modal open={Boolean(editMode)} onClose={handleClose}>
          <Box
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl p-4 flex flex-col items-center justify-center w-96">
            <TextField
              fullWidth
              label={`Edit ${editMode.charAt(0).toUpperCase() + editMode.slice(1)}`}
              variant="outlined"
              value={editMode === 'name' ? newName : editMode === 'email' ? newEmail : editMode === 'phone' ? newPhone : newPassword}
              onChange={(e) => editMode === 'name' ? setNewName(e.target.value) : editMode === 'email' ? setNewEmail(e.target.value) : editMode === 'phone' ? setNewPhone(e.target.value) : setNewPassword(e.target.value)}
              margin="normal"
              type={editMode === 'password' ? 'password' : 'text'}
            />
            {editMode === 'password' && (
              <TextField
                fullWidth
                label="Confirm New Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                margin="normal"
              />
            )}
            <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
          </Box>
        </Modal>
      )}
    </Paper>
  );
}

export default ProfileCard;
