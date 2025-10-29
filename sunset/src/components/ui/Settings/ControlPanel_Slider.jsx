
import { usePomodoroSettings } from "../../stoer/usePomodoroSettings"
import Slider from "./Slider"

{/* 滑桿元件_番茄_Focus */}

const ControlPanelF = () => {

  const{
    focus,
    setFocusTime,
    setFocusDragging,

} = usePomodoroSettings()

const startDrag = () => setFocusDragging(true)
const endDrag = () => setFocusDragging(false)


  return (
    <div className="p-5 flex flex-col gap-4">
      <label className="flex flex-col gap-2">

        <Slider
          min={5}
          max={60}
          step={5}
          value={focus.time}
          onChange={(e) => setFocusTime(Number(e.target.value))}
          onStart={startDrag}
          onEnd={endDrag}
        />
      </label>
    </div>
  )
}

export default ControlPanelF
