import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../feature/FormPost/slice";
import appSlice from "../slice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    name: appSlice,
  }
})