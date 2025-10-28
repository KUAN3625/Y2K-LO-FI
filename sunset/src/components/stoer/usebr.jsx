import { create } from 'zustand'

{/*core = 核心頁面
  存放所有攝影機位置 */}

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
cameraPosition: [76.03791, 4.57941, 21.38244],
  cameraRotation: [-0.19300, 1.20846, 0.18075], 
fov: 30,  near: 0.1, far: 1000,    
  },
  mainScene: {
  cameraPosition: [69.68917, 1.92035, 20.79524],
  cameraRotation: [-0.01318, 1.10262, 0.01176],
  fov: 30,
  near: 0.1,
  far: 1000,
},

  twoScene: {
  cameraPosition: [43.93124, 18.95469, 46.26991],
  cameraRotation: [-0.04962, 0.90411, 0.039],
  fov: 40,
  near: 0.1,
  far: 1000,
},

threeScene: {
  cameraPosition: [120.01746, 19.47653, 12.68547],
  cameraRotation: [-0.12415, 0.90898, 0.09813],
  fov: 30,
  near: 0.1,
  far: 1000,
}

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
