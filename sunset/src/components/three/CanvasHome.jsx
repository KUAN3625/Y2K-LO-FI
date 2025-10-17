import { Route } from 'react-router-dom'
import { Canvas, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Fisheye, Grid, OrbitControls } from '@react-three/drei'
import DLight from './light'
import CameraController from './Camer/camerController'
import { useEffect } from 'react'
import Role from './2D/Role/Role'
import { Model } from './Home_v5'





const DebugState = () => {
  const state = useThree()

  useEffect(() => {
    console.log('R3F State:', state)
  },)
  return
}


const BgCanvas = () => {

  return (
    <>

      <Canvas
        shadows="baked"
        camera={{ fov: 30, near: 0.1, far: 1000, position: [80, 0.3073650447758762, -6.772709083563987] }}
        frameloop="always"
        dpr={[1, 2]} style={{ imageRendering: "pixelated" }}
        className=' fixed inset-0'>

        <CameraController />
        <Role position={[0, 0, 1]} />
        <DLight />
        <Model />
        <DebugState />
        {/*<OrbitControls/>*/}
        <OrbitControls />

        <Grid
        cellSize={1}
  cellColor="#ffaa88"
  sectionSize={5}
  sectionColor="#ffccaa"
  fadeDistance={30}
  fadeStrength={1}
  position={[0, -1.5, 0]}
        />
      </Canvas>

    </>
  )


}


export default BgCanvas;