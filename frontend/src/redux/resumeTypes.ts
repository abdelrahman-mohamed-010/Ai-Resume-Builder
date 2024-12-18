export interface Experience {
  jobTitle: string;
  employer: string;
  jobResponsibilities: string;
  country: string;
  startDate: string;
  endDate: string;
}

export interface Education {
  university: string;
  fieldOfStudy: string;
  degree: string;
  startDate: string;
  endDate: string;
  present: boolean;
}
// fieldOfStudy: string;
export interface Certification {
  title: string;
  issuer: string;
}

export interface Skill {
  skill: string;
  id: string;
}

export interface Custom {
  custom: string;
  id: number;
}

export interface PersonalInfo {
  firstname?: string;
  surname?: string;
  address?: string;
  phone?: string;
  contactJobRole?: string;
  email?: string;
}

export interface ResumeSliceState {
  personalInfo: PersonalInfo;
  summary: string;
  experiences: Experience[];
  educations: Education[];
  certifications: Certification[];
  skills: Skill[];
  customs: Custom[];
  color: string;
  fontStyle: string;
  fontSize: string;
  layout: string;
}
