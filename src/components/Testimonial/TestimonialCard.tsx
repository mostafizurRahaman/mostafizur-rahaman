import { FaStar } from "react-icons/fa";

import styles from './testimonials.module.css'; 

interface CardType {
   image: string;
   name: string;
   userName: string;
   reviews: number;
   summery: string;
}

const TestimonialCard = ({
   image,
   name,
   userName,
   reviews,
   summery,
}: CardType) => {
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
                        (i: number, idx: number) => <FaStar className="text-orange-600"></FaStar>
                     )}
                  {reviews &&
                     [...Array(5 - reviews).keys()].map(
                        (i: number, idx: number) => <FaStar></FaStar>
                     )}
               </p>
            </div>
         </div>
         <p  className="text-lg ps-24 ">{summery.slice(0, 100)}...</p>
      </article>
   );
};

export default TestimonialCard;
