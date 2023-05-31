import { ChangeEvent } from "react";

interface InputType {
   name: string;
   error: string;
   title: string;
   min?: string;
   max?: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
   disabled: boolean; 
}
import styles from "./InputBox.module.css";

const InputDate = ({ name, error, title, onChange, min, max, disabled }: InputType) => {
   return (
      <div className="flex flex-col gap-3 w-full">
         <label
            className="text-xl   font-bold capitalize text-accent"
            htmlFor={name}
         >
            {title}
         </label>
         <input
            className={`text-xl bg-primary outline-none focus:border-2 focus:text-secondary focus:border-secondary autofill:bg-primary autofill:text-secondary w-full font-semibold text-secondary py-2 px-3  rounded-lg ${styles.input} ${disabled === true && "bg-blue-300 cursor-not-allowed"}`}
            type="date"
            name={name}
            id={name}
            required
            onChange={onChange}
            min={min && min}
            max={max && max}
            disabled={disabled}
         />
         <p className="text-secondary text-xl ps-5  mt-[-12px]">
            {error && error}
         </p>
      </div>
   );
};

export default InputDate;
