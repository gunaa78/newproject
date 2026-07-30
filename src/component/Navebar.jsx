import { useState} from "react";
import {menu ,X } from "lucide-react"
import { useNavigate } from "react-router-dom";
function Navebar(){
//     const handleclick = () => {
//   document.getElementById("find").scrollIntoView({
//     behavior: "smooth",
//   });
// };
    const [open, setopen]= useState(false)
    const navigate = useNavigate();


    return(
        <div className="relative">
        <div className="flex justify-between  py-5 items-center px-10 fixed top-0 left-0 w-full z-50 bg-black/5   ">
    <div className="flex gap-2 text-lg sm:text-xl md:text-2xl font-bold " >
        <p className=" text-cyan-600">Hikoo</p>
        <p>Technology</p>
        </div>
        <div className="hidden lg:flex gap-10 text-sm sm:text-base   ">
        <p onClick={() => navigate("/")}
        className="cursor-pointer"
            >Home</p>
        <p
        onClick={() => navigate("/About")}
        className="cursor-pointer"
        >About</p>
        <p 
        onClick={()=> navigate("/Service")}
        className="hover:text-cyan-600  cursor-pointer ">Services</p>
        <p
        onClick={()=> navigate("/Career")}
        className="cursor-pointer"
        >Career</p>
        <p
        onClick={()=> navigate("/Internship")}
        className="cursor-pointer"
        >internship</p>
        <p>Contact</p>
        </div>
        <div className=" hidden lg:flex gap-4 text-sm sm:text-base text-white">
            {/* <p className="bg-cyan-600 rounded-full px-3 py-2"></p> */}
        <p className="bg-cyan-600 rounded-full px-3 py-2 ">Get Started</p>
        <p className="bg-cyan-600 rounded-full px-3 py-2 ">Request a Quote</p>
        </div>

<button  className="lg:hidden"
 onClick={()=> setopen(!open)}>
    {open ? "☰" : " ☰"}
</button>

{open &&(
     <div className="lg:hidden mt-4 flex flex-col gap-8 absolute top-[80px] w-screen left-0 overflow-y-auto  h-[calc(100vh-100px)] text-center bg-black/10 ">
          <p 
           onClick={() => {
            navigate("/")
             setopen(false)
        }
           
           }
           
  className="cursor-pointer">Home</p>
          <p 
          onClick={() => {
            navigate("/About")
            setopen(false)
        }}
      className="cursor-pointer" >About</p>
          <p
           onClick={()=> {
            navigate("/Service")
            setopen(false)
        }}
          >Servics</p>
          <p
        onClick={()=> {
            navigate("/Career")
            setopen(false)
        }}
        className="cursor-pointer"
        >Career</p>
        <p onClick={()=>  {
        navigate("/Internship")
        setopen(false)
    }}
        className="cursor-pointer"
        >internship</p>
          <p >Contact</p>
          <button className= "  bg-cyan-600 rounded-full px-3 py-2 " > Get Started</button>
          <button  className="bg-cyan-600 rounded-full px-3 py-2 ">Request a Quote</button>
        </div>
)}






    
    </div>
    </div>
    )
}

export default Navebar;