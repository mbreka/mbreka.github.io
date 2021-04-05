import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '5rem',
    },
}));

const Spacer = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}></Container>
    );
}

export default Spacer;