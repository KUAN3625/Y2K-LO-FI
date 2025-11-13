import { useEffect, useState } from "react"
import TimerPanel from "../../components/tool-page/Pomodoro/TimePanel"
import SideMenu from "../../components/ui/Settings_UI/Side";
import Musicbox from "../../components/tool-page/music/Musicplay"
import { useSFXStore } from "../../components/stoer/useSFXStore";
import { songsdata } from "../../data/song";
import HideToggleButton from "../../components/ui/Eyes";
import CassetteCarousel from "../../components/ui/Music/Music_CC/CassetteCarousel";



const Core = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
   <main className="relative min-h-screen  text-gray-800 overflow-hidden">
  <div
    className={`transition-opacity duration-500 relative safe-zone ${
      isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
    }`}
  >
    <SideMenu />
    <TimerPanel />
    <Musicbox songs={songsdata} />

      
      <CassetteCarousel />

  </div>

  <HideToggleButton
    isHidden={isHidden}
    onToggle={() => setIsHidden(!isHidden)}
  />
</main>


  )

}

export default Core