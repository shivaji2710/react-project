import React from 'react'
import Pro from './Pro'

function Products() {
  var Products = [
    {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
    {title:"Cula",description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",live:true,case:false},
    {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",live:true,case:true},
    {title:"Maniv",description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",live:true,case:true},
    {title:"YIR 2022",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",live:true,case:false},
    {title:"Yahoo!",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:true},
  ]
  return (
    <div className=' py-32 bg-zinc-900'>
      {Products.map((val,index)=> 
      <Pro key={index}  val={val} />)}
    </div>
  )
}

export default Products