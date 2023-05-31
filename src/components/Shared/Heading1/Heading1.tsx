

interface headingType {
   title: string; 
}
const Heading1 =({title}: headingType)  => {
   return (
      <div className="flex items-center justify-center">
         <h3 className="text-2xl font-bold  text-seondary  border-b-2 border-white my-5 pb-1 text-white uppercase">{title}</h3>
      </div>
   );
};``

export default Heading1;