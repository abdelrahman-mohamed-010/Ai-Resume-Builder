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
            element: <div>ex</div>,
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
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
