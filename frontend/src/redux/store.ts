import { configureStore } from "@reduxjs/toolkit";
import coverLetterReducer from "./coverLetterSlice";

const store = configureStore({
  reducer: {
    coverLetter: coverLetterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
