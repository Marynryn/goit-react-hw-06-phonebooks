import { configureStore } from '@reduxjs/toolkit';
import { mySlice } from './mySlice';
import logger from 'redux-logger';
import { mySliceFilter } from './mySliceFilter';

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    myFilter: mySliceFilter.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
