import { useState } from "react"
import SideMenu from "../../components/ui/Settings_UI/Side"
import { useSFXStore } from "../../components/stoer/useSFXStore"

const About = () => {
  const play = useSFXStore((s) => s.play)
  const [current, setCurrent] = useState("A") // ✅ 控制當前按鈕

  // 對應三個內容版本
  const contents = {
    A: {
      title: "About",
      text1: "「Plastic Sunset」是一個融合 Y2K 與 Lo-Fi 美學的數位空間。",
      text2: "它結合番茄鐘、待辦清單與音樂播放器，讓使用者能在沉浸氛圍中完成每一段專注時光。",
    },
    B: {
      title: "Grateful",
      text1: "感謝：",
      text2: "這裡填入文字與人名，測試",
    },
    C: {
      title: "Replenish",
      text1: "這裡放補充資訊",
      text2: "這裡放補充資訊",
    },
  }

  const data = contents[current]

  return (
    <div className="pointer-events-auto relative w-full h-screen flex justify-center items-center text-black overflow-hidden gap-[80px]">
      {/* 左上固定選單 */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <SideMenu />
      </div>

      {/* 左側：三顆按鈕 */}
      <section className="relative flex flex-col items-center justify-center w-[280px] h-[360px]">
        <div
          className="absolute top-[15%] flex items-center justify-center gap-6
                     bg-white/90 border-[2px] border-black rounded-full
                     px-10 py-4"
        >
          {["A", "B", "C"].map((label) => (
            <button
              key={label}
              onClick={() => {
                play("click")
                setCurrent(label)
              }}
              className={`w-10 h-10 rounded-full border-[2px] border-black bg-gray-300 hover:scale-110 transition-transform 
                ${current === label ? "bg-gray-100 scale-105" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* 右側：動態 About 區塊 */}
      <section className="flex font-mono items-center justify-center">
        <div
          key={current} // ✅ 讓 React 在切換時重新渲染（配合淡入）
          className="border-[2px] border-black bg-white/85 backdrop-blur-sm w-[480px] shadow-[3px_3px_0_#000] p-6 transition-all duration-300 ease-in-out opacity-100"
        >
          {/* 標題 */}
          <div className="border-b-[2px] border-black pb-3 mb-4">
            <h2 className="text-[42px] font-bold tracking-wide text-left">
              {data.title}
            </h2>
          </div>

          {/* 文字說明框 */}
          <div className="bg-[#e4e4e4]/90 border border-black p-6 text-[16px] leading-[1.7] text-left shadow-[2px_2px_0_#000]">
            <p className="mb-3">{data.text1}</p>
            <p>{data.text2}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
