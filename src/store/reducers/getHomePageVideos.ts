import{createAsyncThunk}from "@reduxjs/toolkit"
import { RootState } from ".."
import { youtube_api_url } from "../../utils/constants";
import axios from "axios"
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const getHomePageVideos=createAsyncThunk("youtubeApp/homePageVidoes",async(isNext:boolean,{getState})=>{

    const {
        youtubeApp:{nextPageToken: nextPageTokenFromState, videos},

    }= getState() as RootState;

    const {data:{items,nextPageToken}}= await axios.get(`${youtube_api_url}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`);
    
    const parsedData:  HomePageVideos[] =await parseData(items);
    return{parsedData:[...videos,  ...parsedData],nextPageToken}
})