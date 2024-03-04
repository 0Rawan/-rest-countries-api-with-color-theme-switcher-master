
'use client'
import React from 'react'
import Image from "next/image";

export default function Card(props) {
  return (
   

<div className=" w-full mx-auto md:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{width: "270px",
  height: "20rem"}}>
    
    <div style={{width: "100%", height: "170px"}} className='relative'>
        <Image  className="rounded-t-lg  object-cover"  src={props.flag} alt="" fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/> 
    </div>
    <div className="p-5">
      <div className='text-md text-white font-semibold mb-2'>{props.name}</div>
      <div className='text-gray-600 dark:text-gray-400'><span className='text-dark dark:text-white text-sm me-1 '>Population:</span>{props.population}</div>
      <div className='text-gray-600 dark:text-gray-400'><span className='text-dark dark:text-white text-sm me-1'>Region:</span>{props.region}</div>
      <div className='text-gray-600 dark:text-gray-400 '><span className='text-dark dark:text-white text-sm me-1'>Capital:</span>{props.capital}</div>
    </div>
</div>


  )
}
