import TimeBtn from "../ui/Pomodoro_btn/TimeBtn"
import ControlPanelF from "../ui/Settings/ControlPanel_Slider"
import ControlRestPanel from "../ui/Settings/ControlPanel_Slider_R"
import { TimeStear } from "./Pomodoro/Controlpanel/stear"

{/* 管理番茄鐘滑稈行為 */}

const ControlPanel = () =>{

return (
  <div className="absolute top-full mt-3 w-full rounded-xl border-2 bg-white/20 backdrop-blur-md shadow-lg">

    <div className=" flex flex-col gap-4 p-5">

      <TimeBtn label="  Focus" Component={ControlPanelF} />
      <TimeBtn label="  Rest"  Component={ControlRestPanel} />     

      <div className="flex justify-center mt-4">
        <TimeStear />
      </div>

    </div>
  </div>
)
}
export default ControlPanel