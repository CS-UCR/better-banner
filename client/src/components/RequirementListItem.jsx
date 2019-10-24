import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, Typography, Icon } from '@material-ui/core';
import RightArrowIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: theme.spacing(1)
    },
    circle: {
        minWidth: '175px',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        marginRight: theme.spacing(2),
        borderRadius: '25px',
        '& p': {
            color: theme.palette.common.white,
            textAlign: 'center',
            letterSpacing: '1px',
            fontWeight: '500'
        }
    }
}));

export default function RequirementMenuItem({
    total,
    complete,
    onClick,
    label
}) {
    const classes = useStyles();
    return (
        <ListItem divider button onClick={onClick}>
            <ListItemText>{label}</ListItemText>
            <div className={classes.circle}>
                <Typography>{`${complete}/${total} Complete`}</Typography>
            </div>
            <Icon fontSize='large' className={classes.icon}>
                <RightArrowIcon />
            </Icon>
        </ListItem>
    );
}

RequirementMenuItem.propTypes = {
    total: PropTypes.number.isRequired,
    complete: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};
