import React, { useState } from "react";
import Town from "./Town";

function City(props)
{
    const [clicked,setClicked] = useState(false);
    const { name,towns,inedex } = props;
    return (
        <li>
            <h4 id = { "city" + ( index + 1 ) } onClick = { ()=>setClicked(!clicked) }>
            {name}
            </h4>
            {clicked ? 
            <ul>
                {towns.map((item)=>
                (<Town
                name = {item.name}
                index = { towns.indexOf(item) }
                /> ))}
            </ul> : ""}
        </li>
    )
}

export default City;