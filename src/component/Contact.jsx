import { motion } from "framer-motion";
function Contact(){
    return(
        <div className="pt-40 ">
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600">
                 Contact Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10  ">
            <div className="  space-y-10 ">
               
               
                <div className=" flex text-center items-center gap-2">
                 <p className="text-lg md:text-xl  font-semibold text-cyan-600 ">Phone:</p>
                 <p className="text-sm md:text-base   border-b border-black">
                   <a
                    href="tel:+917598639009"
                   > 
                    75986-39009 
                    </a> 
                    </p>\
                 <p className="text-sm md:text-base   border-b border-black">
                    <a
                    href="tel:+9175986-29009"
                   > 
                     75986-29009
                    </a> 
                    
                   
                    </p>
                 </div>
                
                 <div className="flex text-center items-center gap-2">
                <p className="text-lg md:text-xl text-cyan-600 font-semibold  ">Email:</p>
                <p className=" text-sm md:text-base  border-b border-black">
                     
                     <a 
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=hikootechnology@gmail.com"
                       target="_blank"
                      rel="noopener noreferrer">
                    hikootechnology@gmail.com
                    </a>
                    </p>
                </div>
                <div className="flex  items-start  gap-2  ">
                <p className="text-lg md:text-xl  text-cyan-600 font-semibold ">Address:</p>
                <p 

                
                className=" text-sm md:text-base  w-[350px]     ">
                    <a
                    href="https://www.google.com/maps/search/?api=1&query=Hikoo+Technology+Pvt+Ltd+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                   
                    > Door No: 333, 1st Floor, Airport Main Road,
Near Perungudi Bus Stop, Madurai — 625022

                    </a>
                    </p>
</div>
               
            </div>
           
            <motion.div  
            transition={{
    duration: 0.8,         
    
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}   className="inline-block p-6   shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl mt-20 lg:mt-0">
  <form className="space-y-5 ">

   
    <div>
      <label className="block  mb-2 font-semibold text-cyan-600 text-lg md:text-xl">Full Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full  px-4 py-2 outline-none bg-white/40 backdrop-blur-xl border border-white/100 rounded-lg  "
        onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  }}
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 font-semibold text-cyan-600 text-lg md:text-xl">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 outline-none focus:border-cyan-600  bg-white/40 backdrop-blur-xl border border-white/100 rounded-lg "
      />
    </div>

    {/* Service */}
    <div>
      <label className="block mb-2 font-semibold text-cyan-600 text-lg md:text-xl">Service Required</label>
      <select className="w-full px-4 py-2 outline-none focus:border-cyan-600  bg-white/40 backdrop-blur-xl border border-white/100 rounded-lg  ">
        <option className="text-black">Select a Service</option>
        <option className="text-black">Custom Software Development</option>
        <option className="text-black">Website Development</option>
        <option className="text-black">Mobile App Development</option>
        <option className="text-black">UI/UX Design</option>
        <option className="text-black">Cloud & DevOps</option>
        <option className="text-black">IT Consulting</option>
        <option className="text-black">AI & Machine Learning</option>
        <option className="text-black">Data Analytics</option>
        <option className="text-black">QA & Testing</option>
        <option className="text-black">Maintenance & Support</option>
        <option className="text-black">Internship Program</option>
        <option className="text-black">Other</option>
      </select>
    </div>

    {/* Budget */}
    <div>
      <label className="block mb-2 font-semibold text-cyan-600 text-lg md:text-xl">Project Budget (Optional)</label>
      <select className="w-full px-4 py-2 outline-none focus:border-cyan-600  bg-white/40 backdrop-blur-xl border border-white/100 rounded-lg  ">
        <option className="text-black">Select Budget</option>
        <option className="text-black">Less than ₹50,000</option>
        <option className="text-black">₹50,000 - ₹1,00,000</option>
        <option className="text-black">₹1,00,000 - ₹5,00,000</option>
        <option className="text-black">₹5,00,000 - ₹10,00,000</option>
        <option className="text-black">Above ₹10,00,000</option>
        <option className="text-black">Not Sure Yet</option>
      </select>
    </div>

    {/* Message */}
    <div>
      <label className="block mb-2 font-semibold text-cyan-600 text-lg md:text-xl">Message</label>
      <textarea
        rows={5}
        placeholder="Write your message..."
        className="w-full  px-4 py-2 outline-none resize-none focus:border-cyan-600   bg-white/40 backdrop-blur-xl border border-white/100 rounded-lg"
         onInput={(e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  }}
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition "
     
    >
      Send Message
    </button>

  </form>
</motion.div>


        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 pt-40">Visit Our Office</p>

<div className="pt-10">
        <div className="rounded-xl overflow-hidden">
  <iframe
 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.992468355336!2d78.09512847325003!3d9.85099807558452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d1c888b71113%3A0xf0ccd5af646642c9!2sHikoo%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1785483356225!5m2!1sen!2sin"
  className="w-full h-[450px]"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Hikoo Technology Location"
></iframe>
</div>

         </div>
         </div>
        



    )

}
export default Contact;