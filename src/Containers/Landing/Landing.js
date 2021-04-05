import React, { Component, useState, useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import { UserContext } from '../../Context/UserContext/UserContext';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './Landing.css';
import { Link, withRouter, useLocation } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 0',
    },
    section: {
        margin: '20vh 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    content: {
        marginBottom: '1rem',
        padding: '1rem',
        textAlign: 'center',
    },
    button: {
        marginRight: '1rem',
    },
    noDecoration: {
        textDecoration: 'none',
    },
    map: {
        border: 'none',
    }
}));

function Landing(props) {
    const classes = useStyles();

    const [products, setProducts] = useContext(ProductContext);
    const [user, setUser] = useContext(UserContext);

    return (
        <Container className={classes.root}>
            <CssBaseline />
            {user.loggedIn ? 
            
            <Grid>
                <Grid item className={classes.section} align="center">
                    <Container maxWidth='xs'>
                        <Grid item className={classes.content}>
                        <Typography variant="h4" color='textSecondary'>
                                See what we offer
                            </Typography>
                            <Typography variant="p" color='textSecondary'>
                                Experience our ever growing offers, with more than <strong>5 products</strong> ready to ship at any moment.
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Link to="/products" className={classes.noDecoration}>
                                <Button
                                    variant="contained"
                                    color="primary"

                                    className={classes.spacer}
                                >
                                    see products
                                                </Button>
                            </Link>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            :
                <Grid>
                    <Grid item className={classes.section} align="center">
                        <Container maxWidth='md' >
                            <Grid item className={classes.content}>
                            <Typography variant="h3" color="primary">
                                    Hi, there!
                            </Typography>
                                <Typography variant="h6" color='textSecondary'>
                                    In order to experience all the advantages, please register with an account.
                            </Typography>
                            </Grid>
                            <Grid item xs>
                                <Link to="/login" className={classes.noDecoration}>
                                    <Button
                                        color='textSecondary'
                                        className={classes.button}
                                    >Log In</Button>
                                </Link>
                                <Link to="/register" className={classes.noDecoration}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.spacer}
                                    >Register</Button>
                                </Link>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            }
            
            <Grid>
                <Grid item className={classes.section} align="center">
                    <Container maxWidth='lg'>
                        
                    <Typography variant="h4" color="primary">
                                    Why us?
                            </Typography>
                        <Grid container justify="center">
                        
                            <Grid item className={classes.content} md={4}>
                                <Typography variant="h5">
                                    Fastest Shipping
                            </Typography>
                                <Typography variant="h6" color='textSecondary'>
                                    We ship out every order within an hour from receiving it. Never wait a month for your product ever again!
                            </Typography>
                            </Grid>

                            <Grid item className={classes.content} md={4}>
                                <Typography variant="h5">
                                    Money Back Guarantee
                            </Typography>
                                <Typography variant="h6" color='textSecondary'>
                                    You will be refunded for every product that does not match the description.
                            </Typography>
                            </Grid>

                            <Grid item className={classes.content} md={4}>
                                <Typography variant="h5" >
                                    Highest Quality
                                </Typography>
                                <Typography variant="h6" color='textSecondary'>
                                    We sell products from verified vendors only. Liftime warranty on all products from our shop.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            <Grid>
                <Grid item className={classes.section} align="center">
                    <Container maxWidth='lg'>
                        
                    <Typography variant="h4" color="primary">
                    Where to find us?
                            </Typography>
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.2171300084758!2d15.980101078748717!3d45.782527089573215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6700d914d87%3A0x4fa46297e452fb1c!2sRochester%20Institute%20of%20Technology!5e0!3m2!1shr!2shr!4v1616770081990!5m2!1shr!2shr" width="100%" height="300" className={classes.map} allowfullscreen="" loading="lazy"></iframe>              
                        
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withRouter(Landing);