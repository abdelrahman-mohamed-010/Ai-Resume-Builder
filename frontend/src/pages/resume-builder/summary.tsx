import { motion } from "framer-motion";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";
import SummaryTextArea from "./SummaryTextArea";

const Summary = () => {
  return (
    <motion.div
      className="p-8 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 h-fit items-end">
        <div className=" flex w-full gap-4 items-start max-sm:flex-col max-sm:items-end">
          <div className=" w-full">
            <PageHeader
              header="Summarize Your Experience"
              paragraph="Write a brief summary or let AI generate suggestions for you."
            />
            <Stepper number={2} />
            <SummaryTextArea />
          </div>
          <div className=" flex justify-end flex-col items-end gap-8">
            <ResumeOverview />
            <NextBtn NextTxt="Work Exprience" id={"summary-form"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
