import React, { useState, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { UserContext } from '../../Context/UserContext/UserContext';
import Share from '../../Components/Share/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import MuiAlert from '@material-ui/lab/Alert';
import './CustomCard.css';
import Paper from '@material-ui/core/Paper';

import { SnackbarProvider, useSnackbar } from 'notistack';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '400px',
    transition: 'all 200ms',
  },
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
  },
  image: {
    maxWidth: '100%',
    height: 200,
  },
  content: {
    paddingBottom: 0,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  liked: {
    color: '#ff6d75',
  },
  incart: {
    color: '#ff6d75',
  },
});

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function CustomCard(props) {
  const classes = useStyles();
  const [user, setUser] = useContext(UserContext);
  const [inCart, setInCart] = useState(user.cart.includes(props.product));
  const [inLiked, setInLiked] = useState(user.liked.includes(props.product));
  const { enqueueSnackbar } = useSnackbar();


  const [redirect, setRedirect] = useState('');

  const handleLike = () => {
    // SNACK
    const variant = inLiked?'error':'success';
    const msg = inLiked?'Product removed from liked.':'Product added to liked.';
    enqueueSnackbar(msg, { variant });
    if (inLiked) {
      const newLiked = arrayRemove(user.liked, props.product);
      setUser(prevUser => ({
        ...prevUser,
        liked: newLiked,
      }));
      setInLiked(false);
    } else {
      const newLiked = [...user.liked, props.product];
      setUser(prevUser => ({
        ...prevUser,
        liked: newLiked,
      }));
      setInLiked(true);
    }
  };


  const doRedirect = (url) => {
    setRedirect(url);
  };

  const handleCart = () => {
    // SNACK
    const variant = inCart?'error':'success';
    const msg = inCart?'Product removed from cart.':'Product added to cart.';
    enqueueSnackbar(msg, {variant});
    if (inCart) {
      const newCart = arrayRemove(user.cart, props.product);
      setUser(prevUser => ({
        ...prevUser,
        cart: newCart,
      }));
      setInCart(false);
    } else {
      const newCart = [...user.cart, props.product];
      setUser(prevUser => ({
        ...prevUser,
        cart: newCart,
      }));
      setInCart(true);
    }
  };

  const childRef = useRef();


  return (
    <Card className={classes.root}>
      <Paper elevation={3}>
      <CardContent className={classes.content} onClick={() => { doRedirect("/product/" + props.product.id) }}>
        <Grid container align='left' justify="start">
          <Grid item xs>
            <Typography color="textSecondary" gutterBottom variant='p'>
              {props.product.type}
            </Typography>
          </Grid>
          <Grid item>
            <Rating
              name="customized-color"
              value={props.product.rating}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              size='small'
              disabled
            />
          </Grid>
        </Grid>
        <img src={props.product.images[0]} className={classes.image} alt="" />
        <Grid container alignItems="center">
          <Grid item xs align='left'>
            <Typography gutterBottom variant="h6">
              {props.product.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              {props.product.price}$
            </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions disableSpacing>
        <Grid container align="left">
          <Grid item xs>
            <Tooltip title={inCart ? "Remove from cart" : "Add to cart"} aria-label="add">
              <IconButton
                onClick={user.loggedIn ? (() => handleCart()) : (() => doRedirect("/login"))}
              >
                <Badge color="secondary" variant="dot" invisible={!inCart}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={inLiked ? "Remove from liked" : "Add to liked"} aria-label="add">

              <IconButton
                aria-label="add to favorites"
                onClick={user.loggedIn ? (() => handleLike()) : (() => doRedirect("/login"))}
              >
                <FavoriteIcon className={inLiked ? classes.liked : ''} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share" aria-label="add">

              <IconButton aria-label="share" onClick={() => { childRef.current.showAlert() }}>
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </CardActions>

      {redirect ? (<Redirect push to={redirect} />) : ''}
      <Share ref={childRef} id={props.product.id}/>
      </Paper>
      
    </Card>
  );
};

export default CustomCard;