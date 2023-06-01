import { Link } from "react-router-dom";
import { useState } from "react";
import {AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'; 

interface SideBarType {
   hide: boolean
}
const SideBar = ({hide}: SideBarType) => { 
   
   return (
      <div
         className={` min-h-screen  fixed w-[250px] ${hide ? 'left-0 z-50' : "left-[-250px]"} bg-gray-800 border-r-2 border-accent    md:w-[250px] md:left-0 md:top-20 md:sticky flex items-center flex-col   text-xl font-bold text-secondary `  }
      >
         
   
         
         <Link
            className="w-full border-y-2  py-2 border-accent capitalize text-center"
            to="/dashboard/add-project"
         >
            Add Project
         </Link>
         <Link
            className="w-full border-b-2 py-2 border-accent capitalize text-center"
            to="/dashboard/experiences"
         >
            Experiences
         </Link>
         <Link
            className="w-full border-b-2 py-2 border-accent capitalize text-center"
            to="/dashboard/skills"
         >
            Skills
         </Link>
         <Link
            className="w-full border-b-2 py-2 border-accent capitalize text-center"
            to="/dashboard/testimonials"
         >
            Testimonials
         </Link>
      </div>
   );
};

export default SideBar;
