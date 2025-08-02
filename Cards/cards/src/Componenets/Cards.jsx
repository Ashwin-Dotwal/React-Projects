import React from 'react'

const Cards = (props) => {

  console.log(props)
  
  return (
    <div className=' mr-5 bg-amber-500 text-black inline-block p-6 text-center rounded'>
      <img className='h-32 w-32 rounded mb-3 my-3 mx-4' src={props.photu}alt="" />
      <h1 className='text-2xl font-semibold mb-4 text-black'>{props.user},{props.surname}</h1>
       <h2>{props.city},{props.age}</h2>
        <h2>{props.profession}</h2>
      <button className=' mt-4 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Submit</button>
     
    
    </div>
  )
}

export default Cards