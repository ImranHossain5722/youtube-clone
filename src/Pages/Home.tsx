import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state)=>state.youtubeApp.videos )
    
    useEffect(()=>{

        dispatch(getHomePageVideos(false))
        console.log(videos)
    },[dispatch])
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{height:"7.5hv"}} >
        <Navbar />
      </div>
      <div className="flex " style={{height:"92.5vh"}}>
       <Sidebar/>
      </div>
    </div>
  );
};

export default Home;
