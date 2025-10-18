import TimeBtn from "../ui/Pomodoro_btn/TimeBtn"
import { TimeStear } from "./Pomodoro/Controlpanel/stear"


const ControlPanel = () =>{




return (
  <div className="absolute top-full mt-3 w-full rounded-xl border-2 bg-white/20 backdrop-blur-md shadow-lg">

    <div className=" flex flex-col gap-4 p-5">

      <TimeBtn label="  Focus" />
      <TimeBtn label="  Rest" />     

      <div className="flex justify-center mt-4">
        <TimeStear />
      </div>

    </div>
  </div>
)
}
export default ControlPanel