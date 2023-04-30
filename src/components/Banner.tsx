import PrimaryButton from "./PrimaryButton";
import mostafizurImage from "../assets/mostafizur.png";
import Typewriter from "typewriter-effect";
import { BsCloudDownload } from "react-icons/bs";
import SocialTemplate from "./SocialTemplate";

const Banner = () => {
   return (
      <section
         id="home"
         className="flex md:flex-row flex-col-reverse items-center bg-primary justify-center gap-10  md:min-h-screen px-3 md:px-10 py-5 banner"
      >
         <div className="text-white w-full md:w-3/5">
            <h4 className="text-base  md:text-xl font-medium mb-3 uppercase text-accent">
               welcome to my dev world
            </h4>
            <div className="space-y-3">
               <h1 className="text-3xl md:text-4xl md:text-[40px] font-bold  md:mt-0 mt-3">
                  Hi , I'm <br  className=" block md:hidden"/>
                  <span className="ml-1 text-secondary capitalize ">
                     Mostafizur Rahaman
                  </span>
               </h1>
               <h3 className=" text-xl md:text-3xl uppercase font-semibold flex items-center gap-2">
                  <span className=" text-secondary ">a</span>
                  <Typewriter
                     options={{
                        strings: [
                           "mern stack developer",
                           "frontend developer",
                           "react developer",
                           "fullstack developer",
                        ],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </h3>
               <p className="text-accent text-base mb-2  ">
                  I have been learning web development for a year & still
                  learning. As Full Stack developer, I’m able to design &
                  develop a full stack website. I aim to be a senior Frontend
                  Web Developer in the next 2 years & also try to update myself
                  with new technologies.
               </p>
               <div className="flex md:flex-row flex-col  items-center gap-5">
                  <PrimaryButton content="Download Resume">
                     <BsCloudDownload></BsCloudDownload>
                  </PrimaryButton>
                  <SocialTemplate></SocialTemplate>
               </div>
            </div>
         </div>
         <div className="md:w-2/5 flex items-center justify-center w-full">
            <img
               src={mostafizurImage}
               alt="mostafizur-rahaman-image"
               className="w-[65%] border-[5px]  border-secondary rounded-ee-3xl rounded-ss-3xl hover:rotate-45 duration-1000 "
            />
         </div>
      </section>
   );
};

export default Banner;