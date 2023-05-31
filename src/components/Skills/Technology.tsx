interface Style {
   animation: string;
   width: string; 
   background: string; 
}

import { skills } from "../../configs/Type";
import styles from "./Skills.module.css";

const Technology = ({expertise, name, icon}: skills) => {
   const style: Style = {
      animation: `3s 5 reverse  progress${expertise} ease-in-out`,
      width: `${expertise}%`,
      background:` linear-gradient(90deg , #FF014F,#4fa6f8)`
   };

   return (
      <div
         className={`p-2 rounded-lg bg-primary mt-3 gap-2  flex items-center w-full ${styles.skills}`}
      >
         <div className="">
            <img src={icon} alt="" className="w-14 h-14 " />
         </div>
         <div className="w-full">
            <style>{`
            @keyframes progress${expertise} {
                 0% {width: ${expertise}%; background: linear-gradient(-90deg , #FF014F,#4fa6f8)}
                 100% { width: 0%;   background: linear-gradient(90deg , #FF014F,#4fa6f8)}
                
            }
        `}</style>
            <div className="skill w-full h-4 relative border-2 border-white  border-collapse rounded-lg p-[2.5px]">
               <div
                  style={style}
                  className={`progress-bar w-0 h-[100%] bg-secondary after:w-3 after:h-3 after:bg-secondary after:block   after:absolute after:right-0 after:top-[-16px]  after:rotate-45 before:w-10 before:h-5 before:bg-secondary before:flex before:items-center before:justify-center before:text-accent before:text-semibold  relative before:absolute before:right-0 before:top-[-30px] before:z-10 before:translate-x-1/2 duration-1000 
                  before:rounded-lg after:translate-x-1/2  before:text-lg  before:font-bold rounded-lg`}
               >
                  <p className="absolute text-base font-bold text-white  right-0 top-[-20px] z-50 translate-x-[50%] translate-y-[-50%]">{expertise}%</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Technology;

