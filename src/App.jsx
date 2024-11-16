import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Ask from './pages/Ask.jsx'
import Yes from './pages/Yes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='linear-gradient(rgb(0, 249, 236), rgb(71, 150, 229))'>
        <Routes>
        <Route path='/' element={<Ask/>}/>
        <Route path='/yes' element={<Yes/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
