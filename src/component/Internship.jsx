import { useState } from "react";
import { motion } from "framer-motion";
function Internship(){
    const [Showform, setShowform]= useState(false)
    return(
        <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl  font-bold pt-40 md:pt-60  text-cyan-600  " >Build Your Future</h3>
            <p className="text-sm sm:text-base lg:text-lg pt-10">Gain real-world experience, work on industry projects, and develop your technical skills with our internship programs.</p>


            {/* <h3 className="text-xl sm:text-2xl lg:text-3xl  font-bold pt-40   text-cyan-600  ">Internship Opportunities</h3> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">

  
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      React.js Developer
    </h3>

    <p className="mt-4  text-sm md:text-base">
      React • JavaScript • Tailwind CSS
    </p>

    <p className="mt-4  text-sm md:text-base">
      Duration: 3–6 Months
    </p>

    <p className="mt-2  ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition ">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold text-cyan-600">
      Frontend Developer
    </h3>

    <p className="mt-4 ">
      HTML • CSS • JavaScript
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base p-6 shadow-lg   hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      Backend Developer
    </h3>

    <p className="mt-4  ">
      Node.js • Express.js • MongoDB
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>



  <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      Full Stack Developer
    </h3>

    <p className="mt-4 ">
      React • Node.js • MongoDB
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      UI/UX Designer
    </h3>

    <p className="mt-4  ">
      Figma • Adobe XD • Wireframing
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      QA Engineer
    </h3>

    <p className="mt-4 ">
      Manual Testing • Selenium • JIRA
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      Python Developer
    </h3>

    <p className="mt-4  ">
      Python • Django • REST API
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>

      
 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      Node.js Developer
    </h3>

    <p className="mt-4  ">
      Node.js • Express.js • MongoDB
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      Cloud & DevOps Engineer
    </h3>

    <p className="mt-4  ">
      AWS • Docker • CI/CD
      </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>


 
  <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className=" text-sm md:text-base  p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
    <h3 className="text-lg md:text-xl  font-semibold  text-cyan-600">
      AI / ML Engineer
    </h3>

    <p className="mt-4 ">
      Python • TensorFlow • Machine Learning
    </p>

    <p className="mt-4 ">
      Duration: 3–6 Months
    </p>

    <p className="mt-2 ">
      Mode: On-site / Hybrid
    </p>

    <button 
    onClick={()=>setShowform(true)}
    className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
      Apply Now
    </button>
  </motion.div>

</div>
 {Showform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">


          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">


           
            <button
              onClick={() => setShowform(false)}
              className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-white"
            >
              ×
            </button>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">
              Internship Application
            </h2>

            <p className="mt-2 text-gray-400 text-sm">
             Complete the form below to apply for your preferred internship program
            </p>

            <form className="mt-6 space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none"
                 onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none "

                 onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }}
              />

              <select className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none " >
               <option className="text-black">Select a Domain</option>
               <option className="text-black">React.js Developer</option>
          <option className="text-black">Frontend Developer</option>
          <option className="text-black">Backend Developer</option>
          <option className="text-black">Full Stack Developer</option>
          <option className="text-black">UI/UX Designer</option>
          <option className="text-black">QA Engineer</option>
          <option className="text-black">Python Developer</option>
          <option className="text-black">Node.js Developer</option>
          <option className="text-black">Cloud & DevOps Engineer</option>
          <option className="text-black">AI / ML Engineer</option>
              </select>

              <input
                type="text"
                placeholder="College / University"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white outline-none "
              />

              <select className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3  text-white outline-none ">
                <option className="text-black">Select a Mode</option>
                <option className="text-black">HYBRID</option>
                <option className="text-black">ONLINE</option>
                <option className="text-black">OFFLINE</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-600 transition"
              >
                Submit Application
              </button>

            </form>

          </div>
        </div>
      )}



      <div className="pt-40">

  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 ">
    Why Intern at Hikoo?
  </h2>

  <p className="mt-4   text-sm sm:text-base lg:text-lg">
    Gain practical experience, develop your skills, and grow in a professional environment.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

   
    <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }} className="p-6    shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className="text-lg md:text-xl  font-semibold text-cyan-600">
        Hands-On Experience
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Work on real-world projects and gain practical experience.
      </p>
    </motion.div>

   
    <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6    shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className=" font-semibold text-cyan-600 text-lg md:text-xl">
        Expert Mentorship
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Learn from experienced developers and industry professionals.
      </p>
    </motion.div>

   
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6     shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className="text-lg md:text-xl font-semibold text-cyan-600">
        Modern Technologies
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Build skills using current tools, frameworks, and technologies.
      </p>
    </motion.div>

   
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className="text-lg md:text-xl font-semibold text-cyan-600">
        Team Experience
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Collaborate with a professional team and learn industry workflows.
      </p>
    </motion.div>

  
    <motion.div  whileHover={{ y: -10 }}  
     transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className="text-lg md:text-xl font-semibold text-cyan-600">
        Internship Certificate
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Receive a certificate after successfully completing the internship.
      </p>
    </motion.div>

   
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6    shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <h3 className="text-lg md:text-xl font-semibold text-cyan-600">
        Career Growth
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Build your skills and explore potential career opportunities with Hikoo Technology.
      </p>
    </motion.div>

  </div>

</div>
 <div className="pt-40">
    

  <h2 className=" text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 ">
    Internship Benefits
  </h2> 
  <p className=" pt-4 text-sm sm:text-base lg:text-lg  ">Work on real-world projects and gain practical experience.</p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

   
    <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12  rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl">
        01
      </span>

      <h3 className="mt-5 font-semibold text-cyan-600 text-lg md:text-xl ">
        Hands-on Experience
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Work on real-world projects.
      </p>
    </motion.div>


    
    <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6  shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl">
        02
      </span>

      <h3 className="mt-5 text-lg md:text-xl font-semibold   text-cyan-600">
        Expert Mentorship
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Learn from experienced professionals.
      </p>
    </motion.div>


  
    <motion.div  whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6    shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl">
        03
      </span>

<h3 className="mt-5 text-lg md:text-xl font-semibold  text-cyan-600">
        Skill Development
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Improve your technical and professional skills.
      </p>
    </motion.div>


  
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6     shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl">
        04
      </span>

      <h3 className="mt-5 text-lg md:text-xl font-semibold  text-cyan-600">
        Internship Certificate
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Receive a certificate after completion.
      </p>
    </motion.div>


  
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl ">
        05
      </span>

      <h3 className="mt-5 text-lg md:text-xl font-semibold  text-cyan-600">
        Career Guidance
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Get guidance for your next career step.
      </p>
    </motion.div>


  
    <motion.div  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
      <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500 text-white font-bold text-sm md:text-xl">
        06
      </span>

      <h3 className="mt-5 text-lg md:text-xl font-semibold text-cyan-600">
        Professional Experience
      </h3>

      <p className="mt-3 text-sm md:text-base">
        Experience working in a real IT environment.
      </p>
    </motion.div>

  </div>

</div>


<div>
    <div>
    <h2 className="pt-40  text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold ">
        Who Can Apply?
    </h2>
</div>
<ul className=" list-disc list-inside text-sm md:text-base lg:text-xl space-y-4 pt-10 ">
<li>Computer Science or related degrees</li>
<li>Recent graduates</li>
<li> Freshers interested in technology</li>
<li> Basic programming knowledge</li>
<li> Seeking practical industry experience</li>
</ul>
    </div>


        </div>
    )
}


export default Internship;