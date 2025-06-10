// Write a reactJS program to perform the tasks as asked below.
// Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js, Comp3.js.
// Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the numbers using useContext.
import { createContext } from "react";
import Comp1 from './Comp1'
import Comp2 from './Comp2'
const A=createContext()
const B=createContext()
const a1=5
const b1=3
function Main()
{
    return(
        <>
        <A.Provider value= a1>
        <B.Provider value= b1>
        <UC1/>
        </B.Provider>
        </A.Provider>
        </>
    )
}
export default Main
export {A,B}
