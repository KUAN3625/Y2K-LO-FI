import { usePomodoroTimer } from "../../../stoer/usePomodoroTimer"


export const TimeStear = () => {
    const { status, start, pause, reset } = usePomodoroTimer()

    const statusLabel = {
        focus: "Focus",
        rest: "Break",
        paused: "Paused",
        done: "Completed",
    }[status];



    return (
<div className="flex flex-col  items-center gap-3">
  {/* 狀態文字 */}
  {(status === "focus" || status === "rest" || status === "paused") && (
    <p className="text-lg font-black ">{statusLabel}</p>
  )}

  {/* 控制按鈕 */}
  <div className="flex gap-4 mt-3">
    {(status === "idle" || status === "done") && (
      <button
        onClick={start}
        className="min-w-[50px] py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition active:translate-y-[1px]"
      >
        開始
      </button>
    )}

    {status === "paused" && (
      <>
        <button
          onClick={start}
          className=" min-w-[50px] py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition active:translate-y-[1px]"
        >
          繼續
        </button>
        <button
          onClick={reset}
          className="min-w-[50px] py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition active:translate-y-[1px]"
        >
          重設
        </button>
      </>
    )}

    {(status === "focus" || status === "rest") && (
      <button
        onClick={pause}
        className="min-w-[50px] py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition active:translate-y-[1px]"
      >
        暫停
      </button>
    )}
  </div>
</div>


    )

} 