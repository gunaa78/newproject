import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function About(){


return(
<section id="find">
    <div className="">


    {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-600   pt-40 lg:pt-60">About Hikoo Technology</h2> */}
    <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-600 w-[200px] md:w-[500px] font-bold pt-40 lg:pt-60">Transforming Businesses Through
Next-Gen Technology</p>
<p className="pt-4  lg:pt-10 text-sm sm:text-base lg:text-lg  ">Hikoo Technology was founded with the vision of
helping businesses achieve digital transformation
through innovative, secure, and scalable software
solutions. We focus on delivering high-quality
technology services that create long-term value
for our clients.</p>
<div className=" pt-40">

  <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">Our Purpose & Future</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
   

  
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:shadow-2xl duration-300 space-y-2 ">
  <div className="space-y-2 "> 
  <FaCode  className="text-black text-lg md:text-2xl" />

    <h3 className="text-lg md:text-xl  font-semibold text-cyan-600 ">
       Mission
    </h3>
    </div>

    <p className=" text-sm md:text-base">
      Delivering high-impact digital solutions with speed,
      scalability, and precision.
    </p>

  </div>

  
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl duration-300 space-y-2 ">
 <div className="space-y-2">
 <FaEye  className="text-black text-lg md:text-2xl" />
    <h3 className="text-lg md:text-xl   text-cyan-600 font-semibold ">
      Vision
    </h3>
    </div>


    <p className="  text-sm md:text-base">
      To be a global leader in accessible,
      high-performance enterprise technology.
    </p>

  </div>
  </div>
  <div className="pt-40 ">

  <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold"> Our Core Values</p>
  <ul className=" pt-10 grid grid-cols-1  md:grid-cols-2  gap-10 text-base md:text-xl  list-disc list-inside  ">
  <li className="">Innovation</li>
<li className="">Technical Integrity</li>
<li className="">Transparency</li>
<li className="">Client-Centric Collaboration</li>
</ul>
  </div>

</div>
</div>

    
</section>
)
}
export default About