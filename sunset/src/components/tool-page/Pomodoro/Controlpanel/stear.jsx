import { usePomodoroRuntime } from "../../../stoer/Pomodoro/usePomodoroRuntime"

export const TimeStear = () => {
    const { start } = usePomodoroRuntime()

    return (
        <>              
        <button className="py-4 w-15 text-2xl bg-gray-900 font-pixel text-white rounded-lg hover:bg-gray-700 transition"
        onClick={start} >
            OK
        </button>
        
        </>

    )



} 