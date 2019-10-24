import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Typography, Icon } from '@material-ui/core';
import RightArrowIcon from '@material-ui/icons/ArrowRight';

export default function RequirementMenuItem({
    total,
    complete,
    onClick,
    label
}) {
    return (
        <ListItem button onClick={onClick}>
            <ListItemText>{label}</ListItemText>
            <Typography>{`${complete}/${total}`}</Typography>
            <Icon>
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
