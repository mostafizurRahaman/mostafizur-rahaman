import { useNavigate, NavigateFunction } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { ExperienceType } from "../../configs/Type";
import { baseURL } from "../../configs/configs";
import Heading1 from "../Shared/Heading1/Heading1";
import Headings from "../Shared/Headings";
import ExperienceCard from "./ExperienceCard";
import { useState, useEffect, useContext } from "react";
const Experience = () => {
   const [experiences, setExperieces] = useState<ExperienceType[]>([]);
   const { logOut } = useContext(AuthContext);
   const navigate: NavigateFunction = useNavigate();
   const getExperiences = async () => {
      const res = await fetch(`${baseURL}experiences`);
      
      const data = await res.json();
      setExperieces(data);
      console.log(data);
   };
   useEffect(() => {
      getExperiences();
   }, []);

   const workedExperiences: ExperienceType[] = experiences.filter(
      (i: ExperienceType) =>
         i.category === "work" ||
         i.category === "internship" ||
         i.category === "course"
   );

   const EducationalExperiences: ExperienceType[] = experiences.filter(
      (i: ExperienceType) => i.category === "education"
   );

   return (
      <section id="experience" className="bg-primary px-2 md:px-10 ">
         <Headings content="Experience"></Headings>
         <div className=" grid md:grid-cols-2 grid-cols-1 justify-between  gap-10">
               <div>
                  <Heading1 title="Work Experience"></Heading1>
                  <div className="flex flex-col gap-20 border-l-4 border-black my-10">
                     {workedExperiences.map((i: ExperienceType) => (
                        <ExperienceCard
                           _id={i._id}
                           achivement={i.achivement}
                           institute={i.institute}
                           description={i.description}
                           documents={i.documents}
                           category={i.category}
                           start={i.start}
                           status={i.status}
                           end={i.end && i.end}
                        ></ExperienceCard>
                     ))}
                  </div>
               </div>
               <div>
                  <Heading1 title="Education"></Heading1>
                  <div className="flex flex-col gap-20 border-l-4 border-black my-10">
                     {EducationalExperiences.map((i: ExperienceType) => (
                        <ExperienceCard
                           _id={i._id}
                           achivement={i.achivement}
                           institute={i.institute}
                           description={i.description}
                           documents={i.documents}
                           category={i.category}
                           start={i.start}
                           status={i.status}
                           end={i.end && i.end}
                        ></ExperienceCard>
                     ))}
                  </div>
               </div>
         </div>
      </section>
   );
};

export default Experience;
