import { FaStar } from "react-icons/fa";

import styles from './testimonials.module.css'; 
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";
import DeleteItems from "../Shared/DeleteItems/DeleteItems";
import { TestimonialType } from "../../configs/Type";



const TestimonialCard = ({
   _id,
   image,
   name,
   userName,
   reviews,
   message,
}: TestimonialType) => {
   const {user} = useContext(AuthContext); 
   const {isAdmin} = useAdmin(user?.email as string); 

   return (
      <article className={`text-white bg-info p-5 ${styles.testmonialCard}`}>
         <div className="flex items-center gap-3 ">
            <div className=" w-20 h-20 bg-gradient-to-l from-secondary rounded-full  flex items-center justify-center to-blue-500">
               <img
                  className="w-[74px] h-[74px] rounded-full bg-white "
                  src={image}
                  alt={userName}
               />
            </div>
            <div>
               <h4 className="text-[22px] uppercase">{name}</h4>
               <p className="text-lg text-blue-500 font-medium mt-[-8px]">@{userName}</p>
               <p className="flex items-center gap-1  ">
                  {reviews &&
                     [...Array(reviews).keys()].map(
                        (i: number, idx: number) => <FaStar key={idx}className="text-orange-600"></FaStar>
                     )}
                  {reviews &&
                     [...Array(5 - reviews).keys()].map(
                        (i: number, idx: number) => <FaStar key={idx}></FaStar>
                     )}
               </p>
            </div>
         </div>
         <p  className="text-lg ps-24 ">{message.slice(0, 100)}...</p>
         <div className="text-2xl hover:text-secondary flex justify-end">
            {
               (isAdmin && _id) && <DeleteItems _id={_id} path="testimonials" name={`${userName}'s reviews deleted successfully`}></DeleteItems>
            }
         </div>
      </article>
   );
};

export default TestimonialCard;
