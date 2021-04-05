import React, { Component, useState, useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import { UserContext } from '../../Context/UserContext/UserContext';
import { Redirect } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Container from '@material-ui/core/Container';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import InfoTable from '../../Components/InfoTable/InfoTable';
import Spacer from '../../Components/Spacer/Spacer';
import { Link, withRouter, useLocation } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { useSnackbar } from 'notistack';

function SimpleBreadcrumbs(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className={props.classes.breadLink} color="inherit">
                <Typography>Home</Typography>

            </Link>
            <Link to="/products" className={props.classes.breadLink} color="inherit">
                <Typography>Products</Typography>
            </Link>
            <Typography color="textPrimary">{props.value}</Typography>
        </Breadcrumbs>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '2rem 0',
    },
    images: {
        marginTop: '1rem',
    },
    content: {
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    spacing: {
        margin: '0.2rem',
        padding: '0.6rem',
    },
    spacer: {
        marginLeft: 'auto',
    },
    price: {
        width: '100%',
        padding: '1rem',
    },
    breadLink: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    buy: {
        marginBottom: '3rem',
    },
}));

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

const Product = (props) => {
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext);
    const [products, setProducts] = useContext(ProductContext);
    const [redirect, setRedirect] = useState('');

    const { params } = props.match;
    const product = products[params.id];

    const [inCart, setInCart] = useState(user.cart.includes(product));
    const [inLiked, setInLiked] = useState(user.liked.includes(product));
    
    const { enqueueSnackbar } = useSnackbar();

    

    const handleCart = () => {
        const variant = inCart ? 'error' : 'success';
        const msg = inCart ? 'Product removed from cart.' : 'Product added to cart.';
        enqueueSnackbar(msg, { variant });
        if (inCart) {
            const newCart = arrayRemove(user.cart, product);
            setUser(prevUser => ({
                ...prevUser,
                cart: newCart,
            }));
            setInCart(false);
        } else {
            const newCart = [...user.cart, product];
            setUser(prevUser => ({
                ...prevUser,
                cart: newCart,
            }));
            setInCart(true);
        }
    }

    const alertUser = (msg) => {
        const variant = 'error';
        enqueueSnackbar(msg, { variant });
    }

    const doRedirect = (url) => {
        setRedirect(url);
    };


    return (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <Paper square elevation={0}>
                <Grid container>
                    <Grid item className={classes.spacing} xs={12} md={6}>
                        <Typography variant='h4' >{product.name}</Typography>
                        <SimpleBreadcrumbs value={product.name} classes={classes} />
                        <Grid item xs className={classes.images}>
                            <ImageSlider images={product.images} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} className={classes.content}>
                        <Paper elevation={0} className={classes.price}>
                            <Grid container>
                                <Grid container className={classes.buy}>
                                    <Grid item xs={12}>
                                        <Typography variant='h5'>
                                            {product.price}$
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='p'>
                                            Ships to Croatia
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='p' color='textSecondary'>
                                            In stock
                                    </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container >
                                    <Grid item xs={6}>
                                        <Button
                                            onClick={user.loggedIn ? (() => handleCart()) : (() => doRedirect("/login"))}
                                            color="primary"
                                            startIcon={<ShoppingCartIcon />}
                                        >{inCart?'Remove':'Add'}</Button>
                                    </Grid>
                                    <Grid item xs={6} align='right'>
                                        <Button
                                            onClick={()=>{alertUser("This feature is disabled.")}}
                                            variant="contained"
                                            color="primary"
                                            startIcon={<ShoppingBasketIcon />}
                                            className={classes.spacer}
                                        >Buy now</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.spacing}>
                        <Typography variant='h5'>
                            Description
                        </Typography>
                        <Typography>{product.description}</Typography>
                    </Grid>

                    {
                        product.table ?
                            <Grid container className={classes.spacing}>
                                <Typography variant='h5'>Specifications</Typography>
                                <InfoTable rows={product.table} />
                            </Grid>
                            : ''
                    }
                </Grid>
            </Paper>
            <Spacer />
            {redirect ? (<Redirect push to={redirect} />) : ''}
        </Container>
    );
}

export default withRouter(Product);