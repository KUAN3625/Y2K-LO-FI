import { Suspense, useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'
import { Canvas } from '@react-three/fiber'
import { CameraControls, OrbitControls } from '@react-three/drei'

import { DirectionalLight } from 'three'
import DLight from './components/three/light'
import { Model } from './components/three/Home'




function App() {


  return (
    <>
      <div className=' fixed  z-10 w-screen h-screen pointer-events-none '>

        <AppRoutes />
      </div>



      <div className=' flex  w-screen h-screen'>
        <Canvas false
          frameloop="demand"
         
          className=' fixed inset-0'>


          <DLight />
          <Model />
          <OrbitControls />
    <axesHelper args={[10]}/>
    
        </Canvas>


      </div>

    </>
  )
}

export default App


