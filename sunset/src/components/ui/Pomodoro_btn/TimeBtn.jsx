

const TimeBtn = ({label}) =>{

    return(
        
        <label className="flex gap-3 items-center text-sm font-bold">
      <span className="text-2xl">{label}</span>
      <button className="border rounded-lg px-3 py-1">拉桿</button>
    </label>
    )
}

export default TimeBtn