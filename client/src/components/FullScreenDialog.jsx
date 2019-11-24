import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Calender from '../pages/RegMainMenu'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    calendar: {
        padding: theme.spacing(2),
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={props.open} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' onClick={props.close} aria-label='close'>
                            <CloseIcon />
                        </IconButton>    
                    </Toolbar>
                </AppBar>
                <div className={classes.calendar}>
                    <Calender />
                </div>
            </Dialog>
        </div>
    );
}