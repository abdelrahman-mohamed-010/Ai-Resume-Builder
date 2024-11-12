import ResumeOverview from "./ResumeOverview";
import ContactInfoForm from "./contactInfoForm";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";

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
        <NextBtn NextTxt="Work Exprience" link="experience" />
      </div>
    </motion.div>
  );
};

export default ContactInfo;
