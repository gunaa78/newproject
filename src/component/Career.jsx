import Careerdata from "../component/Careerdata"
import Jobopening from "../component/Jobopening"
import { useState } from "react";
import { motion } from "framer-motion";
import RecruitmentProcess from "../component/RecruitmentProcess";
import {  useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMotionValueEvent } from "framer-motion";
import { useEffect } from "react";



function Career(){
  useEffect(() => {
    document.title = "Career";
    document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      "content",
      "Explore exciting career opportunities at Hikoo Technology. Join our team of talented professionals and build innovative software, web, and mobile solutions while advancing your career."
    );
  }, []);
  const [showPopup, setShowPopup] = useState(false);
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const timelineRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start center", "end center"],
});

const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);


const activeIndex = useTransform(scrollYProgress, (value) =>
  Math.round(value * (RecruitmentProcess.length - 1))
);
const [currentIndex, setCurrentIndex] = useState(0);

useMotionValueEvent(activeIndex, "change", (latest) => {
  setCurrentIndex(latest);
});
    return(
        <>
        <div className=" space-y-8" >
            <h1
               className="text-xl sm:text-2xl lg:text-3xl  font-bold pt-40 md:pt-60  text-cyan-600  " >
                Join Our Team
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">Build Your Career with Hikoo Technology</p>
            <p className="text-sm sm:text-base lg:text-base  ">We're looking for talented professionals who are passionate about technology, innovation, and creating impactful digital solutions. Join our team and grow your career with us.</p>
     
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 " >
            {Careerdata.map((career ,index) =>(
                <div key={index}>
                    <motion.div   whileHover={{ y: -10 }}   transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }} className="px-4 py-4 space-y-4  text-center   justify-center shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">

               <p className=" flex justify-center ">{career.icon}</p>
              
              <h3 className="text-lg md:text-xl   text-cyan-600 font-semibold ">
                {career.title}
              </h3>
              <p className=" w-[250px] md:w-[300px]  mx-auto text-sm md:text-base">
                {career.description}
              </p>
              </motion.div>
                    </div>

            ))}

        </div>
         <h3 className="pt-40 text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">Current Openings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
           
            {Jobopening.map((job ,index) =>(
                <motion.div key={index}  whileHover={{ y: -10 }}  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}  className="  px-4 py-4 space-y-4 text-sm md:text-base   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl" >
                    <h3  className=" text-lg md:text-xl  text-cyan-600  font-semibold ">
                        {job.title}
                    </h3>
                    <p>📍{job.location}</p>
                    <p>💼{job.type}</p>
                    <p>⏳{job.experience}</p>
                    <div className=" flex   gap-2 lg:gap-6  ">
                        <p className=" text-cyan-600 font-semibold">skills:</p>
                   {job.skills.map((skill, index) =>(
                        <p key={index} className="text-sm md:text-base ">
                           {skill}
                           {index !== job.skills.length - 1 && (
                            <span className="mx-2 text-gray-400">|</span>
      )}
    
                        </p>

                   ))}
                   </div>
                   
                    <p className="text-sm md:text-base">{job.description}</p>
                    <div className="flex justify-end">
                    <button  onClick={()=>setShowPopup(true)}
                    className="bg-cyan-600 text-white text-center rounded-lg px-2 py-2 font-bold  text-sm md:text-base  ">{job.apply}</button>
                    </div>
                    </motion.div>

            ))}
        </div>


        {showPopup && (
  // <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

  <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

   
    <button
     onClick={()=>setShowPopup(false)}
      className="absolute top-5 right-5 text-2xl text-white hover:text-red-400"
    >
      ✕
    </button>

   
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">
      Job Application
    </h2>

    <p className="text-gray-300 mt-2 mb-8 text-sm">
      Fill out the form below to apply for your desired position.
    </p>

    <div className="space-y-5">

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  }}
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white placeholder-gray-300"
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white placeholder-gray-300"
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }}
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white placeholder-gray-300"
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          Position Applying For
        </label>

        <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white">
        <option className="text-black">Select a position</option>
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
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          Upload Resume
        </label>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full rounded-xl bg-white/20 border border-white/20 p-3 text-white"
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2 text-lg md:text-xl">
          LinkedIn / GitHub
        </label>

        <input
          type="url"
          placeholder="https://linkedin.com/in/yourname"
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white placeholder-gray-300"
        />
      </div>

      <div>
        <label className="block text-cyan-400 font-semibold mb-2  text-lg md:text-xl">
          Cover Letter
        </label>

        <textarea
          rows="5"
          placeholder="Write a short message..."
          onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  }}
          className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/20 outline-none text-white placeholder-gray-300 resize-none"
        ></textarea>
      </div>

      <button className="w-full bg-cyan-600 hover:bg-cyan-700 transition rounded-xl py-3  font-semibold text-white text-lg md:text-xl">
        Submit Application
      </button>

    </div>

  </div>

</div>
  // </div>
)}

 <h2 className="pt-40 text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">
      Recruitment Process
    </h2>

  <div ref={timelineRef} className="relative pl-16 pt-10 mt-10">

 {/* Gray Line */}
<div className="absolute left-6 top-0 h-full w-[2px] bg-gray-300" />

{/* Blue Progress Line */}
<motion.div
  style={{ scaleY: lineScale }}
  className="absolute left-6 top-0 h-full w-[2px] bg-cyan-600 origin-top"
/>



  {RecruitmentProcess.map((step, index) => (
    <div key={step.id} className="relative mb-16">
      <div
  className={`absolute -left-[52px] top-2 w-5 h-5 rounded-full border-4 transition-all duration-300
    ${
      currentIndex === index
        ? "bg-cyan-500 border-cyan-500 shadow-[0_0_50px_rgba(8,145,178,0.9)] scale-125"
        : "bg-gray-400 border-white"
    }`}
/>

      <h3 className="text-lg font-semibold">
        {step.title}
      </h3>

      <p className="text-gray-600">
        {step.description}
      </p>
    </div>
  ))}
</div>
  


    <h2 className=" pt-40 text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">
      Employee Benefits
    </h2>

    
<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="pt-10 space-y-8">

 
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12  rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl  font-bold shrink-0">
      1
    </div>

    <div>
      <h3 className="text-lg md:text-xl font-semibold ">
        Competitive Salary
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Receive a competitive salary package based on your skills,
        experience, and performance.
      </p>
    </div>
  </motion.div>

  
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0">
      2
    </div>

    <div>
      <h3 className="text-lg md:text-xl font-semibold ">
        Health Insurance
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Comprehensive health insurance to support your well-being and peace of mind.
      </p>
    </div>
  </motion.div>

  
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0">
      3
    </div>

    <div>
      <h3 className="text-lg md:text-xl font-semibold ">
        Paid Leave
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Enjoy paid vacation, holidays, and personal leave to maintain a healthy work-life balance.
      </p>
    </div>
  </motion.div>

  
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0">
      4
    </div>

    <div>
      <h3 className="text-lg md:text-xl  font-semibold">
        Learning & Certifications
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Access training programs, workshops, and certification opportunities to enhance your skills.
      </p>
    </div>
  </motion.div>

  {/* 5 */}
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0">
      5
    </div>

    <div>
      <h3 className="text-lg md:text-xl  font-semibold">
        Career Development
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Grow your career through mentorship, challenging projects, and leadership opportunities.
      </p>
    </div>
  </motion.div>

  
  <motion.div  variants={item}  className="flex items-start gap-5">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm md:text-xl font-bold shrink-0">
      6
    </div>

    <div>
      <h3 className="text-lg md:text-xl font-semibold ">
        Flexible Work Environment
      </h3>
      <p className=" text-sm md:text-base mt-1">
        Work in a supportive and flexible environment that encourages collaboration, innovation, and productivity.
      </p>
    </div>
    </motion.div>
  

</motion.div>


 {/* <h3 className=" pt-40 text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">Application Form</h3> */}

{/* <div className=" grid grid-cols-2 " >
 
 
 
<div className="pt-10 ">
   <div className=" bg-white/10  shadow-md  px-4 py-4 space-y-4  
                backdrop-blur-xl
                border border-white/20
                rounded-3xl ">
    <div className=" space-y-2" >
    <p className=" text-lg md:text-xl  text-cyan-600 font-semibold">FULLNAME</p>
    <input className="w-full px-2 py-2 rounded-lg bg-black/10"></input>
    </div>
    <div className=" space-y-2">
    <p className=" text-lg md:text-xl font-semibold text-cyan-600">EMAIL ADDRESS</p>
    <input  className="w-full px-2 py-2 rounded-lg"></input>
    </div>
     <div  className=" space-y-2">
    <p className=" text-lg md:text-xl font-semibold text-cyan-600">PHONE NUMBER </p>
    <input   className="w-full px-2 py-2 rounded-lg"></input>
    </div>
    <div  className=" space-y-2">
    <p className=" text-lg md:text-xl font-semibold text-cyan-600">Position Applying For</p>
    <select  className="w-full px-2 py-2 rounded-lg">
        <option>Select a position</option>
        <option>React.js Developer</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
        <option>UI/UX Designer</option>
        <option>QA Engineer</option>
        <option>Python Developer</option>
        <option>Node.js Developer</option>
        <option>Cloud & DevOps Engineer</option>
        <option>AI / ML Engineer</option>
    </select>
    </div>
 <div  className=" space-y-2">
    <p className=" text-lg md:text-xl font-semibold text-cyan-600">Position Applying For</p>
    <input
  type="file"
  accept=".pdf,.doc,.docx"
  className="w-full px-2 py-2 rounded-lg"
  ></input>
  </div>
  <div  className=" space-y-2">
  <p className=" text-lg md:text-xl font-semibold text-cyan-600">LinkedIn / GitHub </p>
  <input
    type="url"
    placeholder="https://linkedin.com/in/yourname or https://github.com/yourname"
    className="w-full px-2 py-2 rounded-lg"
    ></input>
    </div>
<div className=" space-y-2">
    <p className=" text-lg md:text-xl font-semibold text-cyan-600">Cover Letter / Message</p>
    <textarea
    rows="5"
    placeholder="Write a short cover letter or message..."
    className="w-full px-2 py-2 rounded-lg"
    >

    </textarea>
    </div>
    <p className="text-center items-center  flex justify-center bg-cyan-600 px-2 py-2 rounded-full text-white">Submit Application</p>
</div>
</div>
<div>
  <h3>
    Why Join Hikoo Technology
  </h3>
</div>

</div> */}



     

        </>
    )
}
export default Career