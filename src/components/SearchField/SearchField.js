import React from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchField = (props) => {
  const { forwardedRef, handleSubmit } = props;

  return <TextField
    inputRef={forwardedRef}
    fullWidth
    id="searchField"
    className="search-field"
    inputProps={{ className: 'search-field__input' }}
    label="Filter posts by keyword"
    placeholder="Enter a keyword or an username"
    variant="filled"
    InputLabelProps={{ shrink: true }}
    autoFocus={true}
    InputProps= {
      { endAdornment: (
        <InputAdornment position="end" className="search-field__icon">
          <IconButton edge="end" onClick={handleSubmit}>
            <SearchIcon/>
          </IconButton>
        </InputAdornment>
      )}
    }
    onKeyPress={(ev) => {
      if (ev.key === 'Enter') {
        ev.preventDefault();
        handleSubmit();
      }
    }}
  />
};

export default SearchField;