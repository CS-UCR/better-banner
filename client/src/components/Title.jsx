import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import useTheme from '@material-ui/core/styles/useTheme';

export default function Title({ children }) {
    const theme = useTheme();
    return (
        <Grid
            container
            spacing={2}
            style={{
                paddingBottom: theme.spacing(2)
            }}
        >
            <Grid item xs={12}>
                <Slide in timeout={200} direction='right'>
                    <Typography variant='h4'>{children}</Typography>
                </Slide>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
}

Title.propTypes = {
    children: PropTypes.node.isRequired
};
