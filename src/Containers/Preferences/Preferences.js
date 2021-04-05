import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Main from '../../Components/Main/Main';
import { Switch } from '@material-ui/core';
import { CustomThemeContext } from '../../Context/CustomThemeContext/CustomThemeContext';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        alignItems: 'center',
        height: '80vh',
    },
    paper: {
        padding: '2rem 1rem 1rem 1rem',
    },
    table: {
        minWidth: 300,
    },
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
    noDecoration: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
}));

function Preferences() {
    const classes = useStyles();
    const [theme, setTheme] = useContext(CustomThemeContext);
    const [darkMode, setDarkMode] = useState(theme.palette.type==='dark');
    const [dysFont, setDysFont] = useState(theme.typography.fontFamily[1]==='cursive');

    const handleDark = () => {
        setTheme(createMuiTheme({
                ...theme,
                palette: {
                  type: darkMode?'light':'dark',
                }
              })
        );
        setDarkMode(!darkMode);
    }

    const handleFont = () => {
        console.log(theme.typography.fontFamily);
        setTheme(createMuiTheme({
            ...theme,
            typography: {
                fontFamily: dysFont?[
                    'Roboto',
                    'sans-serif',
                ]:[
                    'Short Stack',
                    'cursive',
                ],
              }
          })
          
    );
    
        setDysFont(!dysFont);
    }

    return (
        <Main>
            <Typography variant="h5" component="h2" >
                Preferences
            </Typography>

            <React.Fragment>

                <List disablePadding>

                    <ListItem className={classes.listItem}>
                        <ListItemText primary={"Dark Mode"}
                            secondary={
                                ""
                            } />
                        <Switch
                            checked={darkMode}
                            onChange={handleDark}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemText primary={"Dyslexic Friendly Font"}
                            secondary={
                                ""
                            } />
                        <Switch
                            checked={dysFont}
                            onChange={handleFont}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItem>
                </List>
            </React.Fragment>
        </Main>
    );
}

export default Preferences;