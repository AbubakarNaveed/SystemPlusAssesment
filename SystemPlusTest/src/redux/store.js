import { configureStore } from "@reduxjs/toolkit";
import CommentReducers from "./commentSlice";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: { comments: persistReducer(persistConfig, CommentReducers) },
  middleware: [thunk],
});

export const persistor = persistStore(store);
