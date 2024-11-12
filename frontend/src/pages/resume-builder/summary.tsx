import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { LiaBrainSolid } from "react-icons/lia";
import { useState } from "react";
import Stepper from "./Stepper";
import ResumeOverview from "./ResumeOverview";
import PageHeader from "./PageHeader";

const Summary = () => {
  const [customSummary, setCustomSummary] = useState<string>("");
  const [aiGeneratedSummaries, setAiGeneratedSummaries] = useState<string[]>(
    []
  );

  const handleAddAISummary = (summary: string) => {
    setCustomSummary(summary);
  };

  const handleGenerateAISummaries = () => {
    const newSummaries = [
      "Passionate full-stack developer with extensive experience in building, maintaining, and optimizing web applications. Proficient in both frontend and backend development, with a commitment to delivering scalable, user-friendly solutions that enhance the digital experience.",
      "Highly skilled in React and TypeScript, with a strong focus on creating scalable and maintainable frontend architectures. Experienced in building complex, responsive applications that prioritize performance, user experience, and modern web standards.",
      "Innovative problem solver with a proven track record of enhancing web application efficiency and performance. Adept at analyzing requirements and implementing strategic solutions that address core challenges while improving overall functionality and usability.",
    ];

    setAiGeneratedSummaries(newSummaries);
  };

  const summaryVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

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
          <div className=" w-full">
            <PageHeader
              header="Summarize Your Experience"
              paragraph="Write a brief summary or let AI generate suggestions for you."
            />
            <Stepper number={4} />
            {/* Custom Summary Input and AI-Generated Section */}
            <textarea
              className="w-full p-2 mt-8 mb-3 rounded-md border border-neutral-300  h-[247px] dark:bg-inherit dark:border-neutral-700 dark:text-white"
              placeholder="Write your own summary here..."
              autoFocus
              value={customSummary}
              onChange={(e) => setCustomSummary(e.target.value)}
            />
            {/* Generate from AI Button */}
            <button
              type="button"
              onClick={handleGenerateAISummaries}
              className="bg-primary hover:bg-indigo-800 transition-all rounded-lg px-4 py-2 w-full sm:w-fit font-semibold text-white flex gap-2 items-center justify-center"
            >
              <LiaBrainSolid className="w-6 h-6" /> Generate From AI
            </button>
            {/* Display AI-Generated Summaries with Staggered Animation */}
            {aiGeneratedSummaries.length > 0 && (
              <>
                <h3 className="font-semibold text-lg mt-6 mb-3 dark:text-white">
                  AI-Generated Suggestions
                </h3>
                <motion.div
                  className="space-y-4"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    animate: { transition: { staggerChildren: 0.3 } },
                  }}
                >
                  {aiGeneratedSummaries.map((summary, index) => (
                    <motion.div
                      key={index}
                      className="p-3 flex justify-between items-start"
                      variants={summaryVariants}
                    >
                      <p
                        className="text-neutral-700 dark:text-neutral-300 flex-1 mr-3 hover:scale-105 transition-all cursor-pointer"
                        onClick={() => handleAddAISummary(summary)} // Set clicked AI summary to textarea
                      >
                        {summary}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
          <div className=" flex justify-end flex-col items-end gap-8">
            <ResumeOverview />{" "}
            <Link
              to={"/builder/education"}
              className=" bg-black px-5 py-3 text-lg rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-1 dark:bg-accent dark:text-black w-fit"
            >
              Next : Education <IoIosArrowForward className=" mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
