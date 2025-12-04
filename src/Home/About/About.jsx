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
        "這個區域會包含非常多的補充資料、說明、段落敘述、作者註記等，這裡加入了自適應，所以不用擔心寬距問題。",
    },
  }

  const data = contents[current]

  return (
    <div className="relative w-full min-h-screen  text-black overflow-hidden">

      {/* 左上固定選單 */}
      <div className="absolute top-4 left-4 pointer-events-auto z-50">
        <SideMenu />
      </div>

      {/* ------- 中螢幕（筆電 md，左右並排，不使用 absolute） ------- */}
<div className="hidden md:flex lg:hidden w-full px-20 mt-4 justify-between items-start">
  
  {/* 左邊按鈕列（小一點） */}
  <div className="px-20">

  <div className="flex items-center gap-4 bg-white/60 border-2 border-black rounded-full px-3 py-3 shadow-[3px_3px_0_#000]">
    {["A", "B", "C"].map((label) => (
      <button
        key={label}
        onClick={() => {
          play("click")
          setCurrent(label)
        }}
        className={`
          w-10 h-9 rounded-full border-[2px] border-black bg-gray-300
          transition-transform text-sm
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

  {/* 中螢幕 About 內容 */}
  <div className="w-[50%] bg-white/85 border-2 border-black shadow-[3px_3px_0_#000] p-6">
    <div className="border-b-2 border-black pb-3 mb-4">
      <h2 className="text-[32px] font-bold">{data.title}</h2>
    </div>

    <div className="bg-[#e4e4e4]/90 border border-black p-4 text-[15px] leading-[1.8] shadow-[2px_2px_0_#000]">
      <p className="mb-3">{data.text1}</p>
      <p>{data.text2}</p>
    </div>
  </div>

</div>


      {/* ------- 小螢幕版（直排，不使用 absolute） ------- */}
  <div className="flex flex-col items-center gap-6 px-6 mt-20 md:hidden">

        {/* 按鈕列 */}
        <div
    className="
      flex items-center justify-center gap-3
      bg-white/90 border-[2px] border-black rounded-full
      px-6 py-2 shadow-[3px_3px_0_#000]
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
          w-8 h-8 rounded-full border-[2px] border-black bg-gray-300
          text-sm
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

        {/* About 內容區 */}
         <div className="
    w-full max-w-[500px]
    bg-white/85 backdrop-blur-sm border-[2px] border-black 
    shadow-[3px_3px_0_#000] 
    p-6
  ">
    <div className="border-b-[2px] border-black pb-2 mb-4">
      <h2 className="text-[32px] font-bold">{data.title}</h2>
    </div>

    <div
      className="
        bg-[#e4e4e4]/90 border border-black p-4
        text-[15px] leading-[1.8]
        shadow-[2px_2px_0_#000]
      "
    >


      <p className="mb-3">{data.text1}</p>
      <p>{data.text2}</p>
    </div>
  </div>
</div>


{/* ------- 大螢幕版（使用 absolute） ------- */}
<div className="hidden lg:block">


        {/* 左側按鈕 */}
        <div
          className="
            absolute
            left-[20%]
            top-[8%]
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

        {/* 右側 About 內容 */}
        <div
          className="
            absolute 
            left-[58%]
            top-[36%]
            -translate-y-1/2
            w-[40vw]
            max-w-[520px]
            h-[65vh]
            bg-white/85 backdrop-blur-sm
            border-[2px] border-black 
            shadow-[3px_3px_0_#000]
            p-6
            overflow-hidden
          "
        >
          <div className="border-b-[2px] border-black pb-3 mb-4">
            <h2 className="text-[38px] md:text-[42px] font-bold">{data.title}</h2>
          </div>

          <div
            className="
              bg-[#e4e4e4]/90 border border-black p-4 md:p-6
              text-[16px] leading-[1.7]
              shadow-[2px_2px_0_#000]
              h-full overflow-y-auto
            "
          >
            <p className="mb-4">{data.text1}</p>
            <p>{data.text2}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
