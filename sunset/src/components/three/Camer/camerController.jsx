// CamerController.js
import { createContext, useContext, useRef } from 'react'
import gsap from 'gsap'

const CameraContext = createContext()

export const CameraProvider = ({ children }) => {
  const cameras = useRef({})

  const registerCamera = (name, cam) => {
    cameras.current[name] = cam
  }

  const moveToCamera = (name) => {
    const cam = cameras.current[name]
    if (!cam) return

    gsap.to(cam.parent.position, {
      x: cam.position.x,
      y: cam.position.y,
      z: cam.position.z,
      duration: 1.5,
      ease: 'power2.inOut',
    })

    gsap.to(cam.parent.rotation, {
      x: cam.rotation.x,
      y: cam.rotation.y,
      z: cam.rotation.z,
      duration: 1.5,
      ease: 'power2.inOut',
    })
  }

  return (
    <CameraContext.Provider value={{ registerCamera, moveToCamera }}>
      {children}
    </CameraContext.Provider>
  )
}

export const useCamera = () => useContext(CameraContext)
