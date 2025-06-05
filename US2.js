//  inc dec by pressing the button value can inc by pressing inc button till value reach to 1
// dec till 0
import React,{useState} from 'react'
function US2()
{
    const [count,setcount]=useState(0)
        function handelInc()
        {
            if(count<10)
            {setcount(count+1)}
        }
        function handelDec()
        {
            if(count>0)
            {setcount(count-1)}
        }
        return(
            <>
            <p>you clicked {count}</p>
            <button onClick={handelInc}>+</button>
            <button onClick={handelDec}>-</button>
            </>
        )
}
export default US2