import { CameraControls } from '@react-three/drei'
import { useRef } from 'react'

export const CameraManager = () => {
  const controls = useRef();

return(


<CameraControls
  ref={controls}
  minPolarAngle={Math.PI/4}
  maxPolarAngle={Math.PI/2}
  minDistance={2}
  maxDistance={8}

/>



)



}