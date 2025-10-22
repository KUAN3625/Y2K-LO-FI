import { useState } from "react"
import Musicbox from "../../components/tool-page/music/Musicplay"
import TimerPanel from "../../components/tool-page/Pomodoro/TimePanel"
import { Eye, EyeOff } from "lucide-react";



const Core =() =>{
    const [isHidden, setIsHidden] = useState(false);

    return(
        <main className="relative w-full min-h-screen text-gray-800 px-6 py-8">
        
        <div
        className={`transition-opacity duration-500 ${
          isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <TimerPanel />

        <Musicbox />
      </div>


        <button
        onClick={() => setIsHidden(!isHidden)}
        className="pointer-events-auto absolute bottom-7 right-9 z-50 p-4 rounded-full 
             bg-white/30 backdrop-blur-md shadow-md 
             hover:bg-white/50 transition"
        title={isHidden ? "👁️" : "👁️"}
      >
        {isHidden ? <Eye size={25} /> : <EyeOff size={25} />}
      </button>


        </main>

    )

}

export default Core