import { useState } from "react"
import SideMenu from "../../components/ui/Settings_UI/Side"
import { useSFXStore } from "../../components/stoer/useSFXStore"

const About = () => {
  const play = useSFXStore((s) => s.play)
  const [current, setCurrent] = useState("A")

  const contents = {
    A: {
      title: "About",
      text1: "「Plastic Sunset」是一個融合 Y2K 與 Lo-Fi 美學的數位空間。",
      text2:
        "它結合番茄鐘、待辦清單與音樂播放器，讓使用者能在沉浸氛圍中完成每一段專注時光。這裡還會放更多段落、更多補充、更多敘述，實際內容會比現在長得多。",
    },
    B: {
      title: "Grateful",
      text1: "感謝：",
      text2:
        "這裡填入文字與人名，並且實際上會有很多行內容。感謝名單、協助內容、專題過程紀錄都會放在這裡，預期會是大量段落。",
    },
    C: {
      title: "Replenish",
      text1: "這裡放補充資訊：",
      text2:
        "這個區域會包含非常多的補充資料、說明、段落敘述、作者註記等，因此預設加入滾動條，避免視窗高度不足。",
    },
  }

  const data = contents[current]

  return (
    <div className="relative w-full h-screen bg-[#f3f3f3] text-black overflow-hidden">

      {/* 左上固定選單 */}
      <div className="absolute top-4 left-4 pointer-events-auto z-50">
        <SideMenu />
      </div>

      {/* 左側按鈕（依示意圖位置） */}
      <div
        className="
          absolute
          left-[20%]     /* 左側靠 20% */
          top-[8%]      /* 垂直位置約在示意圖的位置 */
          -translate-y-1/2
          z-20
        "
      >
        <div
          className="
            flex items-center justify-center gap-5
            bg-white/90 border-[2px] border-black rounded-full
            px-10 py-4 shadow-[3px_3px_0_#000]
          "
        >
          {["A", "B", "C"].map((label) => (
            <button
              key={label}
              onClick={() => {
                play("click")
                setCurrent(label)
              }}
              className={`
                w-10 h-10 rounded-full border-[2px] border-black bg-gray-300
                transition-transform
                ${
                  current === label
                    ? "bg-gray-100 scale-105"
                    : "hover:scale-110"
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 右側 About 視窗（依示意圖） */}
      <div
        className="
          absolute 
          left-[58%]   /* 視窗靠右放 58% */
          top-[36%]    /* 上緣略高於按鈕列 */
          -translate-y-1/2
          w-[40vw]     /* 約 40% 寬度 */
          max-w-[520px]
          h-[65vh]     /* 約 65% 高度 */
          bg-white/85 backdrop-blur-sm
          border-[2px] border-black 
          shadow-[3px_3px_0_#000]
          p-6
          overflow-hidden
        "
      >

        {/* 標題 */}
        <div className="border-b-[2px] border-black pb-3 mb-4">
          <h2 className="text-[38px] md:text-[42px] font-bold tracking-wide text-left">
            {data.title}
          </h2>
        </div>

        {/* 文字內容（可大量文字） */}
        <div
          className="
            bg-[#e4e4e4]/90 border border-black p-4 md:p-6
            text-[16px] leading-[1.7] text-left 
            shadow-[2px_2px_0_#000]
            h-full overflow-y-auto
          "
        >
          <p className="mb-4">{data.text1}</p>
          <p>{data.text2}</p>
        </div>
      </div>
    </div>
  )
}

export default About
