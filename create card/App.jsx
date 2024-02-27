import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {
  const [user,setUser]=useState([])

  const handleFormSubmitData =(data)=>{
    setUser([...user,data])
  }

  const handleRemove=(id)=>{
    setUser(()=>user.filter((item,index)=>index!=id))
  }
  return (
    <div className='w-full h-screen flex items-center  justify-center bg-zinc-500 '>
      <div className="container mx-auto">
      <Cards handleRemove={handleRemove} user={user}/>
      <Form handleFormSubmitData={handleFormSubmitData}/>
      </div>
    </div>
  )
}

export default App