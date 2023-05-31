import Heading1 from "../Shared/Heading1/Heading1";
import Headings from "../Shared/Headings";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
   return (
      <section id="experience" className="bg-primary px-5 md:px-10 ">
         <Headings content="Experience"></Headings>
         <div className="flex  md:flex-row flex-col items-center justify-between ">
            <div>
               <Heading1 title="Work Experience"></Heading1>
               <div className="flex flex-col gap-20 border-l-4 border-black my-10">
                  <ExperienceCard
                     content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem, nobis quam cum dolor perspiciatis sequi ipsum nisi sed reiciendis."
                     starting={2015}
                     ending={2020}
                     position="Secondary School Certificate"
                     institute="Bamni Adarsha High School"
                  ></ExperienceCard>
                  <ExperienceCard
                     content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem, nobis quam cum dolor perspiciatis sequi ipsum nisi sed reiciendis."
                     starting={2015}
                     ending={2020}
                     position="Secondary School Certificate"
                     institute="Bamni Adarsha High School"
                  ></ExperienceCard>
               </div>
            </div>
            <div>
               <Heading1 title="Education"></Heading1>
               <div className="flex flex-col gap-20 border-l-4 border-black my-10">
                  <ExperienceCard
                     content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem, nobis quam cum dolor perspiciatis sequi ipsum nisi sed reiciendis."
                     starting={2015}
                     ending={2020}
                     position="Secondary School Certificate"
                     institute="Bamni Adarsha High School"
                  ></ExperienceCard>
                  <ExperienceCard
                     content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem, nobis quam cum dolor perspiciatis sequi ipsum nisi sed reiciendis."
                     starting={2015}
                     ending={2020}
                     position="Secondary School Certificate"
                     institute="Bamni Adarsha High School"
                  ></ExperienceCard>
               </div>
            </div>
            
         </div>
      </section>
   );
};

export default Experience;
