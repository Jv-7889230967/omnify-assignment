import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import {useState} from 'react'
import SearchName from '../Services-tabs/SearchName';
import Tags from '../Services-tabs/Tags';

const Services = () => {
  const [value, setValue] = useState('name');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value)
  };
  return (
    <div className='editor-page-container'>
      <div className='h-[40px] w-full flex'>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          style={{width:'100%'}}
        >
          <FormControlLabel style={{marginRight:60}} value="name" control={<Radio />} label="Search by name" />
          <FormControlLabel value="tags" control={<Radio />} label="Search by tags" />
        </RadioGroup>
      </div>
      {value==='name'&&<SearchName/>}
      {value==='tags'&&<Tags/>}

    </div>
  )
}

export default Services