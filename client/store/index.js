import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/authSlice.js";
import shopLoginReducer from "./reducers/loggedInShop";
import availableShopsReducer from "./reducers/availableShopsReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  loggedInShop: shopLoginReducer,
  allShops:availableShopsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
