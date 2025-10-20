import Number from "../../tool-page/Pomodoro/Number/auto Number";
import { usePomodoroSettings } from "../../stoer/usePomodoroSettings";
import { useClock } from "./useClock";

{/*時鐘邏輯封裝層，跟Panel共用狀態*/}


const ClockMode = () => {
    const{text} = useClock()
    const{ focus, rest } = usePomodoroSettings()


    const isAnyDragging = focus.isDragging || rest.isDragging


    const displayText = isAnyDragging
    ? `${focus.time}|${rest.time}`   
    : text


    return <Number text={displayText} />
}


export default ClockMode