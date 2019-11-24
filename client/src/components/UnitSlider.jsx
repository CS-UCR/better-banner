import React from 'react';
import { Typography, Slider} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: 200,
    }
});

function valueText(value){
    return `${value  }units`;
}

export default function UnitSlider(props){
    const classes = useStyles();
    const [value, setValue] = React.useState([0,200]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className={classes.root}>
            <Typography id='range-slider' gutterBottom>
            Unit Range
            </Typography>
            <Slider
                min={0}
                max={200}
                value={value}
                onChange={handleChange}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                getAriaValueText={valueText}
            />
        </div>
    );

}