interface ExperienceType {
   position: string;
   starting: number;
   ending: number;
   content: string;
   institute: string;
}
import { MdDoubleArrow } from "react-icons/md";
import styles from './Experience.module.css'; 
const ExperienceCard = ({
   position,
   starting,
   ending,
   content,
   institute,
}: ExperienceType) => {
   return (
      <div className={`experience-card after:w-5 after:h-5 after:rounded-full  duration-1000 after:bg-primary relative after:block  text-accent w-[300px] md:w-[450px] p-5 rounded-lg   bg-primary    ml-10 after:border-[3px]   before:w-10 before:h-1 before:bg-accent before:block after:absolute after:top-1/2  after:left-[-50px] after:translate-y-[-50%] before:absolute before:top-1/2  before:left-[-40px] before:translate-y-[-50%] hover:text-primary  hover:before:bg-secondary hover:after:border-secondary after:hover:bg-secondary   ${styles.experience}`}>
         <div>
            <h3 className=" text-xl md:text-xl font-bold uppercase">{position}</h3>
            <h4 className="text-base font-medium capitalize flex md:flex-row flex-col md:items-center gap-1 md:gap-2 mb-5">
               {institute}{" "}
               <span className="text-base">
                  ( {starting} - {ending} )
               </span>
            </h4>
            <p className="text-sm">{content}</p>
            <div className=" flex items-center justify-end">
               <MdDoubleArrow className="text-2xl  text-white"></MdDoubleArrow>
            </div>
         </div>
      </div>
   );
};

export default ExperienceCard;
