import { useState } from "react";
import { TextField, IconButton, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}

export default SearchBar;
