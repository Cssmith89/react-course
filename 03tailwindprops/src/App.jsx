import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Shane',
    age: 30,
    location: 'Ireland'
  }
  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="shane" myArr={newArr}/>
    <Card username='Json' post='Staff Engineer'/>
    </>
  )
}

export default App
