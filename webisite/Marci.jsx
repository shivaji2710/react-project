import React from 'react'

function Marci({imageurl}) {
  return (
    <div className='bg-zinc-900 flex py-5 gap-20 whitespace-nowrap overflow-hidden'>
        {imageurl.map((url,index)=> <img key={index} src={url} className='flex-shrink-0 w-32 ' alt="" /> )}
        {imageurl.map((url,index)=> <img key={index} src={url} className='flex-shrink-0 w-32 ' alt="" /> )}
    </div>
  )
}

export default Marci