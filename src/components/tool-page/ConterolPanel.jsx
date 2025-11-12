import { usePomodoroTimer } from "../stoer/usePomodoroTimer"
import TimeBtn from "../ui/Pomodoro_btn/TimeBtn"
import ControlPanelF from "../ui/Settings/ControlPanel_Slider"
import ControlCycles from "../ui/Settings/ControlPanel_Slider_Cy"
import ControlRestPanel from "../ui/Settings/ControlPanel_Slider_R"
import { TimeStear } from "./Pomodoro/Controlpanel/stear"

{/* 管理番茄鐘滑稈行為 */ }

const ControlPanel = () => {
  const { status } = usePomodoroTimer()
  const isConfigMode = status === "idle" || status === "done"



  return (
    <div className="  rounded-2xl px-5 pt-5 pb-8  backdrop-blur-md">

      <div className=" flex flex-col  gap-1 p-5">

{isConfigMode && (
<div className="flex flex-col gap-[0.3rem] items-end">
  <TimeBtn label="Focus" Component={ControlPanelF} />
  <TimeBtn label="Rest" Component={ControlRestPanel} />
  <TimeBtn label="Cycles" Component={ControlCycles} />
</div>

)}



        <div className="flex  justify-center mt-4">
          <TimeStear />
        </div>

      </div>
    </div>
  )
}
export default ControlPanel