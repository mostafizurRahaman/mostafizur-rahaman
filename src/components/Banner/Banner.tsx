import PrimaryButton from "../Shared/PrimaryButton";
import mostafizurImage from "../../assets/mostafizur.png";
import Typewriter from "typewriter-effect";
import { BsCloudDownload } from "react-icons/bs";
import SocialTemplate from "../Shared/SocialTemplate";
import styles from "./Banner.module.css";
const Banner = () => {
   return (
      <section
         id="home"
         className="flex md:flex-row flex-col-reverse items-center bg-primary justify-center gap-10  md:min-h-screen px-3 md:px-10 py-5 banner"
      >
         <div className="text-white w-full md:w-3/5">
            <h4 className="text-xl  md:text-3xl font-medium mb-3 uppercase text-accent">
               welcome to my dev world
            </h4>
            <div className="space-y-3">
               <h1 className="text-[39px] md:text-6xl font-bold  md:mt-0 mt-3">
                  Hi , I'm
                  <span className="ml-3 text-secondary uppercase ">
                     Mostafizur Rahaman
                  </span>
               </h1>
               <h3 className=" text-3xl md:text-4xl uppercase font-semibold flex items-center gap-2">
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
               <p className="text-accent text-xl mb-2  ">
                  I have been learning web development for a year & still
                  learning. As Full Stack developer, I’m able to design &
                  develop a full stack website. I aim to be a senior Frontend
                  Web Developer in the next 2 years & also try to update myself
                  with new technologies.
               </p>
               <div className="flex md:flex-row flex-col  items-center gap-5">
                  <div className="flex gap-5">
                     <PrimaryButton content="Resume">
                        <BsCloudDownload></BsCloudDownload>
                     </PrimaryButton>
                     <PrimaryButton content="CV">
                        <BsCloudDownload></BsCloudDownload>
                     </PrimaryButton>
                  </div>
                  <SocialTemplate></SocialTemplate>
               </div>
            </div>
         </div>
         <div className={`md:w-2/5 flex items-center justify-center w-full`}>
            <div className={`${styles.bannerImage1} w-[65%]  rounded-lg  `}>
               <div className={`p-3  rounded-lg `}>
                  <img
                     src={mostafizurImage}
                     alt="mostafizur-rahaman-image"
                     className={` ${styles.bannerImage} hover:bg-secondary rounded-lg duration-1000   `}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
