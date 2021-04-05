import React from 'react';

import Component, { makeStyles } from '@material-ui/core/'

const useStyle = makeStyles(
    {
        root: {
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            height: '100vh',
            opacity: 0.4,
            top: 0,
            left: 0,
        },
    }
);

const Background = () => {
    const classes = useStyle();

    return (
        <img className={classes.root} src='/assets/images/landing/landing_1.jpeg' />
    );
}

export default Background;