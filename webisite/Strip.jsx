import React from 'react'

function Strip({val}) {
  return (
    <div className='flex items-center justify-between w-[16.66%] px-2 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-900'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Strip