import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "./Stepper";
import { IoIosArrowForward } from "react-icons/io";
import ResumeOverview from "./ResumeOverview";
import SkillPicker from "./SkillPicker";

const SkillsPage = () => {
  const navigate = useNavigate();

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
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-800 dark:text-indigo-600 font-semibold hover:underline mb-3 flex items-center gap-2 justify-center"
          >
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="font-bold text-3xl dark:text-white mb-2">
            Tell us about your skills
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Include details about your expertise, such as specific tools,
            technologies, and relevant proficiencies.
          </p>
          <Stepper number={3} />
          <SkillPicker />
        </div>
        <ResumeOverview />
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
