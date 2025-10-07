import LogoSmall from "../../components/ui/LogoSmall"
import Titlevideo from "../../components/ui/title-video"

const Entry = () => {

    return (

        <header className="pointer-events-auto pb-2 min-h-screen w-full  flex flex-col items-center justify-between bg-black">
            {/* LOGO 區塊 */}
            <LogoSmall />


           < Titlevideo to="/login" />


            <div className=" flex  mb-8">
            <p className="text-red-50 font-mono animate-pulse">Loading...</p>

            </div>


        </header>

    )

}

export default Entry