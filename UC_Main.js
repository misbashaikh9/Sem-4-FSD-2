import { createContext } from "react";
import UC1 from './UC1'
const Fname=createContext()
const Lname=createContext()
function Main()
{
    return(
        <>
        <Fname.Provider value="Abc">
        <Lname.Provider value="Pqr">
        <UC1/>
        </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export default Main
export {Fname,Lname}