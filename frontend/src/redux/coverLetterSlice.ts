import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoverLetterState {
  name: string;
  date: string;
  adress: string;
  phone: string;
  gmail: string;
  hr: string;
  content: string;
  lastName: string;
  color: string;
  fontStyle: string;
  fontSize: string;
  layout: string;
}

const initialState: CoverLetterState = {
  name: "[Your Name]",
  date: "10/30/2024",
  phone: "[Your Phone]",
  adress: "[Your Adress]",
  gmail: "[Your Email]",
  hr: "[Hiring Manager's Name]",
  content:
    "I am writing to express my interest in the Frontend Engineer position at [Company Name]. My skills in React, JavaScript, and modern web development frameworks make me a strong candidate for this role, I have a proven track record of building dynamic, user-friendly applications that enhance user experience. My experience in collaborating with cross-functional teams ensures that I can effectively contribute to your projects.",
  lastName: "[Your Name]",
  color: "",
  fontStyle: "sans",
  fontSize: "Medium",
  layout: "Standard",
};

const coverLetterSlice = createSlice({
  name: "coverLetter",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    updateAdress: (state, action: PayloadAction<string>) => {
      state.adress = action.payload;
    },
    updateGmail: (state, action: PayloadAction<string>) => {
      state.gmail = action.payload;
    },
    updateHr: (state, action: PayloadAction<string>) => {
      state.hr = action.payload;
    },
    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    updateColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    updateFontStyle: (state, action: PayloadAction<string>) => {
      state.fontStyle = action.payload;
    },
    updateFontSize: (state, action: PayloadAction<string>) => {
      state.fontSize = action.payload;
    },
    updateLayout: (state, action: PayloadAction<string>) => {
      state.layout = action.payload;
    },
  },
});

export const {
  updateName,
  updateDate,
  updateContent,
  updateColor,
  updateHr,
  updateGmail,
  updateAdress,
  updatePhone,
  updateFontStyle,
  updateFontSize,
  updateLastName,
  updateLayout,
} = coverLetterSlice.actions;

export default coverLetterSlice.reducer;
