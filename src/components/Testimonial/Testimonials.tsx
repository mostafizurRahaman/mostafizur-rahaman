import Headings from "../Shared/Headings";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
import { TestimonialType } from "../../configs/Type";
import { useEffect, useState } from "react";
import { baseURL } from "../../configs/configs";

const Testimonials = () => {
   const [reviews , setReviews ] = useState<TestimonialType[]>([])
   useEffect(()=>{
      fetch(`${baseURL}testimonials`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.log(err)); 
   })
   return (
      <section id="testimonials" className="bg-primary py-16 px-10">
         <Headings content="Testimonials"></Headings>
         <Swiper
            //   slidesPerView={3}
            grid={{
               rows: 1,
            }}
            grabCursor={true}
            spaceBetween={20}
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
            pagination={{
               clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper py-20 pb-10"
         >
            {reviews?.map((i: TestimonialType, idx: number) => {
               return (
                  <SwiperSlide>
                     <TestimonialCard
                        key={idx}
                        image={i.image}
                        name={i.name}
                        userName={i.userName}
                        reviews={i.reviews}
                        summery={i.message}
                     ></TestimonialCard>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </section>
   );
};

export default Testimonials;
