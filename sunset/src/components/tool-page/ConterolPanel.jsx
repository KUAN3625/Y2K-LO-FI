import { usePomodoroRuntime } from "../stoer/Pomodoro/usePomodoroRuntime"
import TimeBtn from "../ui/Pomodoro_btn/TimeBtn"
import ControlPanelF from "../ui/Settings/ControlPanel_Slider"
import ControlRestPanel from "../ui/Settings/ControlPanel_Slider_R"
import { TimeStear } from "./Pomodoro/Controlpanel/stear"
import { TimerControl } from "./Pomodoro/Controlpanel/TimerControl"

{/* 管理番茄鐘滑稈行為 */ }

const ControlPanel = () => {
  const { mode } = usePomodoroRuntime()

  const isIdle = mode === "idle"
  const isAsctive = mode === "focus" || mode === "rest" || mode === "paused"


  return (
    <div className="absolute top-full mt-3 w-full rounded-xl border-2 bg-white/20 backdrop-blur-md shadow-lg">
      <div className=" flex flex-col gap-4 p-5">


        {/* 1 顯示滑稈 */}

        {isIdle && (
          <>
            <TimeBtn label="  Focus" Component={ControlPanelF} />
            <TimeBtn label="  Rest" Component={ControlRestPanel} />

            <div className="flex justify-center mt-4">
              <TimeStear />
            </div>
          </>
        )}


        {/* 2 顯示開始 */}
        {isAsctive && (
          <>
              <div className="flex justify-center mt-4">
                <TimerControl/>
              </div>
          </>
        )}



      </div>
    </div>
  )
}
export default ControlPanel