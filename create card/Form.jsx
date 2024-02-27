import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
    const {register,handleSubmit,reset}=useForm()
    const handleFormSubmit=(data)=>{
        handleFormSubmitData(data)
        reset()
    }
  return (
    <div className='mt-2 flex gap-10 justify-center'>
        <form className='flex gap-4 ' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='rounded-md outline-none text-xs px-2 py-1 font-semibold' type="text" placeholder='name' />
            <input {...register('email')} className='rounded-md outline-none text-xs px-2 py-1 font-semibold' type="text" placeholder='email' />
            <input {...register('image')} className='rounded-md outline-none text-xs px-2 py-1 font-semibold' type="text" placeholder='image url' />
            <input className='px-2 py-1 bg-blue-600 rounded-md text-xs font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form