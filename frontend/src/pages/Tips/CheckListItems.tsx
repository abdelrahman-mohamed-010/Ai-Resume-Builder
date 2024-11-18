import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

// const checklistItems = [
//   "Tailor your resume for each application.",
//   "Use a clear and professional format.",
//   "Highlight relevant skills and achievements.",
//   "Keep your resume to one page if possible.",
//   "Proofread for spelling and grammatical errors.",
//   "Include quantifiable results in your experience.",
// ];

const checklistItems = [
  "Tailor your resume.",
  "Use a clear format.",
  "Highlight key skills.",
  "Keep it to one page.",
  "Proofread carefully.",
  "Include measurable results.",
];


const ChecklistItems = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(checklistItems.length).fill(false)
  );

  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <section className="w-full  mx-auto p-6 bg-light-background dark:bg-dark-background rounded-lg shadow border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl max-sm:text-xl font-bold max-sm:font-semibold text-primary-text dark:text-light-background mb-6 text-center">
        Resume Preparation Checklist
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {checklistItems.map((item, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg border transition-colors cursor-pointer ${
              checkedItems[index]
                ? "bg-primary text-light-background"
                : "bg-white dark:bg-gray-800 text-primary-text"
            }`}
            onClick={() => handleCheck(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-base font-medium tracking-wide max-sm:text-sm max-sm:font-semibold ${
                  checkedItems[index]
                    ? "text-light-background"
                    : "text-primary-text dark:text-light-background"
                }`}
              >
                {item}
              </span>
              {checkedItems[index] ? (
                <FaCheckCircle className="text-light-background max-sm:text-sm" />
              ) : (
                <AiOutlineCloseCircle className="text-secondary-text" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChecklistItems;
