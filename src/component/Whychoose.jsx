function Whychoose(){
    return(
        <div className="pt-40">
            <h3 className="text-xl sm:text-2xl lg:text-3xl text-cyan-600 font-bold">Why Choose Hikoo Technology?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 pt-10 ">
            <div className="p-6 rounded-2xl shadow-lg border  bg-white/10 hover:shadow-xl duration-300">
             {/* <div className=" mb-4 text-lg md:text-2xl text-black">⏰</div> */}
    <h3 className="text-lg md:text-xl   mb-2 text-cyan-600 font-semibold">24/7 Dedicated Support</h3>
    <p className=" text-sm md:text-base">
      Our support team is available around the clock to assist you whenever needed.
    </p>
  </div>
  <div className="p-6 rounded-2xl shadow-lg border hover:-translate-y-2 duration-300">
    {/* <div className="text-4xl mb-4">☁️</div> */}
    <h3 className="text-lg md:text-xl  mb-2 text-cyan-600 font-semibold">Scalable Architecture</h3>
    <p className="text-sm md:text-base">
      Build applications that grow seamlessly with your business.
    </p>
  </div>
  <div className="p-6 rounded-2xl shadow-lg border hover:-translate-y-2 duration-300">
    {/* <div className="text-4xl mb-4">⚡</div> */}
    <h3 className="text-lg md:text-xl  mb-2  text-cyan-600 font-semibold">Agile Development</h3>
    <p className="text-sm md:text-base">
      Fast development cycles with continuous feedback and improvement.
    </p>
  </div>

   {/* <div className="p-6 rounded-2xl shadow-lg border hover:-translate-y-2 duration-300">
    <div className="text-4xl mb-4">🔒</div>
    <h3 className="text-xl font-bold mb-2">Secure Solutions</h3>
    <p className="text-gray-600">
      Enterprise-grade security to protect your applications and data.
    </p>
  </div> */}

    {/* <div className="p-6 rounded-2xl shadow-lg border hover:-translate-y-2 duration-300">
    <div className="text-4xl mb-4">👨‍💻</div>
    <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
    <p className="text-gray-600">
      Skilled developers delivering reliable and innovative solutions.
    </p>
  </div> */}

  {/* <div className="p-6 rounded-2xl shadow-lg border hover:-translate-y-2 duration-300">
    <div className="text-4xl mb-4">🤝</div>
    <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
    <p className="text-gray-600">
      We focus on your business goals to deliver customized solutions.
    </p>
  </div> */}
  </div>
              </div>
       
    )
}

export default Whychoose;