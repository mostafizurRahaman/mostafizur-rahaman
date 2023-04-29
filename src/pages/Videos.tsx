import { useEffect, useState } from "react";

const Videos = () => {
   const [videos, setVideos] = useState<[]>([]);
   const [videos1, setVideos1] = useState<[]>([]);
   useEffect(() => {
      fetch(
         `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${import.meta.env.VITE_WEB_PLAYLIST_ID}&key=${
            import.meta.env.VITE_YOUTUBE_API
         }`
      )
         .then((res) => res.json())
         .then((data) => {
            const items = data?.items?.map(
               (i: any) => i?.contentDetails?.videoId
            );
            setVideos(items);
         })
         .catch((err) => console.log(err));
   }, []);
   useEffect(() => {
      fetch(
         `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${import.meta.env.VITE_WEB_PLAYLIST_ID1}&key=${
            import.meta.env.VITE_YOUTUBE_API
         }`
      )
         .then((res) => res.json())
         .then((data) => {
            const items = data?.items?.map(
               (i: any) => i?.contentDetails?.videoId
            );
            setVideos1(items);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div>
         <h2 className="text-5xl font-bold mt-5 text-center text-secondary  ">
            Web Development Tutorials
         </h2>
         <div className="grid  grid-cols-3 gap-5 items-center justify-center p-10">
            {videos?.map((i: any) => (
               <div key={i.id}>
                  <iframe
                     className=" w-full h-52"
                     src={`https://www.youtube.com/embed/${i}`}
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               </div>
            ))}
         </div>
         <h2 className="text-5xl font-bold mt-5 text-center text-secondary  ">
            ALL Tutorials
         </h2>
         <div className="grid  grid-cols-3 gap-5 items-center justify-center p-10">
            {videos1?.map((i: any) => (
               <div key={i.id}>
                  <iframe
                     className=" w-full h-52"
                     src={`https://www.youtube.com/embed/${i}`}
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowFullScreen
                  ></iframe>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Videos;
