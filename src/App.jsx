import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import RoomPage from './pages/Room'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>}/>
      </Routes>
    </>
  )
}

export default App
