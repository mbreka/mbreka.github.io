import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        height: '80vh',
    },
    paper: {
        padding: '2rem',
        margin: '1rem',
        width: '100%',
        maxWidth: '400px',
    },
    header: {
        marginBottom: '2rem',
    },
});

function Main(props) {
    const classes = useStyles();

    return (
        <main>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.root}
            >
                <Paper elevation={3} className={classes.paper}>
                    {props.children}
                </Paper>
            </Grid>

        </main>
    );
}

export default Main;