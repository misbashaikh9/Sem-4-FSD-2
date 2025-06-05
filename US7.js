import React,{useState} from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
function US7()
{
    const [arr]=[img1,img2,img3]
    const [change,setchange]=useState(arr[0])
        function hc(e)
        {
            const random=Math.floor(Math.random()*arr.length)
            setchange(arr[random])
        }
        return(
            <>
            <img src={change} height='500px' width='500px' />
            <button onClick={hc}>Click To Change</button>
            </>
        )
}
export default US7