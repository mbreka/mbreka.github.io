import React, { useContext, useState } from 'react';
import { Link, withRouter, useLocation } from "react-router-dom";

// Material-UI

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { UserContext } from '../../Context/UserContext/UserContext';


import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import SettingsIcon from '@material-ui/icons/Settings';
import BallotIcon from '@material-ui/icons/Ballot';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from '../../Components/SearchBar/SearchBar'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color'),
        color: theme.palette.common.black,
        
        maxWidth: `calc(100vw - 2em)`,
        [theme.breakpoints.up('sm')]: {
            maxWidth: `400px`,
        },
        marginLeft: 'auto',
        width: 'auto',
    },
    searchIcon: {
        padding: theme.spacing(0, 1, 0, 1),
        height: '100%',
        position: 'absolute',
        right: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        overflow: 'hidden',
    },
    inputInput: {
        padding: theme.spacing(1, 0, 1, 1),
        color: 'transparent',
        transition: theme.transitions.create('width'),
        paddingRight: '2rem',
        width: `2rem`,
            '&:focus': {
                color: theme.palette.common.black,
                width: `calc(100vw - 8em)`,
                
            },
    },
    appBar: {
        backgroundColor: 'transparent',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.black,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),

    },
    active: {
        color: theme.palette.primary.main,
    },
    profile: {
        padding: 0,
    },
    menuItem: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    icon: {
        color: theme.palette.text.primary,
    }
}
));

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function Navigation() {
    const classes = useStyles();
    const location = useLocation();

    const [user, setUser] = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogOut = () => {
        setUser({
            loggedIn: false,
            username: '',
            password: '',
            liked: [],
            cart: [],
        });
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="sticky"
                className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                        onClick={handleDrawerOpen}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon className={classes.icon}/>
                    </IconButton>
                    <Typography className={classes.title} color='textPrimary' variant="h6" noWrap>
                        WebShop
            </Typography>
                    <SearchBar />
                </Toolbar>
            </AppBar>
            <React.Fragment>
            <Drawer
                className={classes.drawer}
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>

                    <Grid container alignItems="center">
                        <Grid item xs>
                            {user.loggedIn ?
                                <ListItem className={classes.profile}>
                                    <ListItemIcon>
                                        <Avatar src="/broken-image.jpg" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={user.username}
                                    />
                                </ListItem>
                                : ''}
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronRightIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>

                <Divider />

                <List>
                    <Link to="/" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/')}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Home'}
                                
                            />
                        </ListItem>

                    </Link>
                    <Link to="/products" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/products')}>
                            <ListItemIcon><BallotIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Products'}
                            />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                {user.loggedIn ?
                <Link to="/" className={classes.menuItem} onClick={handleLogOut}>
                <ListItem button>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText
                        primary={'Log Out'}
                    />
                </ListItem>
            </Link>
            :
                    <Link to="/login" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/login')}>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Log In'}
                            />
                        </ListItem>
                    </Link>
                }
                {user.loggedIn ? '':
                    <Link to="/register" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/register')}>
                            <ListItemIcon><PersonAddIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Register'}
                            />
                        </ListItem>
                    </Link>
            }
            {user.loggedIn?
                    <Link to={user.loggedIn?"/mycart":"/login"} className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/mycart')}>
                            <ListItemIcon>
                                <StyledBadge badgeContent={user.cart.length} color="primary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText
                                primary={'My Cart'}
                            />
                        </ListItem>
                    </Link>
                    : ''}
                {user.loggedIn?
                    <Link to={user.loggedIn?"/myliked":"/login"} className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/myliked')}>
                            <ListItemIcon>
                            <StyledBadge badgeContent={user.liked.length} color="primary">
                                    <FavoriteIcon />
                                    </StyledBadge>
                            </ListItemIcon>
                            <ListItemText
                                primary={'Liked'}
                            />
                        </ListItem>
                    </Link>
                    : ''}
                </List>
                <Divider />
                <List>
                    <Link to="/rubrics" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/rubrics')}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Rubrics'}
                            />
                        </ListItem>
                    </Link>
                    <Link to="/references" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/references')}>
                            <ListItemIcon><FormatQuoteIcon /></ListItemIcon>
                            <ListItemText
                                primary={'References'}
                            />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link to="/preferences" className={classes.menuItem} onClick={handleDrawerClose}>
                        <ListItem button selected={(location.pathname === '/preferences')}>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText
                                primary={'Preferences'}
                            />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>

            </React.Fragment>
        </div >
    );
}

export default withRouter(Navigation);