import Services from "../component/Services";
import { motion } from "framer-motion";
function Coreservicesoverview(){
   return (
    <div className="pt-20 lg:pt-40 ">
    <h3 className="text-xl sm:text-2xl lg:text-3xl text-cyan-600  font-bold">Core Services Overview</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
         
      {Services.map((service) => {
        const Icon = service.icon;
        

        return (
           
            
            
           
           
          <div
            key={service.id}
            
            
          >
             <motion.div
  whileHover={{ y: -10 }}
  transition={{
    duration: 0.8,         
    hover: { duration: 0.3 }
  }}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
 
  viewport={{ once: true }}
   className="p-8  space-y-4 shadow-md hover:shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl" 
  > 
            
            <Icon className=" text-lg md:text-2xl mb-5" />

            <h3 className="text-lg md:text-xl  mb-3 text-cyan-600 font-semibold">
              {service.title}
            </h3>

            <p className=" text-sm md:text-base">
              {service.description}
            </p>
            </motion.div>
           
          </div>
         
        );
      })}
     
    </div>
   
     
    </div>
    
     
  );
}




export default Coreservicesoverview