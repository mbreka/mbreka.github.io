import React, { useContext } from 'react';
import Main from '../../Components/Main/Main';
import ItemsGrid from '../../Components/ItemsGrid/ItemsGrid';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Products.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { ProductContext } from '../../Context/ProductContext/ProductContext';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2rem 1rem',
    },
}));


const Products = (props) => {
    const [products, setProducts] = useContext(ProductContext);
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <Grid container spacing={2} align='center' >
                    {products.map(product => (
                        <Grid item xs={12} sm={12} md={6}>
                        <ProductCard product={product} key={product.id} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );

}

export default Products;