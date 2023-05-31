import { useRef, useState } from "react";
import Headings from "../../Shared/Headings";
import InputBox from "../../Shared/InputBox";
import {
   ChangeTypeInput,
   ChangeTypeTextArea,
   FormSubmitType,
   TestimonialErrors,
   TestimonialType,
} from "../../../configs/Type";
import TextArea from "../../Shared/TextArea";
import ImageUpload from "../../ImageUpload/imageUpload";
import SubmitButton from "../../Shared/SubmitButton";
import { baseURL } from "../../../configs/configs";

const AddTestimonial = () => {
   const [testimonial, setTestimonial] = useState<TestimonialType>({
      name: "",
      userName: "",
      reviews: 0,
      message: "",
      image: "",
   });
   const [errors, setErrors] = useState<TestimonialErrors>({
      name: "",
      userName: "",
      reviews: "",
      message: "",
      image: "",
   });

   const formRef = useRef<HTMLFormElement>(null)
   const handleName: ChangeTypeInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: `${name} should't be empty` });
         setTestimonial({ ...testimonial, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setTestimonial({ ...testimonial, [name]: value });
      }
   };

   const handleUserName: ChangeTypeInput = (e) => {
      const name = e.target.name;
      const value = e.target.value.trim();
      console.log(value.split(" "));
      if (value.length <= 0) {
         setErrors({ ...errors, [name]: `${name} should't be empty` });
         setTestimonial({ ...testimonial, [name]: "" });
      } else if (value.split(" ").length > 1) {
         setErrors({ ...errors, [name]: `${name} doesn't have any space` });
         setTestimonial({ ...testimonial, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setTestimonial({ ...testimonial, [name]: value });
      }
   };
   const handleReview: ChangeTypeInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      const numvalue  = parseInt(value); 

      if (value.length < 0) {
         setErrors({ ...errors, [name]: "reviews shouldn't be empty" });
         setTestimonial({ ...testimonial, [name]: "" });
      }else if(isNaN(numvalue)){
         setErrors({ ...errors, [name]: "reviews must be an number" });
         setTestimonial({ ...testimonial, [name]: "" });
      }else if(numvalue <=0 || numvalue >5){
         setErrors({ ...errors, [name]: "reviews must be between 1-5" });
         setTestimonial({ ...testimonial, [name]: "" });
      }
      else{
         setErrors({...errors, [name]: ''}); 
         setTestimonial({...testimonial, [name]: numvalue}); 
      }
   };
   const handleMessage: ChangeTypeTextArea = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if(value.length < 0){
         setErrors({...errors , [name]: `${name} should't be empty`}); 
         setTestimonial({...testimonial, [name]: ''}); 
      }else if(value.length < 50){
         setErrors({...errors , [name]: `${name} should be 50-100`}); 
         setTestimonial({...testimonial, [name]: ''}); 
      }else{
         setErrors({...errors , [name]: ``}); 
         setTestimonial({...testimonial, [name]: value}); 
      }
   };
   const handleUpload: ChangeTypeInput = async (e) => {
      const name: string = e.target.name;
      if (e.target.files) {
         const rowImage: any = e.target.files[0];
         const formValue: FormData = new FormData();
         formValue.append("image", rowImage);

         const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${
               import.meta.env.VITE_IMAGE_BB_KEY
            }`,
            {
               method: "post",
               body: formValue,
            }
         );

         const data = await res.json();
         if (data.status === 200) {
            setErrors({ ...errors, [name]: "" });
            setTestimonial({ ...testimonial, [name]: data.data.url });
         } else {
            setErrors({ ...errors, [name]: "Image isn't uploaded" });
            setTestimonial({ ...testimonial, [name]: "" });
         }
      }
   };

   const handleSubmit : FormSubmitType =async (e) => {
      e.preventDefault(); 
      
      const res = await fetch(`${baseURL}testimonials`, {
         method: "post", 
         headers: {
            'content-type': 'application/json', 
         },
          body: JSON.stringify(testimonial)
      })

      const data = await res.json()
      if(data.acknowledged){
            setTestimonial({...testimonial, image:""}); 
            formRef?.current?.reset()
      }
   }
   return (
      <>
         <Headings content="Add Testimonial"></Headings>
         <form onSubmit={handleSubmit} ref={formRef} className="px-10 my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputBox
               type="text"
               name="name"
               title="Client Name"
               error={errors.name}
               onChange={handleName}
            ></InputBox>
            <InputBox
               type="text"
               name="userName"
               title="User Name"
               error={errors.userName}
               onChange={handleUserName}
            ></InputBox>
            <div className="col-span-2">
               <InputBox
                  type="number"
                  name="reviews"
                  title="Give Ratings"
                  error={errors.reviews}
                  onChange={handleReview}
               ></InputBox>
            </div>
            <TextArea
               cols={5}
               rows={6}
               name="message"
               title="Message"
               error={errors.message}
               onChange={handleMessage}
            ></TextArea>
            <div className="flex  flex-col gap-3 ">
               <label className="text-2xl text-accent" htmlFor="image">
                  Upload Image
               </label>
               <ImageUpload
                  id="image"
                  image={testimonial.image}
                  error={errors.image}
                  onChange={handleUpload}
               ></ImageUpload>
            </div>
            <div className="col-span-2">
               <SubmitButton
                  disabled={
                     !testimonial.name &&
                     !testimonial.image &&
                     !testimonial.reviews &&
                     !testimonial.userName &&
                     !testimonial.message
                  }
                  content="Add Testimonial"
               ></SubmitButton>
            </div>
         </form>
      </>
   );
};

export default AddTestimonial;


//*
// 240346 - hridoy hossain 
// polin - 143268
// maria - 
// mostafiz  - 240714
