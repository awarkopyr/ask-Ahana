import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import sendEmail from '../sendEmail.js';

const App = () => {
  const [position, setPosition] = useState({ x: 50, y: 50});
  const [noButton, setNoButton] = useState(true);
  const [plz, setPlz] = useState(true);
  function No(){
    setPosition({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
  }



  return(
    <div className="relative flex flex-col justify-center items-center h-screen bg-pink-200 text-center">
        
        <div className='text-center my-2 '>
          <h1 className="text-2xl px-1 font-Sour+Gummy:ital">Hey Ahana!! Will you go on a date with me?</h1>
        </div>
        {plz? <img  src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif" alt="" /> : <img  src="https://i.postimg.cc/vBDd7Gxb/Sad-Milk.gif" alt="" /> }
        <div className=''>
          <Link to='/yes'><button className='my-2 mx-2 gap-3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded' onClick={sendEmail}>Yes</button></Link>
          {noButton? <button className='my-2 mx-2 gap-3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded' onClick={()=>{setNoButton(false);setPlz(false)} } >No</button> : 
          <div style={{ position: 'absolute', top: position.y, left: position.x }}>
            <button className='my-2 gap-3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded' onClick={No}>No</button>
        </div> }
          
        </div>
        
    </div>
  )
};

export default App;
