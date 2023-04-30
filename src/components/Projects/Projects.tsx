import Headings from "../Headings";
import ProjectCard from "./ProjectCard";
interface projectCardType {
   image: string, 
   name: string, 
   subTitle: string, 
   client: string,
   server: string, 
   live:string, 
   summery: string, 
   technology: string[], 
}

const Projects = () => {
      const projects : projectCardType[] =[
         { 
            image: "https://i.ibb.co/wQYbWtj/productko.png",
            name: 'ProductKo', 
            subTitle: "Fullstack Ecommerce  ",
            live: 'https://mostafizur-rahaman-fahim.netlify.app/', 
            client: "https://github.com/mostafizurRahaman/Productko", 
            server: 'https://github.com/mostafizurRahaman/Productko-serverside', 
            summery: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus", 
            technology: ['react', "typescript", 'nextjs', 'javascript', 'es6', 'html', 'css' ,'firebase','express js', 'nodejs', 'mongoDB','Bootstrap5', 'tailwindcss' ]

         },
         { 
            image: "https://i.ibb.co/wQYbWtj/productko.png",
            name: 'ProductKo', 
            subTitle: "Fullstack Ecommerce  ",
            live: 'https://mostafizur-rahaman-fahim.netlify.app/', 
            client: "https://github.com/mostafizurRahaman/Productko", 
            server: 'https://github.com/mostafizurRahaman/Productko-serverside', 
            summery: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus", 
            technology: ['react', "typescript", 'nextjs', 'javascript', 'es6', 'html', 'css' ,'firebase','express js', 'nodejs', 'mongoDB','Bootstrap5', 'tailwindcss' ]

         },
         { 
            image: "https://i.ibb.co/wQYbWtj/productko.png",
            name: 'ProductKo', 
            subTitle: "Fullstack Ecommerce  ",
            live: 'https://mostafizur-rahaman-fahim.netlify.app/', 
            client: "https://github.com/mostafizurRahaman/Productko", 
            server: 'https://github.com/mostafizurRahaman/Productko-serverside', 
            summery: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus", 
            technology: ['react', "typescript", 'nextjs', 'javascript', 'es6', 'html', 'css' ,'firebase','express js', 'nodejs', 'mongoDB','Bootstrap5', 'tailwindcss' ]

         }
      ] 
   return (
      <section id="projects" className="bg-primary py-16">
         <Headings content="My Projects"></Headings>

         <div className="grid grid-cols-3 gap-10 px-10 my-10 ">
            {
               projects.map((i:projectCardType, idx:number)=> <ProjectCard image={i.image} name={i.name} subTitle={i.subTitle} live={i.live} client={i.client} server={i.server} summery={i.summery} technology={i.technology}   ></ProjectCard>)
            }
         </div>
      </section>
   );
};

export default Projects;


