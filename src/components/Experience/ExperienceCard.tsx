import { MdDoubleArrow } from "react-icons/md";
import styles from "./Experience.module.css";
import { ExperienceType } from "../../configs/Type";
import DeleteItems from "../Shared/DeleteItems/DeleteItems";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";
const ExperienceCard = ({
   achivement,
   _id,
   institute,
   description,
   documents,
   category,
   start,
   end,
   status,
}: ExperienceType) => {
   const { user } = useContext(AuthContext);
   const { isAdmin } = useAdmin(user?.email as string);
   return (
      <div
         className={` group experience-card after:w-5 after:h-5 after:rounded-full  duration-1000 after:bg-primary relative after:block  text-accent w-[85%] md:w-[450px] p-5 rounded-lg   bg-primary ml-10 after:border-[3px]   before:w-10 before:h-1 before:bg-accent before:block after:absolute after:top-1/2  after:left-[-50px] after:translate-y-[-50%] before:absolute before:top-1/2  before:left-[-40px] before:translate-y-[-50%] hover:text-primary  hover:before:bg-secondary hover:after:border-secondary after:hover:bg-secondary   ${styles.experience}`}
      >
         <div>
            <h3 className="  text-[22px] md:text-3xl font-bold uppercase">
               {achivement}
            </h3>
            <h4 className="text-lg italic font-medium uppercase flex md:flex-row flex-col md:items-center gap-1 md:gap-2 ">
               {institute}{" "}
            </h4>

            <p className="text-lg md:text-xl my-5">
               {description.slice(0, 150)}...
            </p>
            <div className=" flex items-center justify-between mt-5">
               <span className="text-lg md:text-xl text-white  bg-blue-500 rounded-lg group-hover:bg-black px-3 py-1 capitalize">
                  ( {start} - {status === "contineuous" ? "appered" : end} )
               </span>

               <div className="text-accent text-2xl hover:text-black flex-row-reverse  items-center  flex gap-2">
                  <MdDoubleArrow className=" "></MdDoubleArrow>
                  { (isAdmin && _id) && (
                     <DeleteItems
                        _id={_id}
                        path="experiences"
                        name={achivement}
                     ></DeleteItems>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ExperienceCard;
