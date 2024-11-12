import { motion } from "framer-motion";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import AddEducation from "./AddEducation";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";

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
              header="Tell us about your Education"
              paragraph="Highlight your academic Education and provide a comprehensive overview of your educational journey"
            />
            <Stepper number={4} />
            <AddEducation />
          </div>
          <div className=" flex justify-end flex-col items-end gap-7 mt-4">
            <ResumeOverview />
            <NextBtn NextTxt="Skills" link="RecreateEducation" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Eeducation;
