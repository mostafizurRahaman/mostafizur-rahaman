import { ChangeEvent } from "react";

interface InputType {
   type: string;
   name: string;
   error: string;
   title: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
import styles from './InputBox.module.css'; 

const InputBox = ({ type, name, error, title, onChange }: InputType) => {
   return (
      <div className="flex flex-col gap-3 w-full">
         <label className="text-xl  font-bold capitalize text-accent" htmlFor={name}>
            {title}
         </label>
         <input
            className={`text-xl bg-primary outline-none focus:border-2 focus:text-secondary focus:border-secondary autofill:bg-primary autofill:text-secondary w-full font-semibold text-secondary py-2 px-3  rounded-lg ${styles.input}`}
            type={type}
            name={name}
            id={name}
            required
            onChange={onChange}
         />
         <p className="text-secondary text-xl ps-5 capitalize mt-[-12px]">{error && error}</p>
      </div>
   );
};

export default InputBox;
