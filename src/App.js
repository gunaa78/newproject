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


function App(){
  return(
  <div className=" bg-slate-300 min-h-screen  ">
    <div className="max-w-[1200px] mx-auto px-4 ">

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
           </Routes>

       {/* <Footer />     */}
    </div>
    <Footer  />  
     
    
    </div>
    
    

  
  )
}



export default App;