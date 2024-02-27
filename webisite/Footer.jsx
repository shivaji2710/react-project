import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-3'>
            <div className='basis-1/2'>
                <h1 className='text-[10vw] font-semibold tracking-tighter ' >refokus.</h1>
            </div>
            <div className='basis-1/2 flex'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 capitalize'>social</h4>
                   { ["instagram","twitter","linkedin"].map((item,index)=><a  key={index} className='block mt-3 text-zinc-600'>{item}</a> )}
                </div>
                
                <div className='basis 2/3'>
                    <h4 className='mb-10 capitalize'>social</h4>
                   { ["instagram","twitter","linkedin"].map((item,index)=><a key={index} className='block mt-3 text-zinc-600'>{item}</a> )}
                </div>
                
            </div>
         </div>
    </div>
  )
}

export default Footer