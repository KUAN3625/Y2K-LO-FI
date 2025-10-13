import { cameraPosition } from 'three/tsl'
import { create } from 'zustand'


const Usecamer = create((set)=>({
    cameraPosition: [9.3, 0.13, -18.8],
    steCameraPosition:(pos) => set({ cameraPosition: pos}),

}))

export default Usecamer