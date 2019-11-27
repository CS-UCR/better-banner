import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));



export default function ControlledOpenSelect(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const { label, filter, options } = props;

    const handleChange = event => {
        setValue(event.target.value);
        filter(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // const handleFilterChoice = () => {
    //     filter(age);
    // }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id='demo-controlled-open-select-label'>{label}</InputLabel>
            <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={value}
                onChange={handleChange}
            >
                <MenuItem value=''>
                    None
                </MenuItem>
                {options.map((x, index) => (
                    <MenuItem key={index} value={x}>{x}</MenuItem>
                ))}
                {/* <MenuItem value={'CS150'}>CS150</MenuItem>
                <MenuItem value={'CS179G'}>CS179G</MenuItem>
                <MenuItem value={'CS120B'}>CS120B</MenuItem> */}
            </Select>
        </FormControl>
    );
}

ControlledOpenSelect.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
}