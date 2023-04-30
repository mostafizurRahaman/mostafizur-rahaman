import Headings from "../Headings";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
   return (
      <section id="experience" className="bg-primary px-10 ">
         <Headings content="Experience"></Headings>
         <div className="flex  md:flex-row flex-col items-center justify-between ">
            <div className="flex flex-col gap-20 border-l-2 border-accent my-10 ">
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
            <div className="flex flex-col gap-20 border-l-2 border-accent my-10">
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
      </section>
   );
};

export default Experience;
