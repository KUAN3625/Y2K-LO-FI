import Number from "../../tool-page/Pomodoro/Number/auto Number";
import { usePomodoroSettings } from "../../stoer/usePomodoroSettings";
import { useClock } from "./useClock";
import { usePomodoroTimer } from "../../stoer/usePomodoroTimer";

{/*時鐘邏輯封裝層，跟Panel(滑稈)共用狀態*/}


const ClockMode = ({isHovering}) => {
    const{text} = useClock(); //正常時間
    const{ focus, rest } = usePomodoroSettings(); //滑稈
    const{status, timeText} = usePomodoroTimer();

    const isAnyDragging = focus.isDragging || rest.isDragging;


    const displayText = 
    status === "focus" || status === "rest"
    ? timeText //運作中顯示分鐘數
    : isAnyDragging || isHovering
    ? `${focus.time}|${rest.time}`   //正常顯示調整面板
    : text


    return <Number text={displayText} />
}


export default ClockMode