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
      <div className=" flex gap-4 h-fit items-end">
        <div className="w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-800 font-semibold hover:underline mb-3 flex items-center gap-2 justify-center"
          >
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="font-bold text-3xl mb-2">
            Tell us about your work experience
          </h1>
          <p className="text-lg text-neutral-600">
            Include details about your previous jobs, including job title and
            employer.
          </p>
          <WorkExperienceForm />
        </div>
        <ResumeOverview />
      </div>
      <div className=" flex justify-end mt-8">
        <Link
          to={"/builder/experience"}
          className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 "
        >
          Next : Skills <IoIosArrowForward className=" mt-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
