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
  <section
  className="pointer-events-auto fixed top-[clamp(1rem,3vh,2rem)] right-[clamp(1rem,3vw,2rem)]
             w-[clamp(16rem,25vw,22rem)] max-w-[90vw] rounded-2xl z-[50]
             flex flex-col items-stretch"
  onMouseEnter={handleEnter}
  onMouseLeave={handleLeave}
>
  <div className="relative border-2 border-black/20 rounded-2xl
                  p-[clamp(1rem,2.5vh,1.5rem)]
                  bg-white/40 backdrop-blur-md shadow-lg
                  transition-all duration-300">
    <ClockMode isHovering={showPanel} />
    <PomodoroCycles />
  </div>

  {shouldShowPanel && (
    <div className="mt-2 border-2 border-black/20 rounded-2xl
                    bg-white/60 backdrop-blur-md
                    p-[clamp(1rem,3vh,1.5rem)] shadow-md
                    max-h-[60vh] overflow-y-auto no-scrollbar">
      <ControlPanel />
    </div>
  )}
</section>

)

}

export default TimerPanel
