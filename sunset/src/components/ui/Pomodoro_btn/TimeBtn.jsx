import ControlPanel from "../Settings/ControlPanel_Slider"


const TimeBtn = ({label, Component, componentProps = {} }) =>{

    return(
        
        <label className="flex gap-3 items-center text-sm font-bold">
      <span className="text-2xl">{label}</span>
      
      <div className="border rounded-lg px-3 py-1">
      {Component ? <Component {...componentProps} /> : null }
      </div>
    </label>
    )
}

export default TimeBtn