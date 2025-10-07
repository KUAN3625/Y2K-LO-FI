import { useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'



function App() {


  return (
    <>
    <div className=' fixed'>
      <AppRoutes/>
      
    </div>

      <Canvas>
        <SlowThing />
        <Environment preset="warehouse" />
      </Canvas>
    </>
  )
}

export default App


