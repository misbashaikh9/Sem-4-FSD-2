//  inc dec by pressing the button value can inc by pressing inc button till value reach to 1
// dec till 0
import React,{useState} from 'react'
function US_T1()
{
    const [num,setnum]=useState({})
    const [result,setresult]=useState(" ")
        function hc(e)
        {
            const{name,value}=e.target
            setnum({...num,[name]:value})
        }
        function Add(e)
        {
            setresult(parseInt(num.n1)+parseInt(num.n2))
        }
        function Sub(e)
        {
            setresult(parseInt(num.n1)-parseInt(num.n2))
        }
        return(
            <>
            <input type="number" name="n1" onChange={hc}/>
            <input type="number" name="n2" onChange={hc}/>
            <button onClick={Add}> + </button>
            <button onClick={Sub}> - </button>
            <h1>Result is={result}</h1>
            </>
        )
}
export default US_T1