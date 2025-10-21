import Musicbox from "../../components/tool-page/music/Musicplay"
import TimerPanel from "../../components/tool-page/Pomodoro/TimePanel"

const Core =() =>{

    return(
        <main className="relative w-full min-h-screen text-gray-800 px-6 py-8">
        
        <TimerPanel />

        <Musicbox />
        </main>

    )

}

export default Core