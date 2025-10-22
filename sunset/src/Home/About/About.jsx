import { useSFXStore } from "../../components/stoer/useSFXStore"
import SideMenu from "../../components/ui/Settings_UI/Side"

const About =()=> {
    const play = useSFXStore((state) => state.play )

    return(
        <div className="pointer-events-auto flex">
        <SideMenu/>
        <h1>關於頁面
        </h1>

            <button onClick={() => {
                play("click");
                console.log("簡單的音效測試!")
            }}>
                    OK

             </button>

        <p>請看</p>
        </div>

    )

}

export default About