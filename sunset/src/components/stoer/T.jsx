import { usePomodoroTimer } from "../stoer/usePomodoroTimer"

const TestPomodoro = () => {
  const { status, timeText, start, pause, reset } = usePomodoroTimer()

  return (
    <div className="p-5 border rounded-lg text-center">
      <p>狀態：{status}</p>
      <p>剩餘時間：{timeText}</p>
      <div className="flex gap-2 justify-center mt-4"> 
        <button onClick={start} className="px-3 py-1 bg-green-600 text-white rounded">開始</button>
        <button onClick={pause} className="px-3 py-1 bg-yellow-500 text-white rounded">暫停</button>
        <button onClick={reset} className="px-3 py-1 bg-red-600 text-white rounded">重設</button>
      </div>
    </div>
  )
}

export default TestPomodoro 
