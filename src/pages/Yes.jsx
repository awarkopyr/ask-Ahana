import React, { useEffect, useRef, useState } from 'react'
import FloatingHearts from '../FloatingHearts.jsx'
import '../App.css'
import captureScreenshot from '../captureScreenshot.js'
import FloatingElements from '../FloatingElements.jsx'

const Yes = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date(Date.now()));

    const formattedDate = currentDateTime.toLocaleDateString();
    const formattedTime = currentDateTime.toLocaleTimeString()
    const imgRef = useRef(null);
    const [isImgLoaded, setIsImgLoaded] = useState(false)
    const handleImgLoad = () => { 
        setIsImgLoaded(true);
        setTimeout(() => { captureScreenshot(); }, 3000)
    };

    return (
        <div className='screenshot-target relative flex flex-col justify-center items-center h-screen bg-pink-200 text-center'>
            <FloatingElements />
            <div>
                <img src="https://i.postimg.cc/wTDG30TB/yes.gif" alt="" ref={imgRef} onLoad={handleImgLoad} />
            </div>
            <div className='flex flex-col py-1 my-1 px-1 mx-1 items-center'>
                <div>
                    <h1 className='text-2xl my-2 text-center'>Yeeyy ! Finally</h1>
                    <h1 className='text-2xl my-2 text-center'>So our unique journey starts from here!!!</h1>
                </div>
                <div>
                    {formattedDate}

                </div>
                <div>
                    {formattedTime}
                </div>
            </div>
            <FloatingHearts />
            <FloatingHearts />
        </div>
    )
}

export default Yes