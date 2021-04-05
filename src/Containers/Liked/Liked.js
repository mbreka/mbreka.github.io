import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext/UserContext';
import CustomCard from '../../Components/CustomCard/CustomCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 1rem',
    },
}));


const Liked = (props) => {
    const [user] = useContext(UserContext);
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <Grid container spacing={2} align='center' >
                {user.liked.map(product => (
                    <Grid item xs={12} sm={6} md={4}>
                        <CustomCard product={product} key={product.id} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

}

export default Liked;