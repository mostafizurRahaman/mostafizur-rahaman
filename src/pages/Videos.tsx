import { useEffect, useState } from "react";

const Videos = () => {
   const [videos, setVideos] = useState<[]>([]); 
   useEffect(()=>{
      fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=PLLjCbrZUimdATFww5IyNHk6w97-uchAQG&key=AIzaSyBkP3OVphXeugqJ9xNl6rVFApSKzf8Wvhk`)
      .then(res => res.json())
      .then(data => {
       const items = data?.items?.map( (i:any)  =>  i?.contentDetails?.videoId ); 
       setVideos(items); 
      })
      .catch(err =>console.log(err)); 
   }, [])
   console.log(videos);
   return (
      <div className="grid  grid-cols-3 gap-5 items-center justify-center p-10">
         {
            videos?.map((i:any) => <div key={i.id} >
                  <iframe  className=" w-full h-52" src={`https://www.youtube.com/embed/${i}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div> )
         }
      </div>
   );
};

export default Videos;


