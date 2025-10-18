import ClockMode from "../../hooks/colock/Colock"
import ControlPanel from "../ConterolPanel"
import Number from "./Number/auto Number"

const TimerPanel = () => {

    return (

        <>
            <section className="pointer-events-auto absolute top-4 right-10 w-65 min-h-20 rounded-2xl">
                {/* 外層不再有邊框與 padding */}
                <div className="relative border-2 rounded-2xl p-5 bg-white/30 backdrop-blur-md">
                    <ClockMode />
                    <ControlPanel />
                </div>
            </section>
        </>



    )

}

export default TimerPanel