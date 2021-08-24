import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainSearchBar: {
      
    },
  }),
);

const SearchBar = () =>{
    const classes = useStyles();

    return (
      <div>
        <TextField
          className={classes.mainSearchBar}
          id="mainSearchBar"
          placeholder="Moogle で自分を検索 または 自分の心に問いかける"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
} 

export default SearchBar