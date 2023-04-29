import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => {
   return (
      <AnimatedCursor
         color="255,255,255"
         innerSize={8}
         outerSize={35}
         innerScale={1}
         outerScale={1.7}
         hasBlendMode={true}
         outerAlpha={0}
         outerStyle={{
            border: "3px solid #fff",
         }}
      />
   );
};

export default Cursor;
