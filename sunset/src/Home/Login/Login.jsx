import Loginbtn from "../../components/ui/LoginBtn"

const Login = () => {

    return (
        <div className=" min-h-screen w-full flex items-center justify-center ">


    <div className="w-[400px] min-h-[320px]  gap-7 rounded-2xl   flex flex-col justify-center items-center ">
               
                <Loginbtn nametext="Google Login" to="/*" />
                <Loginbtn nametext="Email Login" to="/"/>
                <Loginbtn nametext="Visitior" className="border-none text-gray-400 underline hover:text-gray-600 hover:bg-transparent" />
                <Loginbtn nametext="OK" to="/core"/>
            </div>


        </div>

    )

}

export default Login