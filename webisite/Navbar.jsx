import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div  className='max-w-screen-xl border-b-2 border-zinc-900  p-2 mx-auto flex items-center justify-between '>
      <div className="nleft flex items-center">
      <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="link flex gap-10 ml-20">
          {["Home", "Work", "Culture", "","News"].map((elem,index)=>(
            
           elem.length===0 ?  <span key={index} className='w-1 h-6 bg-zinc-600'></span> : (  <a key={index} className='text-sm flex items-center gap-1' href="#">
           {index===1 && ( <span className='inline-block w-1 h-1 bg-green-500 rounded-full '></span>)}
          {elem}
         </a> )))}
            
      </div>
        
        </div>

        <Button/>
    </div>
  )
}

export default Navbar