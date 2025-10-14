import { create } from 'zustand'

{/*core = 核心頁面 */}

const cameraPresets = {
  login:{
  cameraPosition: [9.3, 0.13, -18.8],
  cameraRotation: [0.0082, 1.1824, -0.0076],
fov: 30,  near: 0.1, far: 1000,    
  },

  menu:{
  cameraPosition: [45.30, 2.544, -18.8],
  cameraRotation: [0.0082, 1.1824, -0.0076],
fov: 30,  near: 0.1, far: 1000,    
  },

  core:{
  cameraPosition: [72.41439, 1.94809, 21.28092],
  cameraRotation: [-0.08799, 1.10061, 0.07848],
fov: 30,  near: 0.1, far: 1000,    
  },


  mainScene: {
  cameraPosition: [69.68917, 1.92035, 20.79524],
  cameraRotation: [-0.01318, 1.10262, 0.01176],
  fov: 30,
  near: 0.1,
  far: 1000,
},


}


const useCameraStore = create((set, get) => ({
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
  


  switchTo:(name) =>{
    const preset = cameraPresets[name]
if(!preset){
console.warn(`Camera preset"${name}" not found.`)
return
}

set({...preset, activeCamera:name, _updatedAt: Date.now(), })
  },
}))

export default useCameraStore
