import { useState, useRef } from "react";
import Headings from "../../Shared/Headings";
import InputBox from "../../Shared/InputBox";
import {
   ChangeTypeInput,
   ChangeTypeTextArea,
   ExperienceType,
   FormSubmitType,
   ItemsType,
} from "../../../configs/Type";
import TextArea from "../../Shared/TextArea";
import ImageUpload from "../../ImageUpload/imageUpload";
import InputDate from "../../Shared/InputDate";
import SubmitButton from "../../Shared/SubmitButton";
import { baseURL } from "../../../configs/configs";
import SelectedMenu from "../../Shared/SelectedMenu/SelectedMenu";

const AddExperiences = () => {
   const [experience, setExperience] = useState<ExperienceType>({
      achivement: "",
      institute: "",
      description: "",
      documents: "",
      start: "",
      category: "education",
      status: "contineuous",
      end: "",
   });
   const [errors, setErrors] = useState({
      achivement: "",
      institute: "",
      description: "",
      documents: "",
      start: "",
      end: "",
      general: "",
   });
   const formRef = useRef<HTMLFormElement>(null);

   const handleTextFields: ChangeTypeInput = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      if (value.length === 0) {
         setErrors({ ...errors, [name]: `${name} don't be empty` });
         setExperience({ ...experience, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setExperience({ ...experience, [name]: value });
      }
   };
   const handleDescription: ChangeTypeTextArea = (e) => {
      const value: string = e.target.value;
      if (value.length <= 50) {
         setErrors({
            ...errors,
            description: `description must be 50 character`,
         });
         setExperience({ ...experience, description: "" });
      } else {
         setErrors({ ...errors, description: "" });
         setExperience({ ...experience, description: value });
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
            setExperience({ ...experience, [name]: data.data.url });
         } else {
            setErrors({ ...errors, [name]: "Image isn't uploaded" });
            setExperience({ ...experience, [name]: "" });
         }
      }
   };
   const handleStartDate: ChangeTypeInput = (e) => {
      const start = e.target.value;
      if (start.length === 0) {
         setErrors({ ...errors, start: "start date shouldn't be empty" });
         setExperience({ ...experience, start: "" });
      } else {
         if (experience?.end) {
            const startDate = new Date(start).getTime();
            const endDate = new Date(experience?.end).getTime();
            if (startDate <= endDate) {
               setErrors({ ...errors, start: "" });
               setExperience({ ...experience, start: start });
            } else {
               setErrors({
                  ...errors,
                  start: "start date should be smaller then end date ",
               });
               setExperience({ ...experience, start: "" });
            }
         } else {
            setErrors({ ...errors, start: "" });
            setExperience({ ...experience, start: start });
         }
      }
   };
   const handleEndDate: ChangeTypeInput = (e) => {
      const end = e.target.value;
      if (end.length === 0) {
         setErrors({ ...errors, end: "end date shouldn't be empty" });
         setExperience({ ...experience, end: "" });
      } else {
         if (experience?.start) {
            const startDate = new Date(experience?.start).getTime();
            const endDate = new Date(end).getTime();

            if (startDate <= endDate) {
               setErrors({ ...errors, end: "" });
               setExperience({ ...experience, end: end });
            } else {
               setErrors({
                  ...errors,
                  end: "end date should be larger then start date ",
               });
               setExperience({ ...experience, end: "" });
            }
         } else {
            setErrors({ ...errors, end: "" });
            setExperience({ ...experience, end: end });
         }
      }
   };

   const handleSubmit: FormSubmitType = async (e) => {
      e.preventDefault();

      const res = await fetch(`${baseURL}experiences`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(experience),
      });
      const data = await res.json();
      console.log(data);
      if (data.acknowledged) {
         formRef.current?.reset();
         setExperience({ ...experience, documents: "" });
      } else {
         setErrors({ ...errors, general: "data is not posted try again" });
      }
   };

   const categories: ItemsType[] = [
      {
         id: 1,
         name: "education",
      },
      {
         id: 2,
         name: "course",
      },
      {
         id: 3,
         name: "work",
      },
      {
         id: 4,
         name: "internship",
      },
   ];

   const status: ItemsType[] = [
      {
         id: 1,
         name:"contineuous",
      },
      {
         id: 2,
         name: "end",
      },
   ];
   
   let isError:boolean; 
   if(experience.status==="contineuous"){
      isError = false; 
   }else{
      isError = errors.end ? true : false;  
   }
   console.log(experience); 

   return (
      <section>
         <Headings content="Add Experiences"></Headings>
         <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="grid md:grid-cols-2 grid-cols-1 gap-5 px-5 my-10"
         >
            <InputBox
               type="text"
               title="achivement"
               name="achivement"
               error={errors.achivement}
               onChange={handleTextFields}
            ></InputBox>
            <InputBox
               type="text"
               title="institute"
               name="institute"
               error={errors.institute}
               onChange={handleTextFields}
            ></InputBox>
            <SelectedMenu
               name="category"
               title="category"
               items={categories}
               experience={experience}
               setExperience={setExperience}
            ></SelectedMenu>
            <SelectedMenu
               name="status"
               title="Status"
               items={status}
               experience={experience}
               setExperience={setExperience}
            ></SelectedMenu>
            <InputDate
               name="start"
               title="start Date"
               error={errors.start}
               onChange={handleStartDate}
               max={experience.end && experience.end}
               disabled={false}
            ></InputDate>
            <InputDate
               name="end"
               title="end Date"
               error={errors.end}
               onChange={handleEndDate}
               min={experience.start && experience.start}
               disabled={experience.status === "contineuous" ? true : false}
            ></InputDate>
            <TextArea
               name="description"
               rows={6}
               cols={5}
               title="Description"
               error={errors.description}
               onChange={handleDescription}
            ></TextArea>
            <div className="flex flex-col gap-3">
               <label
                  htmlFor="Image"
                  className="text-xl  text-accent font-bold capitalize"
               >
                  Attach Files
               </label>
               <ImageUpload
                  id="documents"
                  image={experience.documents}
                  error={errors.documents}
                  onChange={handleUpload}
               ></ImageUpload>
            </div>
            <div className="col-span-2">
               <SubmitButton
                  disabled={
                     !experience.start ||
                     !experience.description ||
                     !experience.achivement ||
                     !experience.documents || isError
                  }
                  content="Add Experience"
               ></SubmitButton>
            </div>
         </form>
      </section>
   );
};

export default AddExperiences;
