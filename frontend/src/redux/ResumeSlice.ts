import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Education,
  Experience,
  PersonalInfo,
  ResumeSliceState,
  Certification,
  Skill,
  Custom,
} from "./resumeTypes";

const initialState: ResumeSliceState = {
  personalInfo: {},
  summary: "",
  experiences: [],
  educations: [],
  certifications: [],
  skills: [],
  customs: [],
  color: "",
  fontStyle: "sans",
  fontSize: "Medium",
  layout: "Standard",
};

const resumeSlice = createSlice({
  name: "Resume",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    updateSummary: (state, action: PayloadAction<string>) => {
      state.summary = action.payload;
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
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.experiences.push(action.payload);
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      state.experiences.splice(action.payload, 1);
    },
    addEducation: (state, action: PayloadAction<Education>) => {
      state.educations.push(action.payload);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.educations.splice(action.payload, 1);
    },
    addCertifications: (state, action: PayloadAction<Certification>) => {
      state.certifications.push(action.payload);
    },
    removeCertification: (state, action: PayloadAction<number>) => {
      state.certifications.splice(action.payload, 1);
    },
    setSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
    removeSkillById: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
    addCustom: (state, action: PayloadAction<Custom>) => {
      state.customs.push(action.payload);
    },
    removeCustomById: (state, action: PayloadAction<string>) => {
      state.customs = state.customs.filter(
        (custom) => custom.id !== action.payload
      );
    },
  },
});

export const {
  updatePersonalInfo,
  updateSummary,
  updateColor,
  updateFontStyle,
  updateFontSize,
  updateLayout,
  addExperience,
  removeExperience,
  addEducation,
  removeEducation,
  addCertifications,
  removeCertification,
  setSkills,
  removeSkillById,
  addCustom,
  removeCustomById,
} = resumeSlice.actions;

export default resumeSlice.reducer;

// dispatch(
//   addExperience({
//     jobTitle: "Software Engineer",
//     employer: "Company ABC",
//     jobResponsibilities: "Developing web applications",
//     country: "USA",
//     startDate: "2020-01-01",
//     endDate: "Present", // Or an actual end date
//   })
// );

// --------------------

//  dispatch(
//    updatePersonalInfo({
//      firstname: "John",
//      surname: "Doe",
//      address: "123 Street",
//      postalcode: "12345",
//      phone: "123-456-7890",
//      contactJobRole: "Developer",
//      email: "john.doe@example.com",
//    })
//  );

// ------------------

// const newSkills = [
//   { skill: "JavaScript", id: "1" },
//   { skill: "React", id: "2" },
//   { skill: "Redux", id: "3" },
// ];

// dispatch(setSkills(newSkills));
// dispatch(removeSkillById("2"));

// ------------------

// const newCustom = { custom: "Custom Item Example", id: "1" };

// dispatch(addCustom(newCustom));

// dispatch(removeCustomById("1"));
