import { motion } from "framer-motion";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import TxtEditor from "./TxtEditor";
import PageHeader from "./PageHeader";
import NextBtn from "./NextBtn";

const Custom = () => {
  return (
    <motion.div
      className="p-8 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full flex-col lg:flex-row gap-4 lg:gap-8 h-fit items-end">
        <div className=" flex w-full gap-4 items-start">
          <div className=" relative w-full">
            <PageHeader
              header="Your Custom Section"
              paragraph=" This is the perfect place to highlight any unique experience or
              skill."
            />
            <Stepper number={6} />
            <div className=" mt-7 max-w-[calc(100wh-400px)]">
              <TxtEditor />
            </div>
          </div>
          <div className=" flex justify-end flex-col items-end gap-7 mt-4 ">
            <ResumeOverview />
            <NextBtn NextTxt="Preview & Download" link="RecreateCustom" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Custom;
