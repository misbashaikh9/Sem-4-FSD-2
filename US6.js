//Task-4
// Write a React code to pass message  “My {brand}. It is  a {color} {model} from {year}.” And message will convert details of car by clicking button.

import React,{use, useState} from 'react'
function US6()
{
    const[obj,setobj]=useState({name:"BMW",Brand:"x50",year:2020,color:"red"})
    function hc()
    {
        
            setobj({name:"Audi",Brand:"Z-5",year:2025,color:"royal-blue"})
    }
     return(
            <>
            <h1> I have {obj.name} - {obj.Brand} having {obj.color} colour in year {obj.year}</h1>
            <button onClick={hc}> Click Me</button>
            </>
        )
}
export default US6