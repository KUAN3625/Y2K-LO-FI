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
    <div className=' fixed  z-10 w-screen h-screen '>
      <AppRoutes/>
      
    </div>

<div className=' flex  w-screen h-screen'
>
    <Canvas className=' fixed inset-0  bg-green-400'>

        <SlowThing />
        <Environment preset="warehouse" />
      <OrbitControls/>
      </Canvas>
</div>
    
    </>
  )
}

export default App


