import Services from "../component/Services";
import Process from "../component/Process";
function Service(){
    return(
        <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl  pt-40 lg:pt-60 text-cyan-600 font-bold">
                Our Expertise & Technical Services
            </h3>
            <p className="pt-10 text-sm sm:text-base lg:text-lg">We provide end-to-end technology solutions that help businesses innovate, scale, and succeed in the digital world.</p>
            <div className="grid grid-cold-1 md:grid-cols-2 gap-6  mt-10  ">
                {Services.map((Service,index) =>(
                    <div key={index} 
                    className="bg-white/10 rounded-xl shadow-md p-6 hover:shadow-xl space-y-2 "
                    >
                        <div className="  text-black text-lg md:text-2xl">{Service.ICON}</div>
                        <h3 className="text-lg md:text-xl  text-cyan-600 font-semibold ">
              {Service.TITLE}

            </h3>
             <p className="  mb-6 text-sm md:text-base">
              {Service.DESCRIPTION}
            </p>



                    </div>

                ))}
            </div>

            <h3 className="pt-40 text-cyan-600 text-xl sm:text-2xl lg:text-3xl font-bold ">
                 Our Delivery Process
            </h3>


            <div className="pt-10 ">

  {/* <h2 className="text-3xl md:text-4xl font-bold text-cyan-600">
    Our Delivery Process
  </h2> */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">

    {/* 01 */}
    <div className="bg-white/10 rounded-2xl p-8 text-center shadow-md">
      <div className="w-14 h-14 mx-auto rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold">
        1
      </div>

      <h3 className="mt-8 text-lg md:text-xl font-semibold text-cyan-600">
        Discovery
      </h3>

      <p className="mt-4 text-sm md:text-base">
        Understand business goals, requirements, and project scope.
      </p>
    </div>


    {/* 02 */}
    <div className="bg-white/10 rounded-2xl p-8 text-center shadow-md">
      <div className="w-14 h-14 mx-auto rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold">
        2
      </div>

      <h3 className="mt-8 text-lg md:text-xl font-semibold text-cyan-600">
        Design
      </h3>

      <p className="mt-4 text-sm md:text-base">
        Create user-focused designs, wireframes, and technical solutions.
      </p>
    </div>


    {/* 03 */}
    <div className="bg-white/10 rounded-2xl p-8 text-center shadow-md">
      <div className="w-14 h-14 mx-auto rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold">
        3
      </div>

      <h3 className="mt-8 text-lg md:text-xl font-semibold text-cyan-600">
        Development
      </h3>

      <p className="mt-4 text-sm md:text-base">
        Build scalable and reliable solutions using modern technologies.
      </p>
    </div>


    {/* 04 */}
    <div className="bg-white/10 rounded-2xl p-8 text-center shadow-md">
      <div className="w-14 h-14 mx-auto rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold">
        4
      </div>

      <h3 className="mt-8 text-lg md:text-xl  font-semibold text-cyan-600">
        Deployment
      </h3>

      <p className="mt-4 text-sm md:text-base">
        Test, launch, and deliver the solution for real-world use.
      </p>
    </div>

  </div>

</div>
            
        </div>   
    )
}
export default Service;