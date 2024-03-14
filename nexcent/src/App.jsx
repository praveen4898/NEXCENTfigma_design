import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Lessons from './components/Lessons'
import Clients from './components/Clients'
import Unseen from './components/Unseen'
import Help from './components/Help'
import Caring from './components/Caring'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Lessons />
    <Clients />
    <Unseen />
    <Help />
    <Caring />
    <Footer />
    </>

  )
}

export default App
