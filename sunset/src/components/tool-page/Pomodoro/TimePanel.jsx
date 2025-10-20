import { useState } from "react"
import ClockMode from "../../hooks/colock/Colock"
import ControlPanel from "../ConterolPanel"
import { usePomodoroRuntime } from "../../stoer/Pomodoro/usePomodoroRuntime"

const TimerPanel = () => {
    const[showPanel, setShowPanel] = useState(false)
    const handlEnter = () => setShowPanel(true)
    const handleLeave = () => setShowPanel(false)
    {/* 滑稈面板開關 */}

    const { mode } = usePomodoroRuntime()
    const shouldShow = showPanel || mode !== "idle"
    
    return (

        <>
<main className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden">

  <section
    className="pointer-events-auto absolute top-4 right-10 w-65 min-h-20 rounded-2xl"
    onMouseEnter={handlEnter}
    onMouseLeave={handleLeave}
  >
    
    <div className="relative border-2 rounded-2xl p-5 bg-white/5 backdrop-blur-md">
      <ClockMode />
    </div>

    {showPanel && <ControlPanel />}
  </section>
</main>

        </>



    )

}

export default TimerPanel