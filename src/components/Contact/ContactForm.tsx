import { useForm } from "react-hook-form";
import Headings from "../Shared/Headings";
import InputBox from "../Shared/InputBox";
import { ChangeEvent, useState } from "react";
import TextArea from "../Shared/TextArea";
import SubmitButton from "../Shared/SubmitButton";

interface formValue {
   name: string;
   phone: string;
   email: string;
   subject: string;
   message: string;
   general?: string;
}
type onChange = (e: ChangeEvent<HTMLInputElement>) => void;
type onChageText = (e: ChangeEvent<HTMLTextAreaElement>) => void;
const ContactForm = () => {
   const [formData, setFormData] = useState<formValue>({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
   });
   const [errors, setErrors] = useState<formValue>({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      general: "",
   });
   const { name, email, message, subject, phone } = formData;

   const handleName: onChange = (e) => {
      const name = e.target.value;
      if (name.length < 5) {
         setErrors({ ...errors, name: "Name must 5 character" });
         setFormData({ ...formData, name: "" });
      } else if (name === "") {
         setErrors({ ...errors, name: "Name should't empty" });
         setFormData({ ...formData, name: "" });
      } else {
         setErrors({ ...errors, name: "" });
         setFormData({ ...formData, name: name });
      }
   };

   const handleNumber: onChange = (e) => {
      const phone: string = e.target.value;
      if (phone === "") {
         setErrors({ ...errors, phone: "phone number should't be empty" });
         setFormData({ ...formData, phone: "" });
      } else if (!/^(((\+|00)?880)|0)(\d){10}$/.test(phone)) {
         setErrors({ ...errors, phone: "number should be valid" });
         setFormData({ ...formData, phone: "" });
      } else {
         setErrors({ ...errors, phone: "" });
         setFormData({ ...formData, phone: phone });
      }
   };

   const handleEmail: onChange = (e) => {
      const email: string = e.target.value;
      if (email === "") {
         setErrors({ ...errors, email: "email shouldn't be empty" });
         setFormData({ ...formData, email: "" });
      } else if (
         !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
      ) {
         setErrors({ ...errors, email: "email must be valid" });
         setFormData({ ...formData, email: "" });
      } else {
         setErrors({ ...errors, email: "" });
         setFormData({ ...formData, email: email });
      }
   };

   const handleSubject: onChange = (e) => {
      const subject = e.target.value;
      if (subject === "") {
         setErrors({ ...errors, subject: "subject should't be empty" });
         setFormData({ ...formData, subject: "" });
      } else if (subject.length < 10) {
         setErrors({ ...errors, subject: "subject must be 10 character" });
         setFormData({ ...formData, subject: "" });
      } else {
         setErrors({ ...errors, subject: "" });
         setFormData({ ...formData, subject: subject });
      }
   };

   const handleDescription: onChageText = (e) => {
      const message = e.target.value;
      if (message === "") {
         setErrors({ ...errors, message: "message shuldn't be empty" });
         setFormData({ ...formData, message: "" });
      } else if (message.length < 30) {
         setErrors({ ...errors, message: "message shuld be 30 character" });
         setFormData({ ...formData, message: "" });
      } else {
         setErrors({ ...errors, message: "" });
         setFormData({ ...formData, message: message });
      }
   };

   const onSubmit: () => void = () => {
      if (!name || !email || !message || !subject || !phone) {
         setErrors({ ...errors, general: "Please fill the form carefully" });
         return;
      }
      setErrors({ ...errors, general: "" });
      console.log(formData)
   };
   return (
      <section id="contact" className="bg-primary px-10 pb-10">
         <Headings content="Contact me"></Headings>
         <form onSubmit={onSubmit} className="w-full flex flex-col gap-5 mt-10">
            <div className="flex items-center gap-5 w-full justify-center">
               <InputBox
                  onChange={handleName}
                  title="Your name"
                  type="text"
                  error={errors.name}
                  name="name"
               ></InputBox>
               <InputBox
                  onChange={handleNumber}
                  title="Your Phone"
                  type="text"
                  error={errors.phone}
                  name="phone"
               ></InputBox>
            </div>
            <div className="flex flex-col gap-5">
               <InputBox
                  onChange={handleEmail}
                  title="Your email"
                  type="email"
                  error={errors.email}
                  name="email"
               ></InputBox>
               <InputBox
                  onChange={handleSubject}
                  title="Your Subject"
                  type="text"
                  error={errors.subject}
                  name="subject"
               ></InputBox>
               <TextArea
                  onChange={handleDescription}
                  title="Your Message"
                  name="message"
                  cols={10}
                  rows={5}
                  error={errors.message}
               ></TextArea>
               {errors?.general && (
                  <div className="my-3 flex items-center justify-center ">
                     <p className="py-2 px-3 text-white flex items-center justify-center text-xl  bg-secondary bg-opacity-50 rounded-lg w-1/2">{errors?.general}</p>
                  </div>
               )}
               <SubmitButton disabled={!name || !email || !message || !subject || !phone}
               
               ></SubmitButton>
            </div>
         </form>
      </section>
   );
};

export default ContactForm;
