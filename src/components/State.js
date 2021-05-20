import React,{ useState } from "react";
import City from "./City";

function City(props)
{
    const { index,name,cities } = props;
    const [clicked,setClicked] = useState(false);
   
    return (
        <li>
            <h3 id = { "state" + (index + 1) } onClick = { ()=> setClicked(!clicked) }>
            {name}
            </h3>
            {clicked ? 
            ( <ul>
                {cities.map((item)=>
                ( <city
                name = {item.name}
                towns = {item.towns}
                index = {cities.indexOf(item)}
                /> ))}
            </ul> ): ""}
        </li>

    )
}
export default City;