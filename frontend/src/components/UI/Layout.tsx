import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex dark:bg-dark-background mx-auto">
      <Sidebar />
      <div className=" flex justify-between flex-col w-full min-h-screen ">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
