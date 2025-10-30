import { useSFXStore } from "../../components/stoer/useSFXStore"
import SideMenu from "../../components/ui/Settings_UI/Side"

const About =()=> {
    const play = useSFXStore((state) => state.play )

    return(
        <div className="pointer-events-auto flex">
            <SideMenu/>
        <aside className="fixed top-0 left-0 h-screen w-[260px] border-r-4 border-black z-[-9999] flex items-center justify-center">
        <p className="text-black text-sm font-mono">SideMenu 區域</p>
      </aside>




        </div>

    )

}

export default About