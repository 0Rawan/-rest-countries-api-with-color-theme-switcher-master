'use client'
import React, { useEffect, useState, useContext } from 'react'
import { DataContext } from '../context/dataContext';
import Card from "./card";
import jsdata from "../data"



export default function CardsGrid() {
    const { data, setData } = useContext(DataContext);

    useEffect(()=>{
        if(data.length === 0){
            setData(jsdata)
        }
    })
    
  return (
    <div className='flex flex-row flex-wrap justify-center   xl:grid xl:grid-cols-4   gap-4 px-5 py-8 sm:px-10'>
        {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}

    </div>
  )
}
