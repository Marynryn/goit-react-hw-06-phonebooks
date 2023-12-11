import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, mySlice.reducer);

export const { deleteContact, addContact } = mySlice.actions;
export const getContacts = state => state.myValue.contacts;
