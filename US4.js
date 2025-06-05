//CHANGE THE IMAGE ON CLICK OF BUTTON
import React,{use, useState} from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
function US4()
{
    const[pic,setpic]=useState(img1)
    function handelImage()
    {
        //setpic(ic=>(ic===img1?img2:img1))
        setpic(ic=>(ic===img1?img2:ic===img2?img3:img1))
       
    }
    return(
        <>
        <button onClick={handelImage}>click To Change Image</button>
        <img src={pic} height={'200px'} width={'200px'} />
        </>
    )
}
export default US4