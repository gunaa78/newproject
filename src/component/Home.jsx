import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Home(){
    useEffect(() => {
    document.title = "Home";
   
  }, []);
   


    const navigate = useNavigate();
    return(
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
        <div className=" pt-40 lg:pt-60 text-center items-center justify-center space-y-8 px-4 ">
           <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600">Innovative Tech Solutions for Growing Enterprises</h1> 
           <p className="text-sm sm:text-base lg:text-lg">"We build scalable software, cloud infrastructure, and modern digital experiences at Hikoo Technology"</p>
           <div className=" flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:gap-10    text-center items-center justify-center">
            <button 
         onClick={() => navigate("/Service")}
            className="bg-cyan-600 rounded-full px-4 py-4 text-white font-bold text-sm lg:text-base inline-block ">Explore Services </button>
            <p
            className="font-bold text-sm lg:text-base">
                <a 
                href="tel:+917598639009"
                
                >
                📞 75986-39009
                </a>
                </p>
            </div>
            {/* <p> modern software UI illustration.</p> */}
        </div>
        </motion.div>
    )
}

export default Home;