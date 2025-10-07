import { Suspense, useState } from 'react'
import './App.css'
import AppRoutes from './Home/Routes'
import Entry from './Home/Entry/Entry'
import { Route } from 'react-router-dom'
import SlowThing from './components/three/Background3D'
import { Canvas } from '@react-three/fiber'
import { AsciiRenderer, Environment, Fisheye, GizmoHelper, Grid, OrbitControls } from '@react-three/drei'
import { Model } from './components/three/002'
import { DirectionalLight } from 'three'




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
        
          <directionalLight /* 自然光 */
    position={[5, 10, 5]}
    intensity={1}
    castShadow
    shadow-bias={-0.0001}
  />
             <SlowThing />
            <Model />

      <OrbitControls/>
      </Canvas>

</div>
    
    </>
  )
}

export default App


