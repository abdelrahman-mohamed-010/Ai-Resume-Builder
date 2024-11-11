import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";

const Custom = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-8 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 h-fit items-end">
        {/* Header with Back Button */}
        <div className=" flex w-full gap-4 items-start">
          <div className=" relative w-full">
            <button
              onClick={() => navigate(-1)}
              className="text-indigo-800 dark:text-indigo-600 font-semibold hover:underline mb-3 flex items-center gap-2 justify-start"
            >
              <FaArrowLeft /> Go Back
            </button>
            <h1 className="font-bold dark:text-white text-2xl sm:text-3xl mb-2">
              Your Custom Section
            </h1>
            {/* Stepper Component */}
            <Stepper number={6} />
            <p className="text-base sm:text-lg mt-8 text-neutral-600 dark:text-neutral-300">
              This is the perfect place to highlight any unique experience or
              skill.
            </p>
          </div>
          <div className=" flex justify-end flex-col items-end gap-7 mt-4">
            <ResumeOverview />
            <Link
              to={"/builder/custom"}
              className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 dark:bg-accent dark:text-black w-fit"
            >
              Next : Preview & Download <IoIosArrowForward className=" mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Custom;
