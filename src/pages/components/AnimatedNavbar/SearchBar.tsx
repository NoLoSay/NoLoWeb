import { useState } from 'react'
import { TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  function removeFocus() {
    setIsInputFocused(false)
  }

  function enableFocus() {
    setIsInputFocused(true)
  }

  return (
    <TextField
      id='search-bar'
      label={isInputFocused || inputValue ? '' : 'Search'}
      type='search'
      fullWidth
      sx={{ marginX: 5 }}
      InputProps={{
        endAdornment: (
          <IconButton aria-label='search'>
            <SearchIcon />
          </IconButton>
        ),
      }}
      onFocus={enableFocus}
      onBlur={removeFocus}
    />
  )
}

export default SearchBar
