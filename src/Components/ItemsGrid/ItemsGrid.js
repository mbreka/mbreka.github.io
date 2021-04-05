import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
}));

export default function ItemsGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}