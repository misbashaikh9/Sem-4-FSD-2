import {useContext} from "react";
import {Fname,Lname} from "./UC_Main";
function UC2()
{
    const firstname=useContext(Fname)
    const lastname=useContext(Lname)
    return(
        <h1> your Name give by data is {firstname} {lastname}</h1>
    )
}
export default UC2
