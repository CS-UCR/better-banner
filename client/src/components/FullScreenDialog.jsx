import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
// import Calender from './Calendar'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    data: {
        padding: theme.spacing(2)
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    const { open, close, data } = props;

    return (
        <div>
            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            color='inherit'
                            onClick={close}
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div
                    className={classes.data}
                    style={{ width: '100vw', height: '100vh' }}
                >
                    {data}
                    {/* <Calender /> */}
                </div>
            </Dialog>
        </div>
    );
}

FullScreenDialog.defaultProps = {
    data: <></>
};

FullScreenDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
