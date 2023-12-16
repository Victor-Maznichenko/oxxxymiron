import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { trackCollectionQuery } from "../../utils/queries";
import { request } from "../../utils/common";

export interface ITrack {
   date: string,
   title: string,
   description: string,
   sys: {
      id: string
   },
   link: {
      url: string
   },
   cover: {
      url: string
   }
}

interface ITracksState {
   trackItems: Array<ITrack>,
   isLoading: boolean
}

const initialState: ITracksState = {
   trackItems: [],
   isLoading: false
}

export const getTracks = createAsyncThunk(
   // Название Action
   'tracks/getTracks',

   // Сам запрос
   async (_, thunkAPI) => {
      try {
         const data = await request(trackCollectionQuery);
         return data.trackCollection.items;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
)

const trackSlice = createSlice({
   name: "track",
   initialState,
   reducers: {},
   extraReducers: (builder) => (
      builder
         .addCase(getTracks.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTracks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.trackItems = action.payload;
         })
         .addCase(getTracks.rejected, (state) => {
            state.isLoading = false;
         })
   ),
})

export default trackSlice.reducer;