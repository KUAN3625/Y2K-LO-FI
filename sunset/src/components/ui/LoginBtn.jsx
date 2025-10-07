import { useNavigate } from "react-router-dom";

   

const Loginbtn = (props) => {

const navigate = useNavigate();


  return (
      <div onClick={()=> navigate(props.to)}

       className={`pointer-events-auto px-8 h-10 border-2 border-black rounded-full w-64 grid place-items-center mx-auto
     hover:shadow-2xl hover:bg-black hover:text-white
     ${props.className || ""}`}
      >

        {props.nametext}


      </div>

  );
};
export default Loginbtn;
