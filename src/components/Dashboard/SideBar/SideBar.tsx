import { Link } from "react-router-dom";
import {useState} from 'react'; 
const SideBar = () => {
  
   return (
      <div className={`flex items-center flex-col border-r-2 border-accent  text-xl font-bold text-secondary min-h-screen   bg-gray-800  md:sticky top-20 w-[250px]`}>
         <Link className="w-full border-y-2  py-2 border-accent capitalize text-center" to="/dashboard/add-project">Add Project</Link>
         <Link className="w-full border-b-2 py-2 border-accent capitalize text-center" to="/dashboard/education">Experiences</Link>
         <Link className="w-full border-b-2 py-2 border-accent capitalize text-center" to="/dashboard/skills">Skills</Link>
      </div>
   );
};

export default SideBar;
