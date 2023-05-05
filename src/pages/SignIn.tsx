import Headings from "../components/Shared/Headings";
import InputBox from "../components/Shared/InputBox";
import { useState, useRef, useContext } from "react";
import { ChangeTypeInput } from "../configs/Type";
import SubmitButton from "../components/Shared/SubmitButton";
import signUp from "../assets/signup.png";
import { FormSubmitType } from "../configs/Type";
import { useToken } from "../hooks/useToken";
import {
   useLocation,
   Location,
   useNavigate,
   NavigateFunction,
} from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { User } from "firebase/auth";
interface formDataType {
   email: string;
   password: string;
   general?: string;
}
const SignIn = () => {
   const [formData, setFormData] = useState<formDataType>({
      email: "",
      password: "",
   });
   const [errors, setErrors] = useState<formDataType>({
      email: "",
      password: "",
      general: "",
   });
   const [loading, setLoading] = useState<boolean>(false);
   const [createdEmail, setCreatedEmail] = useState<string>("");
   const { token } = useToken(createdEmail);
   const location: Location = useLocation();
   const from = location?.state?.from?.pathname || "/";
   const navigate: NavigateFunction = useNavigate();
   const { LogIn } = useContext(AuthContext);
   const formRef = useRef(null);
   if (token) {
      navigate(from, { replace: true });
   }

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
      }
   };

   if (loading) {
      return (
         <div className=" fixed top-0 left-0 bg-transparent w-[100%] h-screen ">
            <div className="w-10 h-10 border-5 animate-spin border-y-secondary border-x-accent absolute"></div>
         </div>
      );
   }

   const onSubmit: FormSubmitType = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         LogIn(formData.email, formData.password).then((res) => {
            const user: User = res.user;
            user.email && setCreatedEmail(user?.email);
            setLoading(false);
         });
      } catch (err: any) {
         console.log(err);
      }
   };

   return (
      <section className="bg-primary px-10">
         <Headings content="sign in"></Headings>
         <div className="flex items-center lg:flex-row flex-col   gap-5 py-20">
            <div className=" w-full lg:w-1/2 flex items-center justify-center">
               <img className="w-[80%]" src={signUp} alt="" />
            </div>
            <form
               ref={formRef}
               onSubmit={onSubmit}
               className="grid grid-cols-1 gap-3 w-full lg:w-1/2 p-5 rounded-lg border-dashed border-2 border-secondary  "
            >
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
                  title="Your password"
                  error={errors.password}
                  onChange={handlePassword}
               ></InputBox>
               <SubmitButton
                  disabled={!formData.email || !formData?.password}
                  content="Sign In"
               ></SubmitButton>
            </form>
         </div>
      </section>
   );
};

export default SignIn;
