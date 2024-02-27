import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function Card({width ,start ,para ,hover}) {
  return (
    <div className={`${width} bg-zinc-800 hover:${hover} rounded-md p-5 min-h-[30rem] flex flex-col justify-between`}>
       <div>
       <div className='w-full flex justify-between items-center'>
          <h3>one heading</h3>
          <FaLongArrowAltRight/>
        </div>
        <h1 className='text-[2vw] font-semibold mt-5'>whatevear heading</h1>
       </div>

       <div className='down w-full '>

        {start &&( 
          <>
          <h1 className=' text-[3vw] tracking-tight leading-none '>Start a Project</h1>
        <button className='rounded-full px-3 py-2 border-2 border-zinc-300 mt-6'> Contact Us</button>
          </>
        )}
       
       {para && (
        <p className='text-sm text-zinc-700 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magni.
        </p>
       )}
       </div>
    </div>
  )
}

export default Card