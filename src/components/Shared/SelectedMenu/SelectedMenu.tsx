import { useState } from "react";
import {  ChangeTypeInput, ExperienceType, ItemsType, SelectEvent } from "../../../configs/Type";
import styles from './SelectedMenu.module.css'; 
interface SelectedMenuItems {
   name: string; 
   title: string; 
   items: ItemsType[]; 
   experience: ExperienceType, 
   setExperience : React.Dispatch<React.SetStateAction<ExperienceType>>
}

const SelectedMenu = ({ name, title, items, experience, setExperience}:SelectedMenuItems) => {   
   const [selected, setSelected] = useState<string>(items[0].name)


   const handleChange:SelectEvent  = (e) => {
      const value:string = e.target.value; 
      console.log(value)
      console.log(name); 
      setSelected(value); 
      setExperience({...experience, [name]:value})
      console.log(experience);
   }
 
   return (
      <div className="flex w-full capitalize flex-col gap-3">
         <label className="text-xl font-bold text-accent" htmlFor={name}>{title}</label>
         <select className={`text-xl bg-primary outline-none focus:border-2 focus:text-secondary focus:border-secondary autofill:bg-primary autofill:text-secondary w-full capitalize  font-semibold text-secondary py-[10px] px-3  rounded-lg ${styles.selectedMenu}`}  onChange={handleChange}  name={name} id={name} >
            {
             items.map((i:ItemsType, idx: number)=><option className="capitalize rounded-none " key={idx} selected={selected === i.name}  value={i.name}>
                  {i.name}
             </option>)
            }
         </select>
      </div>
   );
};

export default SelectedMenu;