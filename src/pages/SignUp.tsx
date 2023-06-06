import { useState, useRef, useContext } from "react";
import Headings from "../components/Shared/Headings";
import InputBox from "../components/Shared/InputBox";
import { ChangeTypeInput } from "../configs/Type";
import signup from "../assets/signup.png";
import ImageUpload from "./../components/ImageUpload/imageUpload";
import SubmitButton from "../components/Shared/SubmitButton";
import { FormSubmitType } from "../configs/Type";
import CheckBox from "../components/Shared/Checkbox/CheckBox";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useToken } from "../hooks/useToken";
import Loading from "../components/Shared/Loading/Loading";
import { baseURL } from "../configs/configs";
interface formData {
   firstName: string;
   lastName: string;
   phone: string;
   email: string;
   password: string;
   confirm: string;
   image: string;
   date?: string;
   general?: string;
}

interface singupUser {
   firstName: string;
   lastName: string;
   phone: string;
   email: string;
   image: string;
   date: string;
}

const SignUp = () => {
   const { createUser, AddInfoProfile } = useContext(AuthContext);
   const navigate: NavigateFunction = useNavigate();
   const [loading, setLoading] = useState<boolean>(false);
   const [formData, setFormData] = useState<formData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      image: "",
   });
   const [errors, setErrors] = useState<formData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      image: "",
      general: "",
   });
   const [createdEmail, setCreatedEmail] = useState<string>("");
   const { token, tokenLoading } = useToken(createdEmail);
   const formRef = useRef(null);
   const [checked, setChecked] = useState<boolean>(false);
   const { firstName, lastName, email, phone, password, confirm, image } =
      formData;

   if (token) {
      navigate("/home");
   }

   if (loading) {
      return <Loading></Loading>;
   }
   const handleFirstName: ChangeTypeInput = (e) => {
      const firstName: string = e.target.value;
      if (firstName.length === 0) {
         setErrors({ ...errors, firstName: "first name shuldn't be empty" });
         setFormData({ ...formData, firstName: "" });
      } else {
         setErrors({ ...errors, firstName: "" });
         setFormData({ ...formData, firstName: firstName });
      }
   };
   const handleLastName: ChangeTypeInput = (e) => {
      const lastName: string = e.target.value;
      if (lastName.length === 0) {
         setErrors({ ...errors, lastName: "last name shuldn't be empty" });
         setFormData({ ...formData, lastName: "" });
      } else {
         setErrors({ ...errors, lastName: "" });
         setFormData({ ...formData, lastName: lastName });
      }
   };
   const handlePhone: ChangeTypeInput = (e) => {
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
   const handleEmail: ChangeTypeInput = (e) => {
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
   const handlePassword: ChangeTypeInput = (e) => {
      const password = e.target.value;
      if (password === "") {
         setErrors({ ...errors, password: "password shouldn't be empty" });
         setFormData({ ...formData, password: "" });
      } else if (password.length < 8) {
         setErrors({ ...errors, password: "password must be 8 character" });
         setFormData({ ...formData, password: "" });
      } else if (!/[A-Z]/.test(password)) {
         setErrors({ ...errors, password: "must have uppercase character" });
         setFormData({ ...formData, password: "" });
      } else if (!/[a-z]/.test(password)) {
         setErrors({ ...errors, password: "must have lowercase character" });
         setFormData({ ...formData, password: "" });
      } else if (!/[0-9]/.test(password)) {
         setErrors({ ...errors, password: "must have number character" });
         setFormData({ ...formData, password: "" });
      } else if (!/[~!#@$^%&*]/.test(password)) {
         setErrors({ ...errors, password: "must have special character" });
         setFormData({ ...formData, password: "" });
      } else {
         setErrors({ ...errors, password: "" });
         setFormData({ ...formData, password: password });
         if (formData.confirm) {
            if (confirm !== password) {
               setErrors({ ...errors, confirm: "password don't match" });
               setFormData({ ...formData, confirm: "" });
            } else {
               setErrors({ ...errors, confirm: "" });
               setFormData({ ...formData, confirm: confirm });
            }
         }
      }
   };
   const handleConfirm: ChangeTypeInput = (e) => {
      const confirm = e.target.value;
      if (confirm === "") {
         setErrors({ ...errors, confirm: "password shouldn't be empty" });
         setFormData({ ...formData, confirm: "" });
      } else if (confirm.length < 8) {
         setErrors({ ...errors, confirm: "password must be 8 character" });
         setFormData({ ...formData, confirm: "" });
      } else if (!/[A-Z]/.test(confirm)) {
         setErrors({ ...errors, confirm: "must have uppercase character" });
         setFormData({ ...formData, confirm: "" });
      } else if (!/[a-z]/.test(confirm)) {
         setErrors({ ...errors, confirm: "must have lowercase character" });
         setFormData({ ...formData, confirm: "" });
      } else if (!/[0-9]/.test(confirm)) {
         setErrors({ ...errors, confirm: "must have number character" });
         setFormData({ ...formData, confirm: "" });
      } else if (!/[~!#@$^%&*]/.test(confirm)) {
         setErrors({ ...errors, confirm: "must have special character" });
         setFormData({ ...formData, confirm: "" });
      } else {
         setErrors({ ...errors, confirm: "" });
         setFormData({ ...formData, confirm: confirm });

         if (formData.password) {
            if (confirm !== password) {
               setErrors({ ...errors, confirm: "password don't match" });
               setFormData({ ...formData, confirm: "" });
            } else {
               setErrors({ ...errors, confirm: "" });
               setFormData({ ...formData, confirm: confirm });
            }
         }
      }
   };
   const handleUploadImage: ChangeTypeInput = async (e) => {
      console.log(e.target.files);
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
            setErrors({ ...errors, image: "" });
            setFormData({ ...formData, image: data.data.url });
            console.log(data.data.url);
         } else {
            setErrors({ ...errors, image: "Image isn't uploaded" });
            setFormData({ ...formData, image: "" });
         }
      }
   };

   const saveUser = async () => {
      const date: Date = new Date();
      const time: string = date.toISOString();
      console.log(time);
      const newUser: singupUser = {
         firstName,
         lastName,
         image,
         phone,
         email,
         date: time,
      };

      try {
         const res = await fetch(
            `${baseURL}users`,
            {
               method: "post",
               headers: {
                  "content-type": "application/json",
                  authorization:`bearer ${localStorage.getItem('token')}`
               },
               body: JSON.stringify(newUser),
            }
         );

         const data = await res.json();
         if (data.acknowledged === true) {
            setCreatedEmail(email);
            setLoading(false);
         }
      } catch (err: any) {
         console.log(err);
      } finally {
         setLoading(false);
      }
   };

   // Form Submission:
   const onSubmit: FormSubmitType = (e) => {
      setLoading(true);
      e.preventDefault();
      createUser(email, password)
         .then((data) => {
            if (data?.user?.uid) {
               AddInfoProfile({
                  displayName: `${firstName} ${lastName}`,
                  phoneNumber: phone,
                  photoURL: image,
               });
               saveUser();
               setLoading(false);
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <section className="py-10 px-5 md:px-10 bg-primary  ">
         <Headings content="Sign Up"></Headings>
         <div className="flex items-center lg:flex-row flex-col   gap-5 my-10">
            <div className=" w-full lg:w-1/2 flex items-center justify-center">
               <img className="w-[80%]" src={signup} alt="" />
            </div>
            <form
               ref={formRef}
               onSubmit={onSubmit}
               className="grid grid-cols-1 md:grid-cols-2  gap-5 w-full lg:w-1/2 p-5 rounded-lg border-dashed border-2 border-secondary  "
            >
               <InputBox
                  type="text"
                  name="firstName"
                  title="First Name"
                  error={errors.firstName}
                  onChange={handleFirstName}
               ></InputBox>
               <InputBox
                  type="text"
                  name="lastName"
                  title="Last Name"
                  error={errors.lastName}
                  onChange={handleLastName}
               ></InputBox>
               <InputBox
                  type="text"
                  name="phone"
                  title="Your Phone"
                  error={errors.phone}
                  onChange={handlePhone}
               ></InputBox>
               <InputBox
                  type="email"
                  name="email"
                  title="Your Email"
                  error={errors.email}
                  onChange={handleEmail}
               ></InputBox>
               <InputBox
                  type="password"
                  name="password"
                  title="Password"
                  error={errors.password}
                  onChange={handlePassword}
               ></InputBox>
               <InputBox
                  type="password"
                  name="confirm"
                  title="confirm"
                  error={errors.confirm}
                  onChange={handleConfirm}
               ></InputBox>
               <div className="md:col-span-2">
                  <ImageUpload
                     id="myImage"
                     onChange={handleUploadImage}
                     image={formData.image}
                     error={errors.image}
                  ></ImageUpload>
               </div>
               <div className=" md:col-span-2 flex items-center justify-center flex-col ">
                  <CheckBox checked={checked} setChecked={setChecked}>
                     <p className="flex text-xl text-accent  items-center justify-center gap-2 capitalize  ">
                        agree with our{" "}
                        <Link
                           className="text-secondary"
                           to="/terms-&-services "
                        >
                           terms & services{" "}
                        </Link>
                     </p>
                  </CheckBox>
                  <SubmitButton
                     disabled={
                        !firstName ||
                        !lastName ||
                        !phone ||
                        !email ||
                        !password ||
                        !confirm ||
                        !image ||
                        !checked
                     }
                     content="sign up"
                  ></SubmitButton>
               </div>
            </form>
         </div>
      </section>
   );
};

export default SignUp;
