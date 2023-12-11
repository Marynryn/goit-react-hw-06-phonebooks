import { createSlice } from '@reduxjs/toolkit';

export const mySliceFilter = createSlice({
  name: 'myFilter',
  initialState: { filter: '' },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addFilter } = mySliceFilter.actions;
export const getFilter = state => state.myFilter.filter;
