import React, { useState } from 'react'
import FloatingHearts from '../FloatingHearts.jsx'
import '../App.css'

const Yes = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date(Date.now()));

    const formattedDate = currentDateTime.toLocaleDateString(); 
    const formattedTime = currentDateTime.toLocaleTimeString()
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-pink-100'>
        
        <div>
            <FloatingHearts/>
            <img src="https://i.postimg.cc/wTDG30TB/yes.gif" alt="" />
        </div>
        <div className='flex flex-col py-1 my-1 px-1 mx-1 items-center'>
            <div>
                <h1 className='text-2xl my-2 text-center'>So our unique journey starts from here!!!</h1>
            </div>
            <div>
                {formattedDate}
                
            </div>
            <div>
                {formattedTime}
            </div>
        </div>
        <FloatingHearts/>
        <FloatingHearts/>
    </div>
  )
}

export default Yes