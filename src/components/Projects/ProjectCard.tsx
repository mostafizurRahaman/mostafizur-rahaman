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
            <div className="overflow-hidden">
               <img
                  src={image}
                  alt={name}
                  className="rounded-md h-44 hover:scale-[1.1] hover:rotate-6 duration-1000 "
               />
            </div>
            <div className="">
               <h4 className="text-2xl font-bold mt-3 uppercase text-secondary ">
                  {name}
               </h4>
               <small className="text-base mt-[-5px]  text-blue-500 block">
                  {subTitle}
               </small>
            </div>

            <div className="">
               <p className="my-5 text-sm ">{summery.slice(0, 100)}...</p>

               <div className="flex  text-sm  rounded-lg gap-1 flex-wrap bg-primary  p-2">
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
                     <button className="px-3 py-1 bg-blue-500 font-bold text-white rounded-lg ">
                        Show Details
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
