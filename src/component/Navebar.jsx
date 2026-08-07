import { useState} from "react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

import { motion } from "framer-motion";


function Navebar(){
//     const handleclick = () => {
//   document.getElementById("find").scrollIntoView({
//     behavior: "smooth",
//   });
// };

    const [open, setopen]= useState(false)
    const navigate = useNavigate();
     const { theme, toggleTheme } = useTheme();


    return(
        <div className="relative">
        <div className="flex justify-between  py-5 items-center px-10 fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-lg ">
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
        <p
         onClick={()=>  {
        navigate("/Contact")
        setopen(false)
    }}
    className="cursor-pointer"
        >Contact</p>
       
        </div>
        
          
        <div className=" hidden lg:flex gap-4 text-sm sm:text-base text-white font-semibold">
            {/* <p className="bg-cyan-600 rounded-full px-3 py-2"></p> */}
        <p 
         onClick={toggleTheme}
        
         
        
        className="bg-cyan-600 rounded-full px-3 py-2 cursor-pointer text-sm sm:text-base ">
            { theme === "dark" ? "Light Mode" : "Dark Mode" }
           </p>
        <p 
        onClick={()=>{
            navigate("/Contact")
            setopen(false)
        }}
        className="bg-cyan-600 rounded-full px-3 py-2 cursor-pointer text-sm sm:text-base">Request a Quote</p>
        </div>
       
       

<button  className="lg:hidden"
 onClick={()=> setopen(!open)}>
    {open ? "☰" : " ☰"}
</button>


{open &&(

     <motion.div initial={{ opacity: 0, y: -50 }}  animate={{ opacity: 1, y: 0 }}   transition={{ duration: 0.6 }} className="lg:hidden mt-4 flex flex-col gap-8 absolute top-[80px] w-screen left-0 overflow-y-auto  h-[calc(100vh-100px)] text-center bg-black/70 backdrop-blur-xl   z-50">
          <p 
           onClick={() => {
            navigate("/")
             setopen(false)
        }
           
           }
           
  className="cursor-pointer font-semibold text-white">Home</p>
          <p 
          onClick={() => {
            navigate("/About")
            setopen(false)
        }}
      className="cursor-pointer font-semibold text-white" >About</p>
          <p
           onClick={()=> {
            navigate("/Service")
            setopen(false)
        }}
         className="cursor-pointer font-semibold text-white" 
          >Services</p>
          <p
        onClick={()=> {
            navigate("/Career")
            setopen(false)
        }}
        className="cursor-pointer font-semibold text-white"
        >Career</p>
        <p onClick={()=>  {
        navigate("/Internship")
        setopen(false)
    }}
        className="cursor-pointer  font-semibold  text-white"
        >internship</p>
          <p 
          onClick={()=>  {
        navigate("/Contact")
        setopen(false)
    }}
    className="cursor-pointer font-semibold text-white"
          >Contact</p>
           <p 
         onClick={() => {
  toggleTheme();
  setopen(false);
}}
        
         
        
        className="bg-cyan-600 rounded-full px-3 py-2 cursor-pointer  font-semibold text-white ">
            { theme === "dark" ? "LIGHT MODE" : "DARK MODE" }
           </p>
         <p 
        onClick={()=>{
            navigate("/Contact")
            setopen(false)
        }}
        className="bg-cyan-600 rounded-full px-3 py-2  font-semibold text-white ">Request a Quote</p>
     </motion.div>  
       
)}






 </div>
 </div>
 
    
   
   

    
    )
}

export default Navebar;