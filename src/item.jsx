import React from "react";

export const Item=({title,data})=>{
return(
<div className="child">
      <h3>{title}</h3>
      <ol type="I">
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>

)
}