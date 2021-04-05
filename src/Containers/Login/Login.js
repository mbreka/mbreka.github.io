import React, {useState, useContext} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {UserContext} from '../../Context/UserContext/UserContext';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Main from '../../Components/Main/Main';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    margin: {
        marginBottom: theme.spacing(2),
    },
    noDecoration: {
        textDecoration: 'none',
    },
}));

function Login() {
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleLogin = () => {
        setUser({
            loggedIn: true,
            username: username,
            password: password,
            liked: [],
            cart: [],
        });
    };
    return (
        <Main >
            <Grid className={classes.root}>
                <Grid item xs className={classes.margin} >
                    <Typography variant="h5" component="h2">
                        Login
                    </Typography>
                </Grid>
                <form>
                    <Grid item xs>
                        <TextField
                        className={classes.margin}
                        name="username"
                        label="Username"
                        fullWidth
                        type="text" 
                        value={username}
                        onChange={updateUsername}
                        variant="outlined" />
                    </Grid>
                    <Grid item xs className={classes.margin}>
                        <TextField 
                        className={classes.margin} 
                        name="password" 
                        label="Password" 
                        fullWidth 
                        type="password"
                        value={password}
                        onChange={updatePassword}
                        variant="outlined" />
                    </Grid>
                </form>
                
                <Grid container xs className={classes.buttons}>
                    <Grid item xs>
                        <Link to="/register" className={classes.noDecoration}>
                        <Button >Register</Button>
                        </Link>
                    </Grid>
                    <Grid item>
                    <Link to="/" className={classes.noDecoration}>
                        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Main>
    );
}

export default Login;