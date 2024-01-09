import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Tyler",
    age:35,
    address: {
      city: "RVC",
      state: "New York",
      country: "United States"
    }
  }
  let newArr = [1,2,3,4,5,6,7,8]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card username='Tyler' myArr={newArr} />
      <Card username='Frank' post='Musician'/>
      <Card />
    </>
  )
}

export default App
