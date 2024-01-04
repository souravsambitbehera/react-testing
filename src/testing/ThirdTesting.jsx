import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const ThirdTesting = () => {
 

  const [sizeFormat, setSizeFormat] = useState("");
  

  return (
    <div>
     <FormControl
        id="format"
        data-testid="format-select"

        size="small"
        sx={{ width: "100px", marginRight: "10px" }}
      >
        <InputLabel id="demo-simple-select-label">Format</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sizeFormat}
          label="Select Format"
          onChange={(e) => setSizeFormat(e.target.value)}
          sx={{ height: "30px", fontSize: "10px" }}
        >
          <MenuItem sx={{ fontSize: "10px" }} value={"A4"}>
            A4
          </MenuItem>
          <MenuItem sx={{ fontSize: "10px" }} value={"A8"}>
            A8
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ThirdTesting;