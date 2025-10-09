import { Suspense, useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'
import { Canvas } from '@react-three/fiber'
import { AsciiRenderer, Billboard, Bounds, Environment, Fisheye, GizmoHelper, Grid, OrbitControls, PointerLockControls, ScreenSpace } from '@react-three/drei'
import DLight from './components/three/light'
import { Model } from './components/three/Home'





function App() {


  return (
    <>
      
      <div className=' fixed  z-10 w-screen h-screen pointer-events-none '>
        <AppRoutes />
      </div>



      <div className=' flex  w-screen h-screen'
      >

        <Canvas false camera={{ fov: 30, near: 0.1, far: 1000, position: [5, 0, 3] }}
          frameloop="demand"

          className=' fixed inset-0'>

          <Environment preset="warehouse" />

          <DLight />

          <Model />


          <SlowThing />

          <OrbitControls />

        </Canvas>

      </div>

    </>
  )
}

export default App
