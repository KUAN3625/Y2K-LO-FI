import { CameraShake } from "@react-three/drei"
import { useEffect, useRef } from "react"
import useCameraStore from "../../stoer/usebr"
import { useThree } from "@react-three/fiber"


export const CameraWiggle =  (   ) => {
const {camera} = useThree()
const shakeRef = useRef()

const {
    cameraPosition,
    cameraRotation,
    fov,
    near,
    far,
} = useCameraStore()

useEffect(() => {
    camera.position.fromArray(cameraPosition)
    camera.rotation.fromArray(cameraRotation)
    camera.fov = fov
    camera.near = near
    camera.far = far
    camera.updateProjectionMatrix()
  }, [cameraPosition, cameraRotation, fov, near, far])



return(
    
    <CameraShake
      ref={shakeRef}
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.2}
      pitchFrequency={0.2}
      rollFrequency={0.2}
      intensity={1}
      decay={false}
    />



)


}