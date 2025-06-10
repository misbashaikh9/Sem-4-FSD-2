import {useReducer} from "react";
const initialValue=0
function UR1()
{
    const[state,dispatch]=useReducer(reduce,initialValue)
    function reduce(state,action)
    {
        if(action.type=="increment"){return state+1}
        if(action.type=="decrement"){return state-1}
        if(action.type=="reset"){return initialValue}
    }
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>inc</button>
        <button onClick={()=>dispatch({type:"decrement"})}>dec</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </>

    )
}
export default UR1
//ADDION SUBSTRACTION,DIVSION,MUL THROUGH REDUCER