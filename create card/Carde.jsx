import React from 'react'

function Carde({user,handleRemove ,id}) {
  return (
    <div className='w-[12vw] h-full rounded-md bg-blue-400 flex flex-col items-center p-2'>
      <div className='image w-10 h-10 rounded-full overflow-hidden bg-zinc-600 '>
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <h1 className='text-[1vw] mt-2 font-bold'>{user.name}</h1>
      <h3 className='opacity-40 text-xs font-semibold'>{name.email}</h3>
      <p className='text-xs mt-1 leading-none tracking-tight font-semibold text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eum?</p>
      <button onClick={()=>handleRemove(id)} className='text-xs bg-blue-700 px-2 rounded-md mt-2' >Remove it</button>
    </div>
  )
}

export default Carde