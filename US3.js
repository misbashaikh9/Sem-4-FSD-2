// # CREATE A  US3 TO CHANGE COLOUR FROM GREEN TO RED BY CLICKING CHANGE STYLE BUTTON
import React,{use, useState} from 'react'
function US3()
{
    const[style,setStyle]=useState('green')
    function ChangeColor()
    {
        setStyle('red')
    }
    return(
        <>
        <button onClick={ChangeColor}> Red </button>
        <h1 style={{color:style}}>See The Text Color</h1>
        </>
    )
}
export default US3