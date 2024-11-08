import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/UI/Layout";
import SelectCareer from "./pages/CoverLetter/SelectCareer";
import ResumeArchive from "./pages/ResumeArchive/ResumeArchive";
import Home from "./pages/Home/Home";
import Tips from "./pages/Tips/Tips";
import Finalize_cover from "./pages/CoverLetter/Finalize-cover";
import HowITWorks from "./pages/resume-builder/HowITWorks";
import ContactInfo from "./pages/resume-builder/ContactInfo";
import WorkExperience from "./pages/resume-builder/WorkExprience";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.tsx";
import Skills from "./pages/resume-builder/SkillsPage.tsx";
import RecreateExp from "./pages/resume-builder/RecreateExp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "build-new-resume",
        element: <HowITWorks />,
      },
      {
        path: "builder",
        children: [
          {
            path: "contact-info",
            element: <ContactInfo />,
          },
          {
            path: "experience",
            element: <WorkExperience />,
          },
          {
            path: "RecreateExperience",
            element: <RecreateExp />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "summary",
            element: <summary />,
          },
        ],
      },
      {
        path: "resume-archive",
        element: <ResumeArchive />,
      },
      {
        path: "select-career",
        element: <SelectCareer />,
      },

      {
        path: "finalize-cover",
        element: <Finalize_cover />,
      },
      {
        path: "tips-and-resources",
        element: <Tips />,
      },
      {
        path: "creator",
        element: <div>creator</div>,
      },
    ],
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/SignUp",
    element: <SignUpPage />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
