import React, { useState } from 'react'

const TestOne = () => {
    const [open,setOpen] = useState(true);
  return (
    <div>
        <p>Test One Component</p>

        
        <button onClick={()=>setOpen(!open)}>{open?"hide":"show" }  </button>
        {/* <button >hide</button> */}
        <p>
        {
            open? "Here some Test" :""

        }
        </p>
       

    </div>
  )
}

export default TestOne