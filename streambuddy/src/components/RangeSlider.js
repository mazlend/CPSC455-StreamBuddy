import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function setMarks(props) {
    return [
        {
            value: props.minYear,
            label: `${props.minYear}`
        },
        {
            value: props.maxYear,
            label: `${props.maxYear}`
        }
    ]
}

function valuetext(value) {
    return `${value}`;
}



function RangeSlider(props){
    const [value, setValue] = React.useState([props.minYear, props.maxYear]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.getSelectedYears(newValue);
    };


    return(
        <div className="RangeSlider">
            <Typography id="range-slider" gutterBottom>
                Years
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="year-slider"
                getAriaValueText={valuetext}
                max={props.maxYear}
                min={props.minYear}
                marks={setMarks(props)}
            />
        </div>
    )
}

export default RangeSlider;