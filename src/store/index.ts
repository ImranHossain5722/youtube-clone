import { createSlice, configureStore ,PayloadAction} from "@reduxjs/toolkit";
import { stat } from "fs";
import { InitialState } from "../Types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";
// import { parseData } from "../../utils";

const initialState:InitialState ={
    videos:[],
    currentPlaying:null,
    searchTerm: "",
    searchResults: [],
    nextPageToken:null,
    recommendedVideos:[], 
}

const youtubeSlice = createSlice({
name:"youtubeApp",
initialState,
reducers:{},
extraReducers:(builder)=>{
    builder.addCase(getHomePageVideos.fulfilled, (state,action)=>{
        state.videos=action.payload.parsedData;
        state.nextPageToken=action.payload.nextPageToken;

    })
},

})

export const store = configureStore({
    reducer:{
        youtubeApp: youtubeSlice.reducer,
    }
})
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch =typeof store.dispatch;