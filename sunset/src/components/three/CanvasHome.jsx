import { Route } from 'react-router-dom'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Home'
import DLight from './light'
import CameraController from './Camer/camerController'
import { useEffect } from 'react'


const DebugState = () => {
  const state = useThree()

  useEffect(() => {
    console.log('R3F State:', state)
  }, [])
  return null
}

const BgCanvas = () => {

      return (
          <>
        <Canvas camera={{ fov: 30, near: 0.1, far: 1000, position: [10, 1, -20] }}
          frameloop="demand"
          className=' fixed inset-0'>    
          <CameraController />
          <Environment preset="warehouse" />
          <DLight />
          <Model />
        <DebugState />
        </Canvas>
        </>
    )


}


export default BgCanvas;