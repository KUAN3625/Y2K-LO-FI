import { useState } from "react"
import Slider from "../../components/ui/Settings/Slider"
import SideMenu from "../../components/ui/Settings_UI/Side"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useAudioSettings } from "../../components/stoer/useAudioSettings"


const Setting = () => {
const { musicVolume, setMusicVolume } = useAudioSettings()
  const [music, setMusic] = useState(60)
  const [sfx, setSfx] = useState(40)
  const [pixel, setPixel] = useState(4)
  const [theme, setTheme] = useState("Lo-Fi")

  const themeOptions = ["Lo-Fi", "Y2K", "Mono"]

  // === Slider 設定 ===
  const sliders = [
{
  id: "music",
  label: "Music Volume",
  value: Math.round(musicVolume * 100),
  setValue: (v) => setMusicVolume(v / 100),
  min: 0,
  max: 100,
  step: 1,
},
    {
      id: "sfx",
      label: "SFX Volume",
      value: sfx,
      setValue: setSfx,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      id: "pixel",
      label: "Pixelation",
      value: pixel,
      setValue: setPixel,
      min: 0,
      max: 12,
      step: 1,
    },
  ]

  // === 處理左右切換 ===
  const handleThemeChange = (dir) => {
    const currentIndex = themeOptions.indexOf(theme)
    const next =
      dir === "next"
        ? (currentIndex + 1) % themeOptions.length
        : (currentIndex - 1 + themeOptions.length) % themeOptions.length
    setTheme(themeOptions[next])
  }

  return (
    <div className="w-full h-screen flex">
      {/* 左側按鈕欄 */}
      <aside className="w-[72px] shrink-0">
        <SideMenu />
      </aside>

      {/* 右側內容 */}
      <main className="pointer-events-auto flex-1 overflow-y-auto flex justify-center items-start">
        <section className="w-[600px] mt-24 flex flex-col gap-5">
          {/* 頁面標題 */}
          <h1
            className="text-2xl text-white 
            [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]
            font-semibold text-left"
          >
            Settings
          </h1>

          {/* === 產生所有滑桿設定 === */}
          {sliders.map(({ id, label, value, setValue, min, max, step }) => (
            <div
              key={id}
              className="rounded-xl bg-zinc-200/60 border p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="text-lg font-medium text-center">{label}</div>
              <div className="flex justify-center items-center gap-4">
                <Slider
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-[400px]"
                />
                <span className="w-10 text-right tabular-nums">{value}</span>
              </div>
            </div>
          ))}

          {/* === Theme Preset：按鈕式設定 === */}
          <div className="rounded-xl bg-zinc-200/60 border p-6 flex flex-col gap-4 shadow-sm">
            <div className="text-lg font-medium text-center">Theme Preset</div>

            <div className="flex items-center justify-between gap-4 bg-zinc-300/60 border rounded-lg p-3">
              <button
                onClick={() => handleThemeChange("prev")}
                className="p-2 rounded-md border bg-white/80 hover:bg-white transition"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex-1 text-center font-medium">{theme}</div>

              <button
                onClick={() => handleThemeChange("next")}
                className="p-2 rounded-md border bg-white/80 hover:bg-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Setting
