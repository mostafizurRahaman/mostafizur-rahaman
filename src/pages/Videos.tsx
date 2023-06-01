import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Headings from "../components/Shared/Headings";
interface video {
   kind: string;
   etag: string;
   id: string;
   snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails?: {
         title?: string;
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
         kind: string;
         videoId: string;
      };
   };
   contentDetails: {
      videoId: string;
   };
}

const Videos = () => {
   const [videos, setVideos] = useState<video[]>([]);

   useEffect(() => {
      loadVideos();
   }, []);

   const loadVideos: () => void = async () => {
      try {
         const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${
               import.meta.env.VITE_WEB_PLAYLIST_ID
            }&key=${import.meta.env.VITE_YOUTUBE_API}`
         );
         const data = await res.json();
         const videos: video[] = await data.items.filter(
            (i: video) => i.snippet.title !== 'Deleted video' && i.snippet.title !== "Private video"
         );

         setVideos(videos);
      } catch (err) {
         console.log(err);
      }
   };
   console.log(videos);
   return (
      <div className="bg-info pt-5">
         <Headings content="Web Development Tutorials"></Headings>
         <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center p-5">
            {videos?.map((i: video, idx: number) => (
               <div key={idx} className="p-2 rounded-lg border border-white ">
                  <ReactPlayer
                     className="react-player"
                     width="100%"
                     height="220px"
                     url={`https://www.youtube.com/watch?v=${i.contentDetails.videoId}`}
                     controls={true}
                     volume={1}
                     loop={false}
                  />
                  <h3 className=" capitalize font-bold text-xl text-white p-1 ">
                     {i?.snippet?.title.slice(0,81)}
                  </h3>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Videos;
