import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Tailwind And Props Concepts</h1> */}
      <h1 className="bg-blue-400  text-5xl font-bold text-black p-5 rounded-xl ">
      Tailwind Css And Props Concepts
    </h1>
    <Card username='Ashish Singh' btnText='Go On'/>
    <Card username='Anil Kumar'  btnText='See More'/>
    <Card username='Prabin nanda' btnText='let go'/>
    </>
  )
}

export default App
