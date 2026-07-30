import { FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer(){
    return(
        <div className="pt-40  ">
        <div className=" grid grid-cols-1 md:grid-cols-4  w-full z-50 bg-black/5 px-4 gap-8 py-6 ">
            <div className="pt-10">
            <h3 className="text-cyan-600 font-bold  text-lg lg:text-xl ">Hikoo <span className="text-black">Technology</span> </h3>
            <p className="text-xs lg:text-base  ">Simplicity Solves Complexity</p>
            {/* <p className="w-[300px]">We deliver innovative software solutions that help
businesses grow through technology.</p> */}
</div>
<div className="pt-10">
<h3 className="text-sm sm:text-base lg:text-lg  ">Quick Links</h3>


  <ul className="space-y-2 py-4 text-xs sm:text-sm lg:text-base list-disc list-inside  ">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Portfolio</li>
    <li>Contact</li>
  </ul>
  </div>

<div className="pt-10">
  <h3 className="text-sm sm:text-base lg:text-lg">Services</h3>

  <ul className="space-y-2 py-4 text-xs sm:text-sm lg:text-base  list-disc list-inside ">
    <li>Web Development</li>
    <li>Mobile App Development</li>
    <li>UI/UX Design</li>
    <li>IT Consulting</li>
    <li>Cloud Solutions</li>
  </ul>

</div>
<div className="pt-10 ">
  <h3 className="text-sm sm:text-base lg:text-lg  ">Follow Us</h3>
<ul className="space-y-2  py-4 text-xs sm:text-sm lg:text-base     ">
    <div className="flex items-center gap-2">
    <FaLinkedin className="text-black text-lg" />
<li>LinkedIn</li>
</div>
<div className="flex items-center gap-2">
    <FaInstagram className="text-black text-lg" />
<li>Instagram</li>
</div>
</ul>

 <div className="pt-8 text-xs lg:text-sm ">
<p>© 2026 Hikoo Technology Pvt. Ltd. All Rights Reserved.</p>
<p>Privacy Policy | Terms & Conditions</p>
</div>
</div>

        </div>
        </div>
    )
}

export default Footer;