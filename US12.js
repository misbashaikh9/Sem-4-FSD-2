import React,{use, useState} from 'react'
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpeg"
import i5 from "./i5.jpg"
function US12()
{
    const gallery=[{id:1,pic:i1,category:"Samsung"},{id:2,pic:i2,category:"MI"},
                   {id:3,pic:i3,category:"Oneplus"},{id:4,pic:i4,category:"Oppo"},
                   {id:5,pic:i5,category:"Apple"}]
       const[img,setimg]=useState(gallery)
    function hp(item)
    {
        const findData=gallery.filter((val)=>val.category===item)
        if(item!="All")
        {
            setimg(findData)
        }
        else
        {
            setimg(gallery)
        }
    }
    return(
        <>
        <button onClick={()=>hp("All")}>All</button>
        <button onClick={()=>hp("Samsung")}>Samsung</button>
        <button onClick={()=>hp("MI")}>MI</button>
        <button onClick={()=>hp("Oppo")}>Oppo</button>
        <button onClick={()=>hp("Apple")}>Apple</button>
        {img.map((val)=>
        {
            return(
                <>
                <img src={val.pic} height="200px" width="200px"/>
                </>
            )

        })}
        </>
    )
}
export default US12