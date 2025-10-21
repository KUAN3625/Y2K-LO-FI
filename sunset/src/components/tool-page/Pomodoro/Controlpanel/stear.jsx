import { usePomodoroTimer } from "../../../stoer/usePomodoroTimer"


export const TimeStear = () => {
    const { status, start, pause, reset } = usePomodoroTimer()

    const statusLabel = {
        focus: "專注中",
        rest: "休息中",
        paused: "暫停",
        done: "結束",
    }[status];



    return (
        <>
            <div className="flex flex-col items-center gap-3">
                {/* 顯示狀態文字與時間 */} {(status === "focus" || status === "rest" || status === "paused") && (


                    <p className="text-lg font-bold">{statusLabel}</p>

                )}

                {/* 控制按鈕 */}
                <div className="flex gap-3 mt-2">
                    {(status === "idle" || status === "done") && (
                        <button onClick={start} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            開始
                        </button>
                    )}

                    {status === "paused" && (
                        <>
                            <button onClick={start} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                繼續
                            </button>
                            <button onClick={reset} className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                重設
                            </button>
                        </>
                    )}

                    {(status === "focus" || status === "rest") && (
                        <button onClick={pause} className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
                            暫停
                        </button>
                    )}
                </div>
            </div>
        </>

    )

} 