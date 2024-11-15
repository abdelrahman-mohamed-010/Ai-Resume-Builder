import { configureStore } from "@reduxjs/toolkit";
import coverLetterReducer from "./coverLetterSlice";
import resumeReducer from "./ResumeSlice";

const store = configureStore({
  reducer: {
    coverLetter: coverLetterReducer,
    Resume: resumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
