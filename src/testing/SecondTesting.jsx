

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const SecondTesting = () => {
  const[selectedDate,setSelectedDate] = useState(null)
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              disablePast
              slotProps={{ textField: { size: "small", readOnly: true,"data-testid":"datepicker" } }}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
        </LocalizationProvider>
  )
}

export default SecondTesting