import Headings from "../Headings";
import Technology from "./Technology";


interface Skills{
   id: number, 
   name: string, 
   expertise: number, 
}

const Skills = () => {
   const skills : Skills[] = [
      {
         id: 1, 
         name: "HTML", 
         expertise: 90, 
      }, 
      {
         id: 2, 
         name: "CSS", 
         expertise: 95, 
      }
   ]
   return (
      <section id="skills" className="bg-primary py-16">
            <Headings content="Skills"></Headings>
            <div className=" px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
               <Technology></Technology>
            </div>
      </section>
   );
};

export default Skills;