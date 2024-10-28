import { useState } from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { IoMdPaper } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineArchive, MdOutlineTipsAndUpdates } from "react-icons/md";
import Option from "./Option";
import TitleSection from "./UI/TitleSection";
import ToggleClose from "./ToggleClose";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <motion.nav
      layout
      className={`sticky top-0 h-screen shrink-0 border-r border-slate-300 z-30 p-2 
        bg-light-background dark:bg-dark-background`}
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option Icon={FiHome} title="Home" open={open} path="/" />
        <Option
          Icon={IoMdAdd}
          title="Build New Resume"
          path="build-new-resume"
          open={open}
        />
        <Option
          Icon={MdOutlineArchive}
          title="Resume Archive"
          path="resume-archive"
          open={open}
          notifs={3}
        />
        <Option
          Icon={IoMdPaper}
          title="Build Cover Letter"
          path="select-career"
          open={open}
        />
        <Option
          Icon={MdOutlineTipsAndUpdates}
          title="Tips and Resources"
          path="tips-and-resources"
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
