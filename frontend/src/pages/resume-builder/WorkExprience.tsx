import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ResumeOverview from "./ResumeOverview";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import WorkExperienceForm from "./WorkExperienceForm";

const ContactInfo = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-8 h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex gap-4 h-fit ">
        <div className=" w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-800 dark:text-indigo-600 font-semibold hover:underline mb-3 flex items-center gap-2 justify-center"
          >
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="font-bold dark:text-white text-3xl mb-2">
            Tell us about your work experience
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Include details about your previous jobs, including job title and
            employer.
          </p>
          <WorkExperienceForm />
        </div>
        <div className="max-w-[360px] flex flex-col gap-6 items-end ">
          <ResumeOverview />
          <Link
            to={"/builder/RecreateExperience"}
            className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 w-fit dark:bg-accent dark:text-black "
          >
            Next : Skills <IoIosArrowForward className=" mt-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
