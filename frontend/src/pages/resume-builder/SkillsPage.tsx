import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Stepper from "./Stepper";
import { IoIosArrowForward } from "react-icons/io";
import ResumeOverview from "./ResumeOverview";
import SkillPicker from "./SkillPicker";
import PageHeader from "./PageHeader";

const SkillsPage = () => {
  return (
    <motion.div
      className="p-8 h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex gap-4 h-fit items-start">
        <div className="w-full">
          <PageHeader
            header="Tell us about your skills"
            paragraph=" Include details about your expertise, such as specific tools,
            technologies, and relevant proficiencies."
          />
          <Stepper number={3} />
          <SkillPicker />
        </div>
        <div className=" max-md:hidden">
          <ResumeOverview />
        </div>
      </div>
      <div className=" flex justify-end mt-8">
        <Link
          to={"/builder/summary"}
          className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 dark:bg-accent dark:text-black  "
        >
          Next : Summary <IoIosArrowForward className=" mt-1" />
        </Link>
      </div>
    </motion.div>
  );
};
export default SkillsPage;
