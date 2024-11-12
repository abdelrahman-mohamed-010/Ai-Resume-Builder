import { Link } from "react-router-dom";
import ResumeOverview from "./ResumeOverview";
import ContactInfoForm from "./contactInfoForm";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import PageHeader from "./PageHeader";

const ContactInfo = () => {
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
          <PageHeader
            header="What’s the best way for employers to contact you?"
            paragraph="We suggest including an email and phone number."
          />
          <ContactInfoForm />
        </div>
        <ResumeOverview />
      </div>
      <div className=" flex justify-end  mt-8">
        <Link
          to={"/builder/experience"}
          className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 text-nowrap dark:bg-accent dark:text-black "
        >
          Next : Work Exprience <IoIosArrowForward className=" mt-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
