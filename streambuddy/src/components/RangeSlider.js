import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function setMarks(props) {
    return [
        {
            value: props.minVal,
            label: `${props.minVal}`
        },
        {
            value: props.maxVal,
            label: `${props.maxVal}`
        }
    ]
}

function valuetext(value) {
    return `${value}`;
}



function RangeSlider(props){
    const [value, setValue] = React.useState([props.minVal, props.maxVal]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.getSelectedYears(newValue);
    };


    return(
        <div className="RangeSlider">
            <Typography id="range-slider" gutterBottom>
                {props.textLabel}
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="year-slider"
                getAriaValueText={valuetext}
                max={props.maxVal}
                min={props.minVal}
                step={props.increments}
                marks={setMarks(props)}
            />
        </div>
    )
}

export default RangeSlider;