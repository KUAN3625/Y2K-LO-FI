import { useState, useRef } from "react"
import ClockMode from "../../hooks/colock/Colock"
import ControlPanel from "../ConterolPanel"
import { usePomodoroTimer } from "../../stoer/usePomodoroTimer"
import { PomodoroCycles } from "./Cycleindicator"

const TimerPanel = () => {
  const [showPanel, setShowPanel] = useState(false)
  const hideTimer = useRef(null)                       // ✅ 延遲隱藏的計時器
  const { status } = usePomodoroTimer()
  const isActive = status === "focus" || status === "rest" || status === "paused"
  const shouldShowPanel = showPanel || isActive

  const handleEnter = () => {
    if (hideTimer.current) {                           // 若有計時器 → 先清除，避免提前隱藏
      clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
    setShowPanel(true)
  }

  const handleLeave = () => {
    // ✅ 延遲 300ms 才關閉，以避免滑鼠經過邊緣時閃爍
    hideTimer.current = setTimeout(() => {
      setShowPanel(false)
      hideTimer.current = null
    }, 400)
  }

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden">
      <section
        className="pointer-events-auto absolute top-4 right-10 w-65 min-h-20 rounded-2xl"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="relative border-2 rounded-2xl p-5 bg-white/5 backdrop-blur-md transition-all duration-200">
          <ClockMode isHovering={showPanel} />
          <PomodoroCycles />
        </div>

        {shouldShowPanel && <ControlPanel />}
      </section>
    </main>
  )
}

export default TimerPanel
