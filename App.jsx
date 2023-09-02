import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import List from './components/list'


function App() {
  const items = [
    { name: 'Fresa', color: 'red' },
    { name: 'Berry', color: 'blue' },
    { name: 'Platano', color: 'green' },
    { name: 'Naranaja', color: 'orange' },

  ]

  return (
    <>
        <List items={items} />
    </>
  )
}

export default App
