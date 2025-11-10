import { Route } from 'react-router-dom'
import { Canvas, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Fisheye, Grid, OrbitControls, Preload } from '@react-three/drei'
import DLight from './light'
import CameraController from './Camer/camerController'
import { Suspense, useEffect } from 'react'
import Role from './2D/Role/Role'
import SphereByStatus from '../stoer/T'
import { CameraWiggle } from './Camer/cameraWiggle'

import { Site } from './004'
import { Humen } from './005'
import { MOD } from '../../../public/011'
import { GODD } from '../../../public/012'


const DebugState = () => {
  const state = useThree()

  useEffect(() => {
    console.log('R3F State:', state)
  },)
  return
}


const BgCanvas = () => {
useEffect(() => {
  const canvas = document.querySelector('canvas')
  if (canvas) {
    canvas.style.background = 'linear-gradient(to top, #d6783a, #fff6db)'
  }
}, [])



  return (
    <>

      <Canvas
        shadows="baked"
        camera={{ fov: 30, near: 0.1, far: 1000, position: [12.67, -0.46, 29.93] }}
        frameloop="always"
        
        className=' fixed inset-0'>
      
    
        <CameraController />
        <GODD />
        <Humen rotation={[0, Math.PI / 3, 0]} scale={0.56}  position={[ 38, -1.15, -2.5]}/>
        <DLight />
        <Site />
        <DebugState />
        <CameraWiggle />
 
        {/* <OrbitControls/> */}

        {/* <Role position={[0, 0, 1]} /> */}
        {/* <SphereByStatus /> */}

      </Canvas>

    </>
  )


}


export default BgCanvas;