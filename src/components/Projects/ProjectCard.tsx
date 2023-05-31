import { FiGithub, FiLink, FiServer } from "react-icons/fi";
import styles from "./Project.module.css";


interface projectCardType {
   image: string;
   name: string;
   subTitle: string;
   client: string;
   server: string;
   live: string;
   summery: string;
   technology: string[];
}
const ProjectCard = ({
   image,
   name,
   subTitle,
   client,
   server,
   live,
   summery,
   technology,
}: projectCardType) => {
   return (
      <div className={`p-[1px] rounded-lg ${styles.card} `}>
         <div
            className={`text-accent bg-info p-5 rounded-lg  `}
         >
            <div className="overflow-hidden  rounded-md">
               <img
                  src={image}
                  alt={name}
                  className="rounded-md object-cover object-top hover:object-bottom w-full h-44    duration-[3s] "
               />
            </div>
            <div className="">
               <h4 className="text-4xl font-bold mt-3 uppercase text-secondary ">
                  {name}
               </h4>
               <small className="text-xl md:text-2xl mt-[-5px]  text-blue-500 block">
                  {subTitle}
               </small>
            </div>

            <div className="">
               <p className="my-3 mb-5 text-lg ">{summery.slice(0, 100)}...</p>

               <div className="flex  text-lg bg:opacity-80  rounded-lg gap-1 flex-wrap bg-black  p-2">
                  {technology?.slice(0, 5).map((i: string, idx: number) => (
                     <p
                        className={`${idx % 2 === 0 && "text-secondary"} ${
                           idx % 2 === 1 && "text-blue-500"
                        }`}
                        key={idx}
                     >
                        #{i}
                     </p>
                  ))}
               </div>
               <div className="flex flex-row-reverse items-center justify-between mt-5">
                  <div className="flex  items-center gap-3  text-2xl ">
                     <a
                        className=" hover:text-secondary duration-1000"
                        href={client}
                        target="_blank"
                     >
                        {" "}
                        <FiGithub></FiGithub>
                     </a>
                     <a
                        className=" hover:text-secondary duration-1000"
                        href={server}
                        target="_blank"
                     >
                        <FiServer></FiServer>
                     </a>
                     <a
                        className=" hover:text-secondary duration-1000"
                        href={live}
                        target="_blank"
                     >
                        {" "}
                        <FiLink></FiLink>{" "}
                     </a>
                  </div>
                  <div>
                     <button className="px-3 capitalize text-xl  py-1 bg-blue-500 font-medium text-white rounded-lg ">
                        more details 
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
