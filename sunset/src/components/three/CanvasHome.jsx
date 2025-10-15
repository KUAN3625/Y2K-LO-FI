import { Route } from 'react-router-dom'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Model } from './Home'
import DLight from './light'
import CameraController from './Camer/camerController'
import { useEffect } from 'react'
import Role from './2D/Role/Role'


const DebugState = () => {
  const state = useThree()

  useEffect(() => {
    console.log('R3F State:', state)
  }, )
  return
}


const BgCanvas = () => {

      return (
          <>
          
        <Canvas camera={{ fov: 30, near: 0.1, far: 1000, position: [80, 0.3073650447758762, -6.772709083563987] }}
          frameloop="always"
          className=' fixed inset-0'>    

          <CameraController />
          <Role position={[0, 0, 1]} />
          <DLight />
          <Model />
        <DebugState />
        {/*<OrbitControls/>*/}
     <OrbitControls/>
     

        </Canvas>

        </>
    )


}


export default BgCanvas;