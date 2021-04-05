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
    },
    margin: {
        marginBottom: theme.spacing(2),
    },
    noDecoration: {
        textDecoration: 'none',
    },
}));

function Register() {
    const classes = useStyles();
    const [user, setUser] = useContext(UserContext);

    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleCheck = () => {
        setChecked(!checked);
    }
    
    const handleRegister = () => {
        if (!checked) return;

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
                        Register
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
                <Grid item className={classes.margin}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleCheck}
                                name="check"
                                color="primary"
                            />
                        }
                        label="I agree to terms of service."
                    />
                </Grid>
                <Grid container xs className={classes.buttons}>
                    <Grid item xs>
                        <Link to="/login" className={classes.noDecoration}>
                        <Button >Login</Button>
                        </Link>
                    </Grid>
                    <Grid item>
                    <Link to={checked?"/":"#"} className={classes.noDecoration}>
                        <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
                    </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Main>
    );
}

export default Register;