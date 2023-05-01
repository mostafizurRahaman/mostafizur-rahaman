import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Headings from "../components/Shared/Headings";

const FullVideos = () => {
   const [videos, setVideos] = useState<[]>([]);

   useEffect(() => {
      fetch(
         `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${
            import.meta.env.VITE_WEB_PLAYLIST_ID1
         }&key=${import.meta.env.VITE_YOUTUBE_API}`
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
   return (
      <div className="bg-info pt-5">
         <Headings content="Web Development Tutorials"></Headings>
         <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center p-10">
            {videos?.map((i: any) => (
               <div className="p-2 rounded-lg border border-white ">
                  <ReactPlayer
                     className="react-player"
                     width="100%"
                     height="220px"
                     key={i.id}
                     url={`https://www.youtube.com/watch?v=${i}`}
                     controls={true}
                     volume={1}
                     loop={false}
                     lazy={true}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default FullVideos;
