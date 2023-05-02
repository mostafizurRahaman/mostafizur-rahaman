import Headings from "../Shared/Headings";
import mostafizur from "../../assets/mostafizur.png";
import BioGraphy from "./BioGraphy";
import PrimaryButton from "../Shared/PrimaryButton";
import { BsDownload } from "react-icons/bs";
import styles from "../Banner/Banner.module.css";

const About = () => {
   return (
      <section
         className="px-5 py-14 md:px-10 bg-primary text-accent"
         id="about"
      >
         <Headings content="About me"></Headings>

         <p className="text-accent text-xl my-5">
            I’m a Frontend Web Developer (MERN) & Computer Science Student. I
            have been learning web development for a year & still learning. As
            Full Stack developer, I’m able to design & develop a full stack
            website. I aim to be a senior Frontend Web Developer in the next 2
            years & also try to update myself with new technologies.
         </p>
         <div className="flex md:flex-row flex-col items-start gap-5">
            <div className=" hidden md:block md:w-1/3 ">
               <div className={`rounded-xl w-[90%] ${styles.bannerImage1}`}>
                  <div className="p-3 rounded-lg">
                     <img
                        src={mostafizur}
                        alt=""
                        className={` rounded-lg ${styles.bannerImage} ${styles.img}`}
                     />
                  </div>
               </div>
            </div>
            <div className="w-full md:w-2/3">
               <h3 className=" text-3xl md:text-4xl  mb-5 font-bold text-secondary">
                  FRONTEND DEVELOPER (MERN STACK)
               </h3>
               <p className="text-xl mb-5">
                  I'm a full-stack web developer who has a wide range of skills
                  in React, Express JS, Node Js, MongoDB, Javascript, HTML, CSS,
                  TailwindCSS, Bootstrap 5, React Bootstrap, DaisyUI, Stripe,
                  JWT, Firebase Authentication, API, REST API, GitHub, Git,
                  Netlify, Vercel etc.
               </p>
               <BioGraphy></BioGraphy>
               <p className="text-xl mt-5">
                  On more personal level, I am very open to any situation that
                  is changing and which test my abilities and with my work
                  catalogue I have a reputation as being fast learner.
               </p>
               <div className="flex items-center justify-center my-6">
                  <PrimaryButton path="./cv.pdf" fileName="Mostafizur_Rahaman_CV"  content="download My cv">
                     <BsDownload></BsDownload>
                  </PrimaryButton>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
