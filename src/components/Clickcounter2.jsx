import React from 'react'
import { useState } from "react";

export const ClickCounter2 = () => {
    const [counter,setCounter]=useState(0)

   const clickCounter =()=>{
    setCounter(counter + 1);
    }
  return (
    <div className='ClickCounter2'>
        <button onClick={clickCounter} className='counter_btn'>Count:{counter}</button>
    </div>
  )
}
