import { motion } from "framer-motion";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import SkillPicker from "./SkillPicker";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";

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
        <NextBtn NextTxt="Summary" link="summary" />
      </div>
    </motion.div>
  );
};
export default SkillsPage;
