import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Main from '../../Components/Main/Main';
import { Switch } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

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

function References() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
          <CssBaseline />
            <Paper>
            <Typography variant="h5" component="h2">
                References
            </Typography>
            <List className={classes.root}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
          className={classes.break}
          primary="Arduino UNO"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://store.arduino.cc/arduino-uno-rev3
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Arduino Nano"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://store.arduino.cc/arduino-nano
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Arduino Mega"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://store.arduino.cc/arduino-mega-2560-rev3
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Raspberry Pi 3"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://www.bestbuy.com/site/raspberry-pi-3-model-b-/6339655.p?skuId=6339655
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Node MCU"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://www.makerfabs.com/index.php?route=product/product&product_id=194
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <FormatQuoteIcon fontSize="large" className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText
        className={classes.break}
          primary="Ziyun Plate Panda"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Images, description
              </Typography><br/>
              https://www.amazon.de/-/en/Ziyun-Plate-Win10-Product-Single-Computer/dp/B01JJC7NBS/ref=sr_1_1?dchild=1&keywords=lattepanda&qid=1616816859&sr=8-1
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Paper>
        </Container>
    );
}

export default References;