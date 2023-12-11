import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { mySliceFilter } from './mySliceFilter';
import { persistedReducer } from './mySlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    myValue: persistedReducer,
    myFilter: mySliceFilter.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
});

export const persistor = persistStore(store);
