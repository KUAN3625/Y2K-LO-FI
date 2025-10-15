import Loginbtn from "../../components/ui/LoginBtn"
import useCameraStore from "../../components/stoer/usebr"

const Login = () => {
    const switchTo = useCameraStore(s => s.switchTo)

    return (
        <div className=" min-h-screen w-full flex items-center justify-center ">


            <div className="w-[400px] min-h-[320px]  gap-7 rounded-2xl   flex flex-col justify-center items-center ">

                <Loginbtn nametext="Google Login"
                    to="/*"
                    onBeforeNavigate={() => {
                        switchTo("login")
                    }} />
                <Loginbtn nametext="Email Login"
                    to="/*"
                    onBeforeNavigate={() => {
                        switchTo("twoScene")
                    }} />

                <Loginbtn nametext="Visitior" className="border-none text-gray-400 underline hover:text-gray-600 hover:bg-transparent"
                    to="/*"
                    onBeforeNavigate={() => {
                        switchTo("login")
                    }} />

                <Loginbtn nametext="OK" to="/core"
                    onBeforeNavigate={() => {
                        switchTo("core")
                    }} />

            </div>


        </div>

    )

}

export default Login