import { LiaBrainSolid } from "react-icons/lia";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateSummary } from "@/redux/ResumeSlice";
import { useNavigate } from "react-router-dom";

const SummaryTextArea = () => {
  const [customSummary, setCustomSummary] = useState<string>("");
  const [aiGeneratedSummaries, setAiGeneratedSummaries] = useState<string[]>(
    []
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const handleSaveSummary = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateSummary(customSummary));
    navigate("/builder/experience");
  };

  return (
    <>
      <form id="summary-form" onSubmit={handleSaveSummary}>
        <textarea
          className="border border-neutral-400 rounded p-2 mt-8 mb-3 w-full h-[247px] focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
          placeholder="Write your own summary here..."
          autoFocus
          required
          value={customSummary}
          onChange={(e) => setCustomSummary(e.target.value)}
        />
      </form>

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
                  onClick={() => handleAddAISummary(summary)}
                >
                  {summary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </>
  );
};

export default SummaryTextArea;
