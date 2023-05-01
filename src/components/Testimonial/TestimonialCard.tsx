import { FaStar } from "react-icons/fa";
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
      <article className="text-white bg-info p-5 rounded-s-md">
         <div className="flex items-center gap-3 ">
            <div className=" w-20 h-20 bg-gradient-to-l from-secondary rounded-full  flex items-center justify-center to-blue-500">
               <img
                  className="w-[74px] h-[74px] rounded-full bg-white "
                  src={image}
                  alt={userName}
               />
            </div>
            <div>
               <h4>{name}</h4>
               <p className="text-sm text-blue-500 font-medium">@{userName}</p>
               <p className="flex items-center gap-1  ">
                  {reviews &&
                     [...Array(reviews).keys()].map(
                        (i: number, idx: number) => <FaStar className="text-secondary"></FaStar>
                     )}
                  {reviews &&
                     [...Array(5 - reviews).keys()].map(
                        (i: number, idx: number) => <FaStar></FaStar>
                     )}
               </p>
            </div>
         </div>
         <p  className="text-sm ps-24 ">{summery}</p>
      </article>
   );
};

export default TestimonialCard;
