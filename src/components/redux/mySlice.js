import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
  name: 'myValue',
  initialState: {
    contacts: [],
  },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});
export const { deleteContact, addContact } = mySlice.actions;
