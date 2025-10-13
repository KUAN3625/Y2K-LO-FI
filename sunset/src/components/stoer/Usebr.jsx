import { create } from 'zustand'

const useCameraStore = create((set) => ({
  cameraPosition: [9.3, 0.13, -18.8],
  cameraRotation: [0.0082, 1.1824, -0.0076],
fov: 30, 
near: 0.1,
far: 1000,

  setCameraPosition: (pos) => set({ cameraPosition: pos }),
  setCameraRotation: (rot) => set({ cameraRotation: rot }),
  setCamerFov:(fov) => set({ fov }),
  setCamerNear:(near) => set({ near }),
  setCamerFar:(far) => set({ far }),
  
}))

export default useCameraStore
