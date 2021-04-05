import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { SnackbarProvider, useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    //backgroundColor: 'rgba(0, 60, 255, 0.1)',
    
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: theme.palette.common.black,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  icon: {
    color: theme.palette.text.primary,
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const alertUser = (msg) => {
    const variant = 'error';
    enqueueSnackbar(msg, { variant });
}
  return (
    <Paper component="form" className={classes.root} elevation={1}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton onClick={()=>{alertUser("This feature is disabled.")}} className={classes.iconButton} aria-label="search">
        <SearchIcon className={classes.icon}/>
      </IconButton>
      
    </Paper>
  );
}