import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function DatePickerWithRange({startDate,isDisabled, endDate,label,value,onChange,size}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker slotProps={{ textField: { size: size } }}  sx={{backgroundColor:"white"}} onChange={onChange} disabled={isDisabled} value={value} minDate={startDate} maxDate={endDate}  label={label}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}