import { ChangeEvent, useRef, useState } from "react";
import InputBox from "../../Shared/InputBox";
import {
   ChangeTypeInput,
   ChangeTypeTextArea,
   FormSubmitType,
   ProjectErrorType,
   projectCardType,
} from "../../../configs/Type";
import Headings from "../../Shared/Headings";
import TextArea from "../../Shared/TextArea";
import ImageUpload from "../../ImageUpload/imageUpload";
import SubmitButton from "../../Shared/SubmitButton";
import styles from "../Profile/Profile.module.css";
import { useNavigate, NavigateFunction} from "react-router-dom";
import { baseURL } from "../../../configs/configs";

const AddProjects = () => {
   const [technology, setTechnology] = useState<string[]>([]);
   const formRef = useRef<HTMLFormElement>(null);
   const navigate: NavigateFunction= useNavigate(); 

   const [project, setProject] = useState<projectCardType>({
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
      feature1: "",
      feature2: "",
      feature3: "",
      feature4: "",
      features: [],
   });
   const [errors, setErrors] = useState<ProjectErrorType>({
      name: "",
      subTitle: "",
      client: "",
      server: "",
      live: "",
      summery: "",
      description: "",
      technology: "",
      thumbnail: "",
      image1: "",
      image2: "",
      image3: "",
      feature1: "",
      feature2: "",
      feature3: "",
      feature4: "",
   });

   const technology1: string[] = [
      "html",
      "css",
      "bootstrap",
      "tailwind css",
      "javaScript",
      "ES6",
      "React",
      "Express",
      "Node Js",
      "Google Firebase",
      "typescript",
      "next js",
      "redux",
      "mongoDB",
   ];
   const handleName: ChangeTypeInput = (e) => {
      const name: string = e.target.value;
      if (name.length <= 0) {
         setErrors({ ...errors, name: "name shouldn't be empty " });
         setProject({ ...project, name: "" });
      } else {
         setErrors({ ...errors, name: "" });
         setProject({ ...project, name: name });
      }
   };
   const hanldeSubTitle: ChangeTypeInput = (e) => {
      const subTitle: string = e.target.value;
      if (subTitle === "") {
         setErrors({ ...errors, subTitle: "subtitle shouldn't be empty " });
         setProject({ ...project, subTitle: "" });
      } else {
         setErrors({ ...errors, subTitle: "" });
         setProject({ ...project, subTitle: subTitle });
      }
   };

   const handleURL: ChangeTypeInput = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      console.log(value, name);
      if (value.length < 0) {
         setErrors({ ...errors, [name]: "link should't be empty" });
         setProject({ ...project, [name]: "" });
      } else if (
         !/\b(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9\-]+(?:\.[a-z]{2,}){1,3}(?:\/[^\s]*)?\b/.test(
            value
         )
      ) {
         setErrors({ ...errors, [name]: "link must be valid" });
         setProject({ ...project, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setProject({ ...project, [name]: value });
      }
   };

   const handleSummery: ChangeTypeTextArea = (e) => {
      const summery: string = e.target.value;
      if (summery === "") {
         setErrors({ ...errors, summery: "summery shouldn't be empty" });
         setProject({ ...project, summery: "" });
      } else if (summery.length < 100) {
         setErrors({ ...errors, summery: "summery must be 100 character" });
         setProject({ ...project, summery: "" });
      } else {
         setErrors({ ...errors, summery: "" });
         setProject({ ...project, summery: summery });
      }
   };
   const handleDescription: ChangeTypeTextArea = (e) => {
      const description: string = e.target.value;
      if (description === "") {
         setErrors({
            ...errors,
            description: "description shouldn't be empty",
         });
         setProject({ ...project, description: "" });
      } else if (description.length < 100) {
         setErrors({
            ...errors,
            description: "description must be 100 character",
         });
         setProject({ ...project, description: "" });
      } else {
         setErrors({ ...errors, description: "" });
         setProject({ ...project, description: description });
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
            setProject({ ...project, [name]: data.data.url });
         } else {
            setErrors({ ...errors, [name]: "Image isn't uploaded" });
            setProject({ ...project, [name]: "" });
         }
      }
   };

   const saveTechnology = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      let newTech = [];
      if (technology.indexOf(value) === -1) {
         newTech = [...technology, value];
      } else {
         newTech = technology.filter((i: string) => i !== value);
      }

      setTechnology(newTech);
      project.technology = newTech;
   };

   const handleFeatures: ChangeTypeInput = (e) => {
      const name: string = e.target.name;
      const value: string = e.target.value;
      if (value.length < 50) {
         setErrors({ ...errors, [name]: "feature lenth must be 50 character" });
         setProject({ ...project, [name]: "" });
      } else {
         setErrors({ ...errors, [name]: "" });
         setProject({ ...project, [name]: value });
      }
   };

   const handleSubmit: FormSubmitType = async (e) => {
      e.preventDefault();
      const { feature1, feature2, feature3, feature4 } = project;
      console.log(feature1, feature2, feature3, feature4);
      if (feature1 && feature2 && feature3 && feature4) {
         setProject({
            ...project,
            features: [feature1, feature2, feature3, feature4],
         });

         if (project.features.length === 4) {
            const res = await fetch(`${baseURL}projects`, {
               method: "post",
               headers: {
                  "content-type": "application/json",
                  authorization: `bearer ${localStorage.getItem('token')}`,
               },
               body: JSON.stringify(project),
            });

            const data = await res.json();
            if (data.acknowledged === true) {
               setProject({
                  ...project,
                  image1: "",
                  image2: "",
                  image3: "",
                  thumbnail:"",
                  technology: [],
               });
               formRef.current?.reset();
               console.log("after add", project);
               navigate('/home')
            }
         }
      }
   };


   
   return (
      <div>
         <div>
            <Headings content="Add Your Poject"></Headings>
            <form
               onSubmit={handleSubmit}
               ref={formRef}
               className="grid md:grid-cols-2 grid-cols-1 px-3 md:px-10 gap-5 mt-5"
            >
               <InputBox
                  type="text"
                  name="name"
                  error={errors.name}
                  title="Project Name"
                  onChange={handleName}
               ></InputBox>
               <InputBox
                  type="text"
                  name="subtitle"
                  error={errors.subTitle}
                  title="sub Title"
                  onChange={hanldeSubTitle}
               ></InputBox>
               <InputBox
                  type="text"
                  name="client"
                  error={errors.client}
                  title="Client Side Link"
                  onChange={handleURL}
               ></InputBox>
               <InputBox
                  type="text"
                  name="server"
                  error={errors.server}
                  title="Server Side Link"
                  onChange={handleURL}
               ></InputBox>
               <div className="md:col-span-2">
                  <InputBox
                     type="text"
                     name="live"
                     error={errors.live}
                     title="Live Link"
                     onChange={handleURL}
                  ></InputBox>
               </div>
               <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:col-span-2">
                  <InputBox
                     type="text"
                     name="feature1"
                     title={`feature 1`}
                     error={errors?.feature1 && errors?.feature1}
                     onChange={handleFeatures}
                  ></InputBox>
                  <InputBox
                     type="text"
                     name="feature2"
                     title={`feature 2`}
                     error={errors?.feature2 && errors?.feature2}
                     onChange={handleFeatures}
                  ></InputBox>
                  <InputBox
                     type="text"
                     name="feature3"
                     title={`feature 3`}
                     error={errors?.feature3 && errors?.feature3}
                     onChange={handleFeatures}
                  ></InputBox>
                  <InputBox
                     type="text"
                     name="feature4"
                     title={`feature 4`}
                     error={errors?.feature4 && errors?.feature4}
                     onChange={handleFeatures}
                  ></InputBox>
               </div>
               <TextArea
                  name="summery"
                  title="Project Summery"
                  cols={5}
                  rows={5}
                  error={errors.summery}
                  onChange={handleSummery}
               ></TextArea>
               <TextArea
                  name="description"
                  title="Project Details"
                  cols={5}
                  rows={5}
                  error={errors?.description}
                  onChange={handleDescription}
               ></TextArea>
               <div className="flex flex-col gap-3">
                  <label
                     className="text-xl font-bold text-accent"
                     htmlFor="thumbnail"
                  >
                     Thumbnail
                  </label>
                  <ImageUpload
                     id="thumbnail"
                     error={errors?.thumbnail}
                     image={project.thumbnail}
                     onChange={handleUpload}
                  ></ImageUpload>
               </div>
               <div className="flex flex-col gap-3">
                  <label
                     className="text-xl font-bold text-accent"
                     htmlFor="image1"
                  >
                     Image 1
                  </label>
                  <ImageUpload
                     id="image1"
                     error={errors?.image1}
                     image={project.image1}
                     onChange={handleUpload}
                  ></ImageUpload>
               </div>
               <div className="flex flex-col gap-3">
                  <label
                     className="text-xl font-bold text-accent"
                     htmlFor="image2"
                  >
                     Image 2
                  </label>
                  <ImageUpload
                     id="image2"
                     error={errors?.image2}
                     image={project.image2}
                     onChange={handleUpload}
                  ></ImageUpload>
               </div>
               <div className="flex flex-col gap-3">
                  <label
                     className="text-xl font-bold text-accent"
                     htmlFor="image1"
                  >
                     Image 3
                  </label>
                  <ImageUpload
                     id="image3"
                     error={errors?.image3}
                     image={project.image3}
                     onChange={handleUpload}
                  ></ImageUpload>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-1 justify-start md:col-span-2">
                  {technology1.map((i: string, idx: number) => (
                     <div
                        key={idx}
                        className={` text-lg md:text-xl  capitalize flex items-center gap-2 pl-2 rounded-lg bg-priamry   justify-start hover:text-secondary  text-white w-36 md:w-40  ${styles.card}`}
                     >
                        <input
                           type="checkbox"
                           checked={technology.includes(i) ? true : false}
                           value={i}
                           name="technology"
                           id={`tech${idx}`}
                           onChange={saveTechnology}
                        />
                        <label className="w-full" htmlFor={`tech${idx}`}>
                           {i}
                        </label>
                     </div>
                  ))}
               </div>
               <div className="md:col-span-2">
                  <SubmitButton
                     disabled={
                        !project?.name ||
                        !project?.subTitle ||
                        !project?.client ||
                        !project?.live ||
                        !project?.server ||
                        !project?.summery ||
                        !project?.description ||
                        !project?.image1 ||
                        !project?.image2 ||
                        !project?.image3 ||
                        !(project?.technology.length >= 5) ||
                        !project.feature1 ||
                        !project.feature2 ||
                        !project.feature3 ||
                        !project.feature4
                     }
                     content="Add Project"
                  ></SubmitButton>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddProjects;
