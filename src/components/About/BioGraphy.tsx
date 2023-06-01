
const BioGraphy = () => {
   return (
      <div className="flex  md:flex-row flex-col items-start gap-5 md:gap-10 text-xl">          
      <ul className="flex flex-col gap-2">
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2 "><span className=" font-semibold text-secondary  capitalize w-20">Birthday</span><span>: 07 April 2002</span></li>
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2 "><span className=" font-semibold w-20 text-secondary capitalize">WhatsApp</span><span className=""><a href="https://wa.me/+8801951976238" target="_blank">: +8801951976238</a></span></li>
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2 "><span className=" font-semibold w-20 text-secondary capitalize">City</span><span>: Lakshmipur</span></li>
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2 "><span className=" font-semibold w-20 text-secondary capitalize">Linkedin</span><span> : <a href="https://www.linkedin.com/in/mostafiz0401/" target="_blank">mostafiz0401</a> </span></li>
         </ul>
         <ul className="flex flex-col gap-2">
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2"><span className=" font-semibold w-20 text-secondary capitalize">Age</span><span>: 21</span></li>
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2"><span className=" font-semibold w-20 text-secondary capitalize">Degree</span><span>: Diploma In Computer Engineering</span></li>
            <li className=" flex text-lg  items-center gap-[2px] text-[17px] md:text-xl md:gap-2"><span className=" font-semibold w-20 text-secondary capitalize">Email</span><span className="cursor-pointer" >: <a href="mailto:mostafizurrahaman0401@gmail.com" ></a>mostafizurrahaman0401@gmail.com</span></li>
            <li className=" flex  items-center gap-[2px] text-[17px] md:text-xl md:gap-2"><span className=" font-semibold w-20 text-secondary capitalize">github</span><span>: <a href="https://github.com/mostafizurRahaman">mostafizurRahaman</a></span></li>
         </ul>
      </div>
   );
};

export default BioGraphy;