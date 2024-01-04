import React, { useState } from "react";

const FirstTesting = () => {
  const [text, setText] = useState("");
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>FirstTesting</p>
      <input
        type="text"
        name="sourav"
        id="texti-id"
        placeholder="Enter Your Name"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <button onClick={()=>setCount(count+1)} data-testid="button-click">click</button>
      <p></p>
    </div>
  );
};

export default FirstTesting;
