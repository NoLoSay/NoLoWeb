import { useState } from "react";
import { TextField, IconButton, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEventHandler } from "react";

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function removeFocus() {
    setIsInputFocused(false)
  }

  function enableFocus() {
    setIsInputFocused(true)
  }

  function onTextChange(event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  return (
    <TextField
      id="search-bar"
      label={isInputFocused || inputValue ? "" : "Search"}
      type="search"
      fullWidth
      sx={{marginX: 5}}
      InputProps={{
        endAdornment: (
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        ),
      }}
      onFocus={enableFocus}
      onBlur={removeFocus}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}

export default SearchBar;
