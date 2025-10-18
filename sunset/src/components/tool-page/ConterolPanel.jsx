import { TimeStear } from "./Pomodoro/Controlpanel/stear"


const ControlPanel = () =>{




return (
  <div className="absolute top-full mt-3 w-full rounded-xl border-2 bg-white/20 backdrop-blur-md shadow-lg">

    <div className=" flex flex-col gap-3">

      <label className="flex gap-3 items-center text-sm font-bold">
        <span className="text-2xl border">Focus</span>
        <button className="border  rounded-lg">拉桿</button>
      </label>

      <label className="flex gap-3 items-center text-sm font-bold">
        <span className="text-2xl border">Rest</span>
        <button className="border  rounded-lg">拉桿</button>
      </label>
     

      <div className="flex justify-center mt-4">
        <TimeStear />
      </div>
    </div>
  </div>
)
}
export default ControlPanel