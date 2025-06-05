////CHANGE THE IMAGE ON CLICK OF BUTTON
import React,{use, useState} from 'react'

function US5()
{
    const[fname,setfname]=useState(" ")
    const[lname,setlname]=useState(" ")
    function handelFName(event)
    {
        setfname(event.target.value)
    }
    function handelLName(event)
    {
        setlname(event.target.value)
    }
    return(
        <>
        <input type="text" name="Firstname" value={fname} onChange={handelFName}/>
        <input type="text" name="Lastname" value={lname} onChange={handelLName}/>
        <h1>Name: {fname} {lname}</h1>
        </>
    )
}
export default US5