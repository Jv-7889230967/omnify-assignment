import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext, useEffect, useState } from 'react';
import ResetContext from '../context/Reset-Context';

export default function DatePickerValue() {
  const {reset}=useContext(ResetContext);
  const [value, setValue] = useState(dayjs('2022-04-17'));
useEffect(()=>{
  if(reset)
    {
      setValue(dayjs('2022-04-17'));
    }
},[reset])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Pick a date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
