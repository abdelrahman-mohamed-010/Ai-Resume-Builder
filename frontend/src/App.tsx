import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import SelectCareer from "./pages/CoverLetter/SelectCareer";
import ResumeArchive from "./pages/ResumeArchive/ResumeArchive";
import Home from "./pages/Home/Home";
import Tips from "./pages/Tips/Tips"

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
        element: <div>build new resume</div>,
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
