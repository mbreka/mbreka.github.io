import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext/UserContext';
import CustomCard from '../../Components/CustomCard/CustomCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import InfoTable from '../../Components/InfoTable/InfoTable';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, withRouter, useLocation } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { CssBaseline } from '@material-ui/core';

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

function calcTotalPrice(products) {
    var total = 0;
    console.log("AAAA");
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
        console.log(total);
    }
    return total;
}

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}


const Cart = (props) => {
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();

    const handleCart = (product) => {
        
        const variant = 'success';
        const msg = 'Product removed from cart.';
        enqueueSnackbar(msg, { variant });

        const newCart = arrayRemove(user.cart, product);
        setUser(prevUser => ({
            ...prevUser,
            cart: newCart,
        }));

    };
    
    const alertUser = (msg) => {
        const variant = 'error';
        enqueueSnackbar(msg, { variant });
    }
    
    return (
        <Container maxWidth='md' className={classes.root}>
<CssBaseline />
            <Paper className={classes.paper}>
                {user.cart.length > 0 ?

                    <React.Fragment>
                        <Typography variant="h6" className={classes.total} gutterBottom>
                            Order summary
      </Typography>
                        <List disablePadding>
                            {user.cart.map((product) => (
                                <ListItem className={classes.listItem} key={product.name}>
                            <ListItemText primary={<Link className={classes.noDecoration} to={'/product/'+product.id}>{product.name}</Link>}
                                    secondary={
                                    <Button size='small' color="secondary" onClick={() => { handleCart(product) }}>REMOVE</Button>
                                    } />
                                    <Typography variant="body2">$ {product.price}</Typography>
                                </ListItem>
                            ))}
                            <ListItem className={classes.listItem}>
                                <ListItemText primary="Total:" />
                                <Typography variant="subtitle1" className={classes.total}>
                                    $ {calcTotalPrice(user.cart)}
                                </Typography>
                            </ListItem>
                        </List>
                        <Grid item align='right'>
                            <Button onClick={()=>{alertUser("This feature is disabled.")}} variant="contained" color="primary">Proceed to checkout</Button>
                        </Grid>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Your cart is empty. Please add something to your cart first.
      </Typography>


                        <Grid item align='right'>
                            <Link to='/products' className={classes.noDecoration}>
                                <Button variant="contained" color="primary">Go to products</Button>
                            </Link>

                        </Grid>
                    </React.Fragment>

                }

            </Paper>
        </Container>
    );
}

export default withRouter(Cart);