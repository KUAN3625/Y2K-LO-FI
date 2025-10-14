import useCameraStore from "../stoer/usebr"

export const Testbut = ( ) => {
const setCameraPosition = useCameraStore(s => s.setCameraPosition)
const setCameraRotation = useCameraStore(s => s.setCameraRotation)
const setCamerFov       = useCameraStore(s => s.setCamerFov) 

return(
   <div
      className="fixed top-4 left-4 z-50 space-x-4"
      style={{ pointerEvents: "auto" }} // ⬅️ 確保按鈕可以被點
    >
        <button 
        onClick={()=>{
                setCameraPosition([45.3, 2.554, 18.8])
                setCameraRotation([0.0082, 10, 0])
                setCamerFov(30)}}
                >
                    M
                </button >

      <button
        onClick={() => {
          // 切回 login
          setCameraPosition([9.3, 0.13, -18.8])
          setCameraRotation([0.0082, 1.1824, -0.0076])
          setCamerFov(30)
        }}
      >
        Login
      </button>


    </div>

)

}