import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { favoriteReducer } from './favorite/slice';
import { basketReducer } from './basket/slice';
import { catalogItemsReducer } from './catalogItems/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['basket', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);
const persistedBasketReducer = persistReducer(persistConfig, basketReducer);

export const store = configureStore({
  reducer: {
    favorite: persistedReducer,
    basket: persistedBasketReducer,
    catalogItems: catalogItemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
