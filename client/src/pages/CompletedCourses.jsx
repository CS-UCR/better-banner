import React from 'react';
import useTitle from '../hooks/useTitle';
import List from '@material-ui/core/List';
//import { makeStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RemoveIcon from '@material-ui/icons/Remove';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         maxWidth: 300,
//         backgroundColor: theme.palette.backgorund.paper
//     }
//}))


export default function () {
    useTitle('Completed Courses');
    return (
        <List component='div' disablePadding>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon/>
            </ListItemIcon>
            <ListItemText primary='Course 1' />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary='Course 2' />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary='Course 3' />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary='Course 4' />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary='Course 5' />
        </ListItem>
        <ListItem>
            <ListItemIcon>
                <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary='Course 6' />
        </ListItem>    
            
        </List>
    );

};