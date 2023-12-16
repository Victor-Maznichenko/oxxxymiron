import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tourReducer from '../reducers/tourReducer';
import trackReducer from '../reducers/trackReducer';
import newsReducer from '../reducers/newsReducer';

export const store = configureStore({
   reducer: {
      tour: tourReducer,
      track: trackReducer,
      news: newsReducer
   },
   devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();