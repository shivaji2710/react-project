import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Button({title="Get Started"}) {
  return (
    <div className='min-w-40 py-2 px-2 bg-zinc-100 rounded-full  flex items-center justify-between text-[black]'>
        <span className='text-sm font-medium '>{title}</span>
        <FaLongArrowAltRight/>
    </div>
  )
}

export default Button