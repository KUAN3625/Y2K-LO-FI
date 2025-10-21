import { useState } from "react"
import ClockMode from "../../hooks/colock/Colock"
import ControlPanel from "../ConterolPanel"
import Number from "./Number/auto Number"

const TimerPanel = () => {
    const[showPanel, setShowPanel] = useState(false)

    const handlEnter = () => setShowPanel(true)
    const handleLeave = () => setShowPanel(false)
    {/* 面板開關 */}

    
    return (

        <>
<main className="relative w-full min-h-screen overflow-x-hidden overflow-y-hidden">

  <section
    className="pointer-events-auto absolute top-4 right-10 w-65 min-h-20 rounded-2xl"
    onMouseEnter={handlEnter}
    onMouseLeave={handleLeave}
  >
    
    <div className="relative border-2 rounded-2xl p-5 bg-white/5 backdrop-blur-md">
      <ClockMode isHovering={showPanel} />
    </div>

    {showPanel && <ControlPanel />}
  </section>
</main>

        </>



    )

}

export default TimerPanel