import { useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'
import { Canvas } from '@react-three/fiber'
import { AsciiRenderer, Environment, Fisheye, GizmoHelper, Grid, OrbitControls } from '@react-three/drei'



function App() {


  return (
    <>
    <div className=' fixed  z-10 w-screen h-screen pointer-events-none '>
      <AppRoutes/> 
    </div>



<div className=' flex  w-screen h-screen'
>
    <Canvas camera={{ position: [0, 3, 5] }}
    className=' fixed inset-0  '>
        <Environment preset="warehouse" />


        <SlowThing />

      <OrbitControls/>



      </Canvas>

</div>
    
    </>
  )
}

export default App


