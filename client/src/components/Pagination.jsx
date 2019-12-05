import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

export default function Pagination({
    onBack,
    onNext,
    currentPage,
    total,
    children
}) {
    return (
        <div>
            <Grid container spacing={0} alignItems='center' justify='center'>
                <Grid container item xs={4} justify='flex-end'>
                    <IconButton onClick={onBack}>
                        <ChevronLeft />
                    </IconButton>
                </Grid>
                <Grid container item xs={4} justify='center'>
                    <Typography>{`${currentPage} of ${total}`}</Typography>
                </Grid>
                <Grid container item xs={4} justify='flex-start'>
                    <IconButton onClick={onNext}>
                        <ChevronRight />
                    </IconButton>
                </Grid>
            </Grid>
            {children}
        </div>
    );
}

Pagination.propTypes = {
    onBack: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};
