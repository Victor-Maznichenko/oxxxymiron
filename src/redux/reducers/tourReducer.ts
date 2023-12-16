import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { request } from "../../utils/common"
import { tourItemCollectionQuery } from "../../utils/queries"

interface tourItem {
   date: number,
   place: string,
   city: string,
   country: string,
   sys: {
      id: string
   }
}

export type TourListType = Array<tourItem>;

interface ITourState {
   tourList: TourListType
   isLoading: boolean
}

// Начальные данные для State
const initialState: ITourState = {
   tourList: [],
   isLoading: false
}

export const getTourItems = createAsyncThunk(
   // Название Action
   "tourItems/getTourItems",

   // Сам запрос  
   async (_, thunkAPI) => {
      try {
         const data = await request(tourItemCollectionQuery);
         return data.tourItemCollection.items;
      } catch (err) {
         return thunkAPI.rejectWithValue(err);
      }
   }
);

const tourSlice = createSlice({
   name: 'tour',
   initialState,

   // Внутри reducers данные не беруться с сервера используется только хранилище редакс.
   reducers: {},

   // Внутри extraReducers мы можем работать с сервером.
   extraReducers: (builder) => {
      builder
         .addCase(getTourItems.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTourItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tourList = action.payload;
         })
         .addCase(getTourItems.rejected, (state) => {
            state.isLoading = false;
         });
   }
});

export default tourSlice.reducer;