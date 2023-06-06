import { FiGithub, FiLink, FiServer } from "react-icons/fi";
import styles from "./Project.module.css";
import { projectCardType } from "../../configs/Type";
import {useContext } from 'react'
import { NavigateFunction, useNavigate } from "react-router-dom";
import DeleteItems from "../Shared/DeleteItems/DeleteItems";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../hooks/useAdmin";

interface projectType  {
   project : projectCardType
}

const ProjectCard = ({project}:projectType ) => {
   const navigate:NavigateFunction = useNavigate()
   const {user}  = useContext(AuthContext); 
   const {isAdmin} = useAdmin(user?.email  as string); 
   const {_id,name,subTitle, technology, thumbnail, summery,client, server, live} = project; 
   
   const cardNaigate = () => {
     if(_id){
        navigate(`/projects/${_id}`) 
     }
   }
   return (
      <div className={`p-[1px] rounded-lg group ${styles.card} `}>
         <div
            className={`text-accent bg-info p-5 rounded-lg  `}
         >
            <div className="overflow-hidden  rounded-md">
               <img
                  src={thumbnail}
                  alt={name}
                  className="rounded-md w-full group-hover:object-bottom  myImage h-44 object-cover object-top   duration-[3s] "
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
                     {
                       (isAdmin && _id )&& <DeleteItems 
                                 _id={_id}
                                 name={name}
                                 path="projects"
                              ></DeleteItems>
                     }
                     
                  </div>
                  <div>
                     <button className="px-3 capitalize text-xl  py-1 bg-blue-500 font-medium text-white rounded-lg " onClick={cardNaigate}>
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
