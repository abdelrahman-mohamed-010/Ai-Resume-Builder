import ResumeOverview from "./ResumeOverview";
import { motion } from "framer-motion";
import WorkExperienceForm from "./WorkExperienceForm";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";

const ContactInfo = () => {
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
          <PageHeader
            header="Tell us about your work experience"
            paragraph="Include details about your previous jobs, including job title and
            employer."
          />
          <WorkExperienceForm />
        </div>
        <div className="max-w-[360px] flex flex-col gap-6 items-end ">
          <ResumeOverview />
          <NextBtn NextTxt="education" id="ex-form" />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
