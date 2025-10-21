import { usePomodoroTimer } from "../../stoer/usePomodoroTimer"

{/* 小輪數圓點 */}
export const PomodoroCycles = () => {
  const { cyclesDone, maxCycles, status } = usePomodoroTimer()

  const showDuring = ["focus", "rest", "paused", "done"]
  if (!showDuring.includes(status) || maxCycles <= 0) return null

  return (
    <div className="flex justify-center mt-4 mb-2 gap-2">
      {Array.from({ length: maxCycles }).map((_, i) => {
        const isDone = i < cyclesDone
        return (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full transition-all duration-200 ${
              isDone
                ? "bg-green-400 shadow-[0_0_6px_rgba(0,255,100,0.7)]"
                : "bg-gray-500/40"
            }`}
          />
        )
      })}
    </div>
  )
}
