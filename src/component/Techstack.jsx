import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
function Techstack(){
    return(
        <div className="pt-40  ">
             <p className="text-xl sm:text-2xl lg:text-3xl  text-cyan-600 ">Tech Stack</p>
             <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaReact className="text-cyan-600" size={40} />
    <p  className="text-sm sm:text-base md:text-lg">React</p>
  </div>

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaNodeJs className="text-green-600" size={40} />
    <p  className="text-sm sm:text-base md:text-lg" >Node.js</p>
  </div>

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaAws  className="text-orange-500" size={40} />
    <p  className="text-sm sm:text-base md:text-lg">AWS</p>
  </div>

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaPython  className="text-blue-500" size={40} />
    <p  className="text-sm sm:text-base md:text-lg">Python</p>
  </div>

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaFigma  className="text-pink-500" size={40} />
    <p  className="text-sm sm:text-base md:text-lg">Figma</p>
  </div>

  <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl">
    <FaDocker  className="text-blue-600 "  size={40} />
    <p className="text-sm sm:text-base md:text-lg">Docker</p>
  </div>

</div>
             
                </div>

        
    )
}
export default Techstack