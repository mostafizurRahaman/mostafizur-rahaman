import styles from "./InputBox.module.css";

interface Buttontype {
   disabled: boolean;
}

const SubmitButton = ({disabled}:Buttontype) => {
   return (
      <div className="flex items-center justify-center py-5">
         <button
            className={`px-5 py-2 bg-primary text-white hover:text-secondary rounded-lg  text-2xl duration-500 font-semibold  ${styles.button}`}
            disabled={disabled}
         >
            Send Message
         </button>
      </div>
   );
};

export default SubmitButton;
