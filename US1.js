import React,{useState} from 'react'
function US1()
{ 
    const [count,setcount]=useState(0)
    function handelCount()
    {
        setcount(count+1)
    }
    return(
        <>
        <p>you clicked {count}</p>
        <button onClick={handelCount}>ClickMe</button>
        </>
    )

}
export default US1
