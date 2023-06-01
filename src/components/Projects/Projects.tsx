import Headings from "../Shared/Headings";
import ProjectCard from "./ProjectCard";
import {useState, useEffect} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import {  projectCardType } from "../../configs/Type";
import { baseURL } from "../../configs/configs";



const Projects = () => {
   const [projects, setProjects ] = useState<projectCardType[]>([]);
   

   const getProjects = async() => {
      const res = await fetch(`${baseURL}projects`, {
         headers: {
            'authorization': `bearer ${localStorage.getItem('token')}`
         }
      }); 

      const data = await res.json(); 
      setProjects(data); 
      console.log(data); 
   }
   useEffect(()=>{
         getProjects(); 
   }, [])

   return (
      <section id="portfolio" className="bg-primary py-16 px-10">
         <Headings content="My Projects"></Headings>
         <div className="py-16 flex items-center justify-center">
            <Swiper
               effect={"coverflow"}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={1}
               breakpoints={{
                  640: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
               }}
               coverflowEffect={{
                  rotate: 45,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
               }}
               pagination={true}
               navigation={true}
               modules={[EffectCoverflow, Pagination, Navigation]}
               className="mySwiper py-10"
            >
               {projects.map((i:projectCardType, idx: number) => (
                  <SwiperSlide key={idx}>
                     <ProjectCard
                        project={i}
                     ></ProjectCard>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default Projects;
