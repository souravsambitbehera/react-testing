import { Button, Checkbox, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledForm } from "./Styled.Component";

const Form = () => {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const [checked, setChecked] = useState(false);
  const [error,setError] = useState("")

//  console.log(country)
// console.log(username)
// console.log(checked)

const handleSumbitButton = (e)=>{
    e.preventDefault()
    if( !username || !country || !checked){
        setError("All Fields Are Required ")
    }else{
        setError("")
        console.log(`Name is ${username}, Country is ${country},`)
        
        
    }

}
  return (
    <StyledForm>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        sx={{ pb: 2 }}
        data-testid="username-tesxfield"
        InputLabelProps={{ 'aria-label': 'Username' }}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Country"
        defaultValue="India"
        helperText="Please select your currency"
        // onChange={(e)=>setCountry()}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        //
      >
        {country_name.map((option) => (
          <MenuItem key={option.value} value={option.value}
         
          >
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <span>
      <Checkbox onChange={() => setChecked(!checked)} /> Accept Checkbox

      </span>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <Button variant="contained" onClick={handleSumbitButton}>Submit</Button>
    </StyledForm>
  );
};

export default Form;

const country_name = [
  {
    value: "India",
  },
  {
    value: "Australia",
  },
  {
    value: "South-Africa",
  },
  {
    value: "Japan",
  },
];
