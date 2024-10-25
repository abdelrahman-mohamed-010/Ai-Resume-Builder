import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import SettingsPage from "./pages/SettingsPage";
import SelectCareer from "./pages/SelectCareer";
import ResumeArchive from "./pages/ResumeArchive";

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
        path: "templates",
        element: <div>templates</div>,
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
