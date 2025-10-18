import Number from "../../tool-page/Pomodoro/Number/auto Number";
import { useClock } from "./useClock";

{/*時鐘邏輯封裝層*/}


const ClockMode = () => {
    const{text} = useClock()
    return<Number text={text} />
}


export default ClockMode