import { skills } from "../../configs/Type";
import { baseURL } from "../../configs/configs";
import Headings from "../Shared/Headings";
import Technology from "./Technology";
import {useState, useEffect} from 'react'; 


const Skills = () => {
    const [skills ,setSkills]  = useState<skills[]>([]); 

    const loadSkills =async ()=>{
         const res = await fetch(`${baseURL}skills`); 
         const data = await res.json(); 
         setSkills(data); 
         
    }

    useEffect(()=>{
       loadSkills(); 
    }, [])
    console.log(skills);
   return (
      <section id="skills" className="bg-primary py-16">
         <Headings content="Skills"></Headings>
         <div className=" px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            {
               skills?.map((t:skills, idx:number)=><Technology key={idx} expertise={t.expertise} name={t.name} icon={t.icon}></Technology>)
            }
         </div>
      </section>
   );
};

export default Skills;
