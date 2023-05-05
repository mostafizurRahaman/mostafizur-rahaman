const Loading = () => {
   return (
      <div className="bg-transparent flex items-center justify-center fixed top-0 left-0 h-screen w-full z-40">
         <div className="w-20 h-20 rounded-full border-8 bg-transparent border-y-secondary z-40 border-x-accent animate-spin "></div>
      </div>
   );
};

export default Loading;
