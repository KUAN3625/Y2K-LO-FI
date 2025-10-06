import Loginbtn from "../../components/ui/LoginBtn"

const Login = () => {

    return (
        <div className=" min-h-screen w-full flex items-center justify-center">


    <div className="w-[400px] min-h-[320px]  gap-7 rounded-2xl shadow-2xl  flex flex-col justify-center items-center ">
               
                <Loginbtn nametext="Google Login" />
                <Loginbtn nametext="Email Login"/>
                <Loginbtn nametext="?" className=" bg-amber-300  "  />
                <Loginbtn nametext="OK" />
            </div>


        </div>

    )

}

export default Login