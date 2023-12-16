import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newsItemCollectionQuery } from "../../utils/queries";
import { request } from "../../utils/common";

export interface INewsItem {
   sys: {
      id: string
   },
   title: string,
   cover: {
      url: string
   }
}

interface INewsState {
   newsItems: Array<INewsItem>,
   isLoading: boolean
}

const initialState: INewsState = {
   newsItems: [],
   isLoading: true
}

export const getNewsItems = createAsyncThunk(
   'news/getNewsItems',
   async (_, thunkAPI) => {
      try {
         const data = await request(newsItemCollectionQuery);
         return data.newsItemCollection.items;
      } catch (error) {
         thunkAPI.rejectWithValue(error);
      }
   }
)

const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(getNewsItems.pending, state => {
            state.isLoading = true;
         })
         .addCase(getNewsItems.fulfilled, (state, { payload }) => {
            state.newsItems = payload;
            state.isLoading = false;
         })
         .addCase(getNewsItems.rejected, state => {
            state.isLoading = true;
         })
   },
})

export default newsSlice.reducer;