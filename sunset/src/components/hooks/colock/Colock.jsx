import { usePomodoroRuntime } from "../../stoer/Pomodoro/usePomodoroRuntime";
import { usePomodoroSettings } from "../../stoer/Pomodoro/usePomodoroSettings";
import Number from "../../tool-page/Pomodoro/Number/auto Number";

import { useClock } from "./useClock";

{/*時鐘邏輯封裝層，跟Panel共用狀態*/}


const ClockMode = () => {
  const { text } = useClock()
  const { focus, rest } = usePomodoroSettings()
  const {isRunning, remainingSec, mode  } = usePomodoroRuntime()

  // 如果任何一個滑桿正在拖動
  const isAnyDragging = focus.isDragging || rest.isDragging

    //倒數邏輯
  const mm = String(Math.floor(remainingSec / 60)).padStart(2, "0")
  const ss = String(remainingSec % 60).padStart(2, "0")
  const runtimeText = `${mm}:${ss}`

  
  // 當有滑桿拖動 → 顯示兩個時間；否則顯示當前時間
  const displayText = isRunning
    ? runtimeText
    : isAnyDragging
    ? `${focus.time}|${rest.time}` // ← 同時顯示 Focus 與 Rest
    : text



  return <Number text={displayText} />
}

export default ClockMode