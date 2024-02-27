import React from 'react'
import Button from './Button'

function Pro({val}) {
  return (
    <div className='w-full py-20 bg-zinc-900 text-white '>
        <div className='max-w-screen-xl mx-auto  flex items-center justify-between'>
          <h1 className='text-[4vw]'>{val.title}</h1>
          <div className="dets w-[18vw]">
            <p className='mb-10'>{val.description}</p>
            <span className='w-[10vw] inline-block '>
            <div className='flex items-center gap-10'>
            {val.live && <Button/>}
            {val.case && <Button title='case study'/>}
            </div>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Pro