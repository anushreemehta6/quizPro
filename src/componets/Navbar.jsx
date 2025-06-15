import React  from 'react'
import { useState } from "react";

function Navbar() {

    const [color, setcolor] = useState(false)
    

    
    return (
        <div className='flex justify-around'>
            <div className="logo"><img src="src\assets\logo.png" alt="" width={100} height={100} /></div>
            <div className="tags flex gap-5  list-none items-center text-xl cursor-pointer">
                <li onClick={ ()=>{
                    setcolor(!color)} } className= {` ${color? "text-violet-300" : "text-white"} `}>Home</li>
                <li onClick={()=>{
                    setcolor(!color)} } className= {` ${color? "text-violet-300" : "text-white"} `} >Features</li>
                <li onClick={()=>{
                    setcolor(!color)} } className= {` ${color? "text-violet-300" : "text-white"} `}>About us</li>
                <li onClick={()=>{
                    setcolor(!color)} } className= {` ${color? "text-violet-300" : "text-white"} `}>Get-Started </li>
            </div>
        </div>
    )
}

export default Navbar