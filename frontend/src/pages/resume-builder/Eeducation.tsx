import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import AddEducation from "./AddEducation";
import PageHeader from "./PageHeader";

const Eeducation = () => {
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
            <PageHeader
              header="Tell us about your skills"
              paragraph="Highlight your academic achievements and provide a comprehensive overview of your educational journey"
            />
            <Stepper number={5} />
            <AddEducation />
          </div>
          <div className=" flex justify-end flex-col items-end gap-7 mt-4">
            <ResumeOverview />
            <Link
              to={"/builder/custom"}
              className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 dark:bg-accent dark:text-black w-fit"
            >
              Next : Custom <IoIosArrowForward className=" mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Eeducation;
