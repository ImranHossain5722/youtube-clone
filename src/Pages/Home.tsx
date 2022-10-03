import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Spinner from "../Components/Spinner";
import { clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";

const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state)=>state?.youtubeApp?.videos )
    
    useEffect(()=>{
      return()=> {
        dispatch(clearVideos())
      };
    },[dispatch])

    // data load 
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
       {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
    
      </div>
    </div>
  );
};

export default Home;
