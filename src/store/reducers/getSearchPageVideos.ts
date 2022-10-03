import{createAsyncThunk}from "@reduxjs/toolkit"
import { RootState } from ".."
import { youtube_api_url } from "../../utils/constants";
import axios from "axios"
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const getSearchPageVideos=createAsyncThunk("youtubeApp/searchPageVideos",async(isNext:boolean,{getState})=>{

    const {
        youtubeApp:{nextPageToken: nextPageTokenFromState, videos, searchTerm},

    }= getState() as RootState;

    const {
        data: { items, nextPageToken },
      } = await axios.get(
        `${youtube_api_url}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""
        }`
      )
    const parsedData:  HomePageVideos[] =await parseData(items);
    return{parsedData:[...videos,  ...parsedData],nextPageToken}
})