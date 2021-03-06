import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%'
    },
    loader: {
        position: 'absolute'
    }
});

const Loader = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                style={{ height: '100%' }}
                alignItems='center'
                justify='center'
            >
                <CircularProgress className={classes.loader} />
            </Grid>
        </div>
    );
};

export default Loader;
