import React from 'react'
import Carde from './Carde'

function Cards({user,handleRemove}) {
  return (
    <div className='w-full flex-wrap  max-h-[23vw] overflow-auto gap-2 p-2  bg-zinc-400 flex items-center justify-center'>
        
        {user.map((item,index)=>{
        return <Carde handleRemove={handleRemove} id={index} user={item} key={index}/> 
        })}
        
    </div>
  )
}

export default Cards