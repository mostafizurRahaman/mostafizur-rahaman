import { useEffect, useState } from "react";
import { projectCardType } from "../configs/Type";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "../configs/configs";
import Headings from "../components/Shared/Headings";
import { MdFeaturedVideo } from "react-icons/md";
import Heading1 from "../components/Shared/Heading1/Heading1";
import Heading2 from "../components/Shared/Heading2/Heading2";
import { FiGithub, FiLink, FiServer } from "react-icons/fi";
import { FaBackward } from "react-icons/fa";
const ProjectDetails = () => {
   const [project, setProject] = useState<projectCardType>({
      _id: "",
      name: "",
      subTitle: "",
      client: "",
      server: "",
      live: "",
      summery: "",
      description: "",
      technology: [],
      thumbnail: "",
      image1: "",
      image2: "",
      image3: "",
      features: [],
   });

   const featuersImage: string[] = [
      project.image1,
      project?.image2,
      project.image3,
   ];

   const { id } = useParams();
   console.log(id);
   useEffect(() => {
      const loadProject = async () => {
         const res = await fetch(`${baseURL}projects/${id}`);
         const data = await res.json();
         console.log(data);
         setProject(data);
      };
      if (id) {
         loadProject();
      }
   }, [id]);
   return (
      <div className="bg-primary md:px-10  px-5 py-10  ">
         <Headings content={project?.name}></Headings>
         <div className="bg-black p-5 rounded-lg mt-5">
            <Heading2 title="Description"></Heading2>
            <div className="text-xl font-bold text-accent ">
               {project.description.split("|").map((i: string, idx: number) => (
                  <p className="my-3" key={idx}>
                     {i}
                  </p>
               ))}
            </div>
            <Heading2 title={`Images of ${project.name}`}></Heading2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 py-5">
               {featuersImage.map((i: string, idx: number) => (
                  <div
                     key={idx}
                     className=" group p-2 h-68  rounded-md border border-secondary overflow-hidden "
                  >
                     <img
                        src={i}
                        className="w-full rounded-md group-hover:object-bottom  myImage h-64 object-cover object-top   duration-[3s] "
                     ></img>
                  </div>
               ))}
            </div>
            <Heading2 title="Features"></Heading2>
            <div className="w-full mb-5">
               {project.features.map((i: string, idx: number) => (
                  <div className=" mt-3 w-full flex items-start justify-start text-accent text-xl gap-4 font-semibold">
                     <MdFeaturedVideo className="w-20  text-secondary text-2xl "></MdFeaturedVideo>
                     <p key={idx} className="w-full text-xl">
                        {i}
                     </p>
                  </div>
               ))}
            </div>
            <Heading2 title="technology used"></Heading2>
            <div className="grid grid-cols-2 md:grid-cols-7  text-xl flex-wrap gap-[2px] bg-black rounded-lg  ">
               {project.technology.map((i: string, idx: number) => (
                  <p
                     className={`${
                        idx % 2 === 1 ? "text-secondary" : "text-blue-500"
                     } capitalize`}
                  >
                     {idx + 1}. {i}
                  </p>
               ))}
            </div>

            <div className="flex justify-center mb-5">
               <Heading2 title="Explore More"></Heading2>
            </div>
            <div className="text-accent flex  justify-center items-center gap-4 text-2xl">
               <a
                  className=" hover:text-secondary duration-1000"
                  href={project.client}
                  target="_blank"
               >
                  {" "}
                  <FiGithub></FiGithub>
               </a>
               <a
                  className=" hover:text-secondary duration-1000"
                  href={project.server}
                  target="_blank"
               >
                  <FiServer></FiServer>
               </a>
               <a
                  className=" hover:text-secondary duration-1000"
                  href={project.live}
                  target="_blank"
               >
                  {" "}
                  <FiLink></FiLink>{" "}
               </a>
            </div>
            <Link to='/' className="text-xl font-bold text-secondary"><FaBackward className="text-2xl"></FaBackward> Back To Home</Link>
         </div>
         
      </div>
   );
};

export default ProjectDetails;
