import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Checkboxes(props) {

    // const [data, setData] = useState([]);

    // const getData = () => {
    //     axios.get('/').then((res => {
    //         setData(res.data);
    //     }))
    // }

    return (
        <Autocomplete
            multiple
            id="checkboxes"
            options={data}
            disableCloseOnSelect
            getOptionLabel={(option) => option.country}
            renderOption={(option, { selected }) => (
                <React.Fragment>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.country}
                </React.Fragment>
            )}
            style={{ width: 200 }}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Country" placeholder="Country" />
            )}
        />
    );
}

const data = [
    { country: 'Austria'},
    { country: 'Brazil'},
    { country: 'Canada'},
    { country: 'China'},
    { country: 'Cuba'},
    { country: 'Denmark'},
    { country: 'France'},
    { country: 'Finland'},
    { country: 'Germany'},
    { country: 'Italy'},
    { country: 'Japan'},
    { country: 'Mexico'},
    { country: 'Russia'},
    { country: 'Spain'},
    { country: 'United Kingdom'},
    { country: 'United States of America'},
];

