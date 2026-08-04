import Navebar from "./component/Navebar";
import Home from "./component/Home"
import Techstack from "./component/Techstack";
import Coreservicesoverview from "./component/Coreservicesoverview";
import Whychoose from "./component/Whychoose";
import About from "./component/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Service from "./component/Service";
import Career from "./component/Career";
import Internship from "./component/Internship";
import Contact from "./component/Contact"
import { useTheme } from "./component/ThemeContext";
import { FaWhatsapp } from "react-icons/fa";


function App(){
   const { theme } = useTheme();
  return(
  <div 
  className={theme === "dark" ? "bg-black text-white min-h-screen " : "bg-slate-400  text-black min-h-screen "}  
  >
    <div className="max-w-[1200px] mx-auto px-4  overflow-hidden">

    <Navebar />

    <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Techstack />
                <Coreservicesoverview />
                <Whychoose />
              </>
            }
          />

          <Route  path="/About" element={<About />} />
          <Route  path="/Service" element={<Service />}></Route>
          <Route  path="/Career" element={<Career />}></Route>
          <Route path="/Internship" element={<Internship />}></Route>
          <Route  path="/Contact"  element={<Contact />}></Route>
         
           </Routes>

    
    </div>
    <Footer  />  

    <a
      href="https://wa.me/917598639009"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-2 lg:p-4 rounded-full shadow-xl  duration-300 z-50"
    >
      <FaWhatsapp size={30} />
    </a>
     
    
    </div>
    
    

  
  )
}



export default App;