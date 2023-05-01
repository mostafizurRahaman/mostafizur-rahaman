import Headings from "../Shared/Headings";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
interface review {
   image: string;
   name: string;
   userName: string;
   reviews: number;
   summery: string;
}
const Testimonials = () => {
   const reviews: review[] = [
      {
         image: "https://mostafizur-rahaman-fahim.netlify.app/static/media/author-imgae.1c08e9b3b91acf1af9b3.png",
         name: "Mostafizur Rahaman",
         userName: "mostafizurRahaman",
         reviews: 2,
         summery:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, totam.",
      },
      {
         image: "https://mostafizur-rahaman-fahim.netlify.app/static/media/author-imgae.1c08e9b3b91acf1af9b3.png",
         name: "Mostafizur Rahaman",
         userName: "mostafizurRahaman",
         reviews: 5,
         summery:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, totam.",
      },
      {
         image: "https://mostafizur-rahaman-fahim.netlify.app/static/media/author-imgae.1c08e9b3b91acf1af9b3.png",
         name: "Mostafizur Rahaman",
         userName: "mostafizurRahaman",
         reviews: 3,
         summery:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, totam.",
      },
      {
         image: "https://mostafizur-rahaman-fahim.netlify.app/static/media/author-imgae.1c08e9b3b91acf1af9b3.png",
         name: "Mostafizur Rahaman",
         userName: "mostafizurRahaman",
         reviews: 4,
         summery:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, totam.",
      },
   ];
   return (
      <section id="testimonials" className="bg-primary py-16 px-10">
         <Headings content="Testimonials"></Headings>
         {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10 ">
             {
               reviews?.map((i:review, idx:number)=> {
                  return <TestimonialCard key={idx}
                  image={i.image}
                  name={i.name}
                  userName={i.userName}
                  reviews={i.reviews}
                  summery={i.summery}
               ></TestimonialCard>
               })
             }
         </div> */}
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
            {reviews?.map((i: review, idx: number) => {
               return (
                  <SwiperSlide>
                     <TestimonialCard
                        key={idx}
                        image={i.image}
                        name={i.name}
                        userName={i.userName}
                        reviews={i.reviews}
                        summery={i.summery}
                     ></TestimonialCard>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </section>
   );
};

export default Testimonials;
