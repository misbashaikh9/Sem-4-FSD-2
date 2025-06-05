/* Task-9
Create react app which contains form with following fields.
• First Name(Input type text)
• Lastname(Input type text)
• Email(Input type email)
• Password(Input type password)
• Message (Textarea)
• Gender(Radio Button)
• City (Dropdown)
Display submitted values in alert box. (Using useState Hook)
*/

import React,{use, useState} from 'react'

function US9()
{
    const[formdata,setformdata]=useState({})

    function hc(event)
    {
        const{name,value}=event.target
        setformdata({...formdata,[name]:value})
    }
    function hs(e)
    {
        e.preventDefault()
        alert("your Form is Submitted \n name"+formdata.name)
    }
    return(
        <>
        <form onSubmit={hs}>
        FirstName: <input type="text" name='fname' onChange={hc}/>
        Lastname: <input type="text" name='lname' onChange={hc}/>
        Email: <input type="email" name='email' onChange={hc}/>
        Password: <input type="password" name='pass' onChange={hc}/>
        Message: <input type="textarea" name='mess' onChange={hc}/>
        <input type="radio" name='gender' onChange={hc}/> Male:
       <input type="radio" name='gender' onChange={hc}/> Female:
        City: <select name='city' onChange={hc}>
        <option value="abd">Ahemedabad</option>
        <option value="rajkot">Rajkot</option></select>
        <input type='submit'/>
        </form>
        </>
    )
}
export default US9