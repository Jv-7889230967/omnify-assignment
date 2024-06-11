import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { rows } from '@/app/utils/Row-Data';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function SearchName() {
  return (
    <Autocomplete
      multiple
      id="Search Payer or Attendee Name"
      options={rows}
      disableCloseOnSelect
      getOptionLabel={(option) => `${option.services}`}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 3 }}
              checked={selected}
            />
            <span style={{ marginRight: 8 }}>{option.services}</span>
          </div>
          <div>
            <span style={{
              textAlign: 'center',
              width: 'fit-content',
              backgroundColor: '#F8FAFC',
              borderRadius: '4px',
              fontSize: '14px',
              padding: '3px'
            }}>
              {option.type}
            </span>
            <span style={{
              textAlign: 'center',
              width: 'fit-content',
              backgroundColor: '#F8FAFC',
              whiteSpace:'nowrap',
              borderRadius: '4px',
              fontSize: '14px',
              padding: '3px',
              color: option.status === 'active' ? 'green' : 'goldenrod'
            }}>
              {option.status}
            </span>
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
