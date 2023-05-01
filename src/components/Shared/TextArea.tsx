import { ChangeEvent } from "react";

interface textAreaType {
   name: string;
   cols: number;
   rows: number;
   title: string;
   error: string;
   onChange: (event:ChangeEvent<HTMLTextAreaElement>) => void; 
}
import styles from './InputBox.module.css';

const TextArea = ({ name, cols, rows, title, error, onChange }: textAreaType) => {
   return (
      <div className="flex flex-col gap-3 ">
         <label className="text-xl font-semibold text-accent" htmlFor={name}>
            {title}
         </label>
         <textarea
            className={`w-full focus:border-2 focus:border-secondary bg-primary outline-none text-xl  font-bold text-secondary rounded-lg px-3 py-2 ${styles.input}`}
            name={name}
            id={name}
            cols={cols}
            rows={rows}
            onChange={onChange}
         ></textarea>
         <p className="text-secondary text-xl ps-5 capitalize mt-[-12px]">{error && error}</p>
      </div>
   );
};

export default TextArea;
