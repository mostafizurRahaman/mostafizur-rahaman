interface Headings {
   content: string, 
}
const Headings = ({content}:Headings) => {
   return (
      <div className="flex items-center justify-center">
          <h2  className="text-5xl inline-block font-bold capitalize text-accent before:w-full before:h-[3px] before:block before:bg-accent before:absolute relative before:bottom-0 before:left-1/2  before:translate-x-[-50%] after:w-2/4 after:h-[5px]  after:block after:bg-secondary  after:absolute  after:bottom-[-1px]  after:left-1/2  after:translate-x-[-50%]  pb-2 ">{content}</h2>
      </div>
   );
};

export default Headings;