import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ResumeOverview from "./ResumeOverview";
import ContactInfoForm from "./contactInfoForm";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const ContactInfo = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-8 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex gap-4 h-fit items-end">
        <div className=" w-full">
          <button
            onClick={() => navigate(-1)}
            className="text-indigo-800 font-semibold hover:underline mb-3 flex items-center gap-2 justify-center"
          >
            <FaArrowLeft /> Go Back
          </button>
          <h1 className="font-bold text-3xl mb-2">
            What’s the best way for employers to contact you?
          </h1>
          <p className=" text-lg text-neutral-600">
            We suggest including an email and phone number.
          </p>
          <ContactInfoForm />
        </div>
        <ResumeOverview />
      </div>
      <div className=" flex justify-end  mt-8">
        <Link
          to={"/builder/experience"}
          className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 text-nowrap "
        >
          Next : Work Exprience <IoIosArrowForward className=" mt-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
