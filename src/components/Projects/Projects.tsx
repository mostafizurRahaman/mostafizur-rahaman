import Headings from "../Shared/Headings";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

interface projectCardType {
   image: string;
   name: string;
   subTitle: string;
   client: string;
   server: string;
   live: string;
   summery: string;
   technology: string[];
}

const Projects = () => {
   const projects: projectCardType[] = [
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
      {
         image: "https://i.ibb.co/wQYbWtj/productko.png",
         name: "ProductKo",
         subTitle: "Fullstack Ecommerce  ",
         live: "https://mostafizur-rahaman-fahim.netlify.app/",
         client: "https://github.com/mostafizurRahaman/Productko",
         server: "https://github.com/mostafizurRahaman/Productko-serverside",
         summery:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur veniam accusamus assumenda autem aut asperiores porro perferendis, pariatur excepturi officiis similique itaque necessitatibus consectetur? Rerum commodi ab aliquam accusamus ducimus",
         technology: [
            "react",
            "typescript",
            "nextjs",
            "javascript",
            "es6",
            "html",
            "css",
            "firebase",
            "express js",
            "nodejs",
            "mongoDB",
            "Bootstrap5",
            "tailwindcss",
         ],
      },
   ];
   return (
      <section id="portfolio" className="bg-primary py-16 px-10">
         <Headings content="My Projects"></Headings>

         {/* <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 my-10 ">
            {projects.map((i: projectCardType, idx: number) => (
               <ProjectCard
                  image={i.image}
                  name={i.name}
                  subTitle={i.subTitle}
                  live={i.live}
                  client={i.client}
                  server={i.server}
                  summery={i.summery}
                  technology={i.technology}
               ></ProjectCard>
            ))}
         </div> */}

         <div className="py-16 flex items-center justify-center">
            <Swiper
               effect={"coverflow"}
               grabCursor={true}
               // centeredSlides={true}
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
               {projects.map((i: projectCardType, idx: number) => (
                  <SwiperSlide key={idx}>
                     <ProjectCard
                        image={i.image}
                        name={i.name}
                        subTitle={i.subTitle}
                        live={i.live}
                        client={i.client}
                        server={i.server}
                        summery={i.summery}
                        technology={i.technology}
                     ></ProjectCard>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default Projects;
