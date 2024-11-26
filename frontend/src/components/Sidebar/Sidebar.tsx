import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { IoMdPaper } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineArchive, MdOutlineTipsAndUpdates } from "react-icons/md";
import TitleSection from "./TitleSection";
import Option from "./Option";
import ToggleClose from "./ToggleClose";

const Sidebar = () => {
  const isSmallScreen = window.innerWidth < 640;
  const [open, setOpen] = useState(!isSmallScreen);

  useEffect(() => {
    if (isSmallScreen && open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, isSmallScreen]);

  return (
    <>
      {open && isSmallScreen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 dark:opacity-70 z-20 "
          onClick={() => setOpen(false)}
        />
      )}
      <motion.nav
        layout
        className={`sticky top-0 h-screen max-sm:fixed shrink-0 border-r ${
          !open ? "max-sm:border-r-0" : ""
        } border-slate-300 z-30 p-2 bg-light-background dark:bg-dark-background`}
        animate={{
          width: open ? 225 : isSmallScreen ? 0 : 60,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Title Section */}
        <TitleSection open={open} />

        <div className={`space-y-1 ${!open ? " max-sm:hidden" : ""}`}>
          <Option
            Icon={FiHome}
            title="Home"
            open={open}
            path="/"
            setOpen={setOpen}
          />
          <Option
            Icon={IoMdAdd}
            title="Build New Resume"
            path="builder/start"
            open={open}
            setOpen={setOpen}
          />
          <Option
            Icon={MdOutlineArchive}
            title="Resume Archive"
            path="resume-archive"
            open={open}
            notifs={3}
            setOpen={setOpen}
          />
          <Option
            Icon={IoMdPaper}
            title="Build Cover Letter"
            path="select-career"
            open={open}
            setOpen={setOpen}
          />
          <Option
            Icon={MdOutlineTipsAndUpdates}
            title="Tips and Resources"
            path="tips-and-resources"
            open={open}
            setOpen={setOpen}
          />
        </div>

        {/* Toggle button */}
        <ToggleClose open={open} setOpen={setOpen} />
      </motion.nav>
    </>
  );
};

export default Sidebar;
