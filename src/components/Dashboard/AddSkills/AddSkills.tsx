import { useFormState } from "react-hook-form";
import Headings from "../../Shared/Headings";
import InputBox from "../../Shared/InputBox";
import { useRef, useState } from "react";
import { ChangeTypeInput, FormSubmitType, SkillsError, skills } from "../../../configs/Type";
import ImageUpload from "../../ImageUpload/imageUpload";
import SubmitButton from "../../Shared/SubmitButton";
import { baseURL } from "../../../configs/configs";
import {  NavigateFunction, useNavigate } from "react-router-dom";

const AddSkills = () => {
   const [skill, setSkill] = useState<skills>({
      name: "",
      expertise: 0,
      icon: "",
   });
   const [errors, setErrors] = useState<SkillsError>({
      name: "",
      expertise: "",
      icon: "",
   });

   const formRef = useRef<HTMLFormElement>(null)
   const navigate: NavigateFunction = useNavigate(); 
   const handleName: ChangeTypeInput = (e) => {
      const name: string = e.target.value;
      if (name.length <= 0) {
         setErrors({ ...errors, name: "name shouldn't be empty" });
         setSkill({ ...skill, name: "" });
      } else {
         setErrors({ ...errors, name: "" });
         setSkill({ ...skill, name: name });
      }
   };

   const handleExpertise: ChangeTypeInput = (e) => {
      const value: string = e.target.value;
      const expertise: number = parseInt(e.target.value);
      if (value.length <= 0) {
         setErrors({ ...errors, expertise: "expertise shouldn't be empty" });
         setSkill({ ...skill, expertise: 0 });
      } else if (isNaN(expertise)) {
         setErrors({ ...errors, expertise: "must enter a number" });
         setSkill({ ...skill, expertise: 0 });
      } else if (expertise <= 0 || expertise > 100) {
         setErrors({ ...errors, expertise: "expertise should be 0-100" });
         setSkill({ ...skill, expertise: 0 });
      } else {
         setErrors({ ...errors, expertise: "" });
         setSkill({ ...skill, expertise: expertise });
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
            setSkill({ ...skill, [name]: data.data.url });
         } else {
            setErrors({ ...errors, [name]: "Image isn't uploaded" });
            setSkill({ ...skill, [name]: "" });
         }
      }
   };
   
   const handleSubmit: FormSubmitType =async (e) => {
       e.preventDefault(); 
       
       const res =await fetch(`${baseURL}skills`, {
         method: "post",
         headers: {
            "content-type": "application/json", 
         } , 
         body: JSON.stringify(skill)
       })

       const data = await res.json(); 
       if(data.acknowledged){
         console.log(data); 
         formRef?.current?.reset();
         setSkill({...skill, icon:""}); 
         navigate('/home#skills');
       }
   }

   console.table(skill);

   return (
      <div>
         <Headings content="Add skills"></Headings>
         <form onSubmit={handleSubmit} ref={formRef} className="grid grid-cols-1 px-3  my-10  md:px-16 gap-5 md:grid-cols-2 ">
            <InputBox
               type="text"
               name="technology"
               title="Technology"
               error={errors.name}
               onChange={handleName}
            ></InputBox>
            <InputBox
               type="number"
               name="percentage"
               title="expertise (%)"
               error={errors.expertise}
               onChange={handleExpertise}
            ></InputBox>
            <div className="flex md:col-span-2 flex-col gap-3 ">
               <label className="text-2xl text-accent" htmlFor="icon">
                  Icon
               </label>
               <ImageUpload
                  id="icon"
                  image={skill.icon}
                  error={errors.icon}
                  onChange={handleUpload}
               ></ImageUpload>
            </div>
            <div className="md:col-span-2">
               <SubmitButton
                  content="add skills"
                  disabled={!skill.name || !skill.icon || !skill.expertise}
               ></SubmitButton>
            </div>
         </form>
      </div>
   );
};

export default AddSkills;
