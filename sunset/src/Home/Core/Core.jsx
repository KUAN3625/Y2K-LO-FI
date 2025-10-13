import Musicbox from "../../components/tool-page/music/Musicplay"
import TimerPanel from "../../components/tool-page/Pomodoro/TimePanel"

const Core =() =>{

    return(
        <main className=" relative  w-screen min-h-screen text-gray-800 overflow-hidden">
        
        <TimerPanel />

        <Musicbox />
        </main>

    )

}

export default Core