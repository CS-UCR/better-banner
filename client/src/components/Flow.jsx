import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography } from '@material-ui/core';

export default function CurrentUIFlow(){

    return(
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                        Registration Application
                    </Typography>
                </Toolbar>
            </AppBar>
            

        </div>
    );
}