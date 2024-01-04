import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledForm } from "./Styled.Component";
import axios from "axios";

const Form = () => {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const [checked, setChecked] = useState(false);
  const [error,setError] = useState("")
  const[userData,setUserData]= useState({})

//  console.log(country)
// console.log(username)
// console.log(checked)

const handleSumbitButton = (e)=>{
    e.preventDefault()
    if( !username || !country || !checked){
        setError("All Fields Are Required ")
    }else{
        setError("")
        const userData = {
          name: username,
          country: country,
        };
  
        axios.post("http://localhost:3030/users", userData)
          .then((response) => {
            console.log(response.status);
            console.log(`Name is ${username}, Country is ${country}`);
            alert("You are succesfully signup..")
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        // console.log(`Name is ${username}, Country is ${country},`)
       
      
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
      <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label">Country Name</InputLabel>
       <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={country}
    label="Country Name"
    onChange={(e)=>setCountry(e.target.value)}
  >
        {country_name.map((option) => (
          <MenuItem key={option.value} value={option.value}
         
          >
            {option.value}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
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
