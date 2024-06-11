import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { rows } from '../utils/Row-Data';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchBar() {
    return (
        <Autocomplete
            multiple
            id="Search Payer or Attendee Name"
            options={rows}
            disableCloseOnSelect
            getOptionLabel={(option) => `${option.payer} - ${option.status}`}
            renderOption={(props, option, { selected }) => (
                <li {...props} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    <div>
                        <span style={{ marginRight: 2 }}>{option.payer}</span>
                        <span style={{ textAlign: 'center', width: 'fit', backgroundColor: '#d9d9d9', borderRadius: '13px', fontSize: '14px', padding: '3px' }}>{option.status}</span>
                    </div>
                </li>
            )}
            style={{ width: '100%' }}
            renderInput={(params) => (
                <TextField {...params} label="Select Clients" placeholder="Clients" />
            )}
        />
    );
}
