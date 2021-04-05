import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    '&>li': {
        padding: ' 0',
    },
  },
  inline: {
    display: 'inline',
  },
  icon: {
      color: theme.palette.text.secondary,
  },
  container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      '&>*':{
        padding: '1rem',
      },
      margin: '2rem 0',
  },
  break: {
    wordBreak: 'break-all',
    flexWrap: 'wrap',
    flex: 1,
  }
}));

function Rubrics() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
          <CssBaseline />
            <Paper>
            <Typography variant="h5" component="h2">
                Rubrics
            </Typography>
            <List className={classes.root}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <DoneIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
          className={classes.break}
          primary="Content"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography><br/>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <DoneIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Navigation"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography><br/>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <DoneIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Organization"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography><br/>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <DoneIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Design"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography><br/>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <DoneIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="HTML/CSS"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography><br/>
              
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
    </Paper>
        </Container>
    );
}

export default Rubrics;