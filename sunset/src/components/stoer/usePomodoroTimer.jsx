import { useState, useEffect } from "react"
import { usePomodoroSettings } from "./usePomodoroSettings"

    
export const usePomodoroTimer = () => {

    const { focus, rest } = usePomodoroSettings()
    

// ✅ 狀態管理
  const [status, setStatus] = useState("idle") // idle, focus, rest, paused, done
  const [remaining, setRemaining] = useState(0) // 秒數
  const [intervalId, setIntervalId] = useState(null)

  // ✅ 開始
  const start = () => {

    // 根據當前狀態決定起點
    if (status === "idle" || status === "done") {
      setRemaining(focus.time * 60) // 轉成秒
      setStatus("focus")
    } else if (status === "paused") {
      setStatus("focus") // 繼續倒數
    }
  }

  // ✅ 暫停
  const pause = () => {
    clearInterval(intervalId)
    setIntervalId(null)
    setStatus("paused")
  }

  // ✅ 重設
  const reset = () => {
    clearInterval(intervalId)
    setIntervalId(null)
    setStatus("idle")
    setRemaining(0)
  }

  
  // ✅ 倒數核心邏輯
  useEffect(() => {
    if (status !== "focus" && status !== "rest") return

    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(id)

          // focus 結束 → 進入 rest
          if (status === "focus") {
            setStatus("rest")
            return rest.time * 60
          }

          // rest 結束 → 完成
          if (status === "rest") {
            setStatus("done")
            return 0
          }
        }

        return prev - 1
      })
    }, 1000)

    setIntervalId(id)

    return () => clearInterval(id)
  }, [status])

  // ✅ 將秒轉成 mm:ss 顯示用
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0")
  const seconds = String(remaining % 60).padStart(2, "0")

  return {
    status,          // 當前狀態
    remaining,       // 剩餘秒數
    timeText: `${minutes}:${seconds}`, // 格式化時間
    start,
    pause,
    reset,
  }
  
}