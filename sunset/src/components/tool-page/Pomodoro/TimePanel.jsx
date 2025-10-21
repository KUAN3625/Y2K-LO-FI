import { useState } from "react"
import ClockMode from "../../hooks/colock/Colock"
import ControlPanel from "../ConterolPanel"
import { usePomodoroTimer } from "../../stoer/usePomodoroTimer"
import { PomodoroCycles } from "./Cycleindicator"

const TimerPanel = () => {
  const [showPanel, setShowPanel] = useState(false)
  const { status } = usePomodoroTimer()                      // ✅ 讀取番茄鐘狀態
  const isActive = status === "focus" || status === "rest" || status === "paused"
  const shouldShowPanel = showPanel || isActive              // ✅ 懸停或運作中都要顯示

  const handleEnter = () => setShowPanel(true)
  const handleLeave = () => setShowPanel(false)              // 這只影響懸停狀態，不影響運作時顯示

  return (
    <main className=" relative w-full min-h-screen overflow-x-hidden overflow-y-hidden">
      <section
      
        className="pointer-events-auto absolute top-4 right-10 w-65 min-h-20 rounded-2xl"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="relative border-2 rounded-2xl  p-5 bg-white/5  backdrop-blur-md">
          <ClockMode isHovering={showPanel} />
          <PomodoroCycles />
        </div>

        {shouldShowPanel && <ControlPanel />}                
        
      </section>
    </main>
  )
}

export default TimerPanel