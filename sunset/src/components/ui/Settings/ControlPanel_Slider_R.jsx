
import { usePomodoroSettings } from "../../stoer/usePomodoroSettings"
import Slider from "./Slider"

{/* 滑桿元件_番茄_Rest*/}

const ControlRestPanel = () => {

  const{
    rest,
    setRestTime,
    setRestDragging,

} = usePomodoroSettings()

const startDrag = () => setRestDragging(true)
const endDrag = () => setRestDragging(false)


  return (
    <div className="p-5 flex flex-col gap-4">
      <label className="flex flex-col gap-2">

        <Slider
          min={5}
          max={15}
          step={5}
          value={rest.time}
          onChange={(e) => setRestTime(Number(e.target.value))}
          onStart={startDrag}
          onEnd={endDrag}
        />
      </label>
    </div>
  )
}

export default ControlRestPanel
