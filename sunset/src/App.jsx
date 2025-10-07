import { useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'

function App() {


  return (
    <>
    <AppRoutes/>
    
    <SlowThing/>
    </>
  )
}

export default App


