import { create } from 'zustand'

{/*core = 核心頁面 */}

const cameraPresets = {
  login:{
  cameraPosition: [9.3, 0.13, -18.8],
  cameraRotation: [0.0082, 1.1824, -0.0076],
fov: 30,  near: 0.1, far: 1000,    
  },

  //漢堡
  menu:{
 cameraPosition: [41.92, 1.31, 13],
  cameraRotation: [3.10, 0.75, -3.11],
fov: 30,  near: 0.1, far: 1000,    
  },

  //主場景
  core:{
  cameraPosition: [73.29839, 2.49563, 18.03052],
  cameraRotation: [-0.13754, 1.32739, 0.13353], 
fov: 30,  near: 0.1, far: 1000,    
  },
  mainScene: {
  cameraPosition: [69.68917, 1.92035, 20.79524],
  cameraRotation: [-0.01318, 1.10262, 0.01176],
  fov: 30,
  near: 0.1,
  far: 1000,
},
  mainScene: {
  cameraPosition: [69.68917, 1.92035, 20.79524],
  cameraRotation: [-0.01318, 1.10262, 0.01176],
  fov: 30,
  near: 0.1,
  far: 1000,
},
  twoScene: {
  cameraPosition: [57.9, 17.19, 60],
  cameraRotation: [-0.019, 0.85, 0],
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
