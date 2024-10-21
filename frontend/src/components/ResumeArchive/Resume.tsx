import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Resume as ResumeType } from "../../pages/ResumeArchive";
import { motion } from "framer-motion";

interface ResumeProps {
  setResumeList: React.Dispatch<React.SetStateAction<ResumeType[]>>;
  resume: ResumeType;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  const [menuOpen, setMenuOpen] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (id: number) => {
    setMenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.div
      layout
      key={resume.id}
      className="bg-white dark:bg-dark-background border border-gray-200 dark:border-secondary-text rounded-lg shadow-md p-4 relative max-sm:p-2"
    >
      <img
        src={resume.imgUrl}
        alt={resume.title}
        className="w-full h-auto object-cover mb-4 rounded-lg"
        draggable="false"
      />
      <div className="flex justify-between flex-col gap-4">
        <div>
          <h2 className="font-semibold text-purple-600 dark:text-accent text-sm sm:text-base md:text-lg max-w-full truncate">
            {resume.title}
          </h2>
        </div>
        <div className="relative flex flex-row-reverse justify-between gap-2">
          <CiMenuKebab
            className="cursor-pointer w-6 h-6 dark:text-secondary-text mb-1"
            onClick={() => toggleMenu(resume.id)}
          />
          {menuOpen[resume.id] && (
            <div
              draggable={false}
              className="absolute top-6 right-6 flex flex-col bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden tracking-wider z-40"
            >
              <button className="font-semibold bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200 py-2 px-3 text-sm text-nowrap font-sans text-gray-800 dark:text-gray-200 text-left w-full dark:border-none">
                Delete
              </button>
              <button className="font-semibold bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200 py-2 px-3 text-sm text-nowrap font-sans text-gray-800 dark:text-gray-200 text-left w-full dark:border-none">
                Edit
              </button>
              <button className="font-semibold bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-200 py-2 px-3 text-sm text-nowrap font-sans text-gray-800 dark:text-gray-200 text-left w-full dark:border-none">
                View
              </button>
            </div>
          )}
          <p className="text-secondary-text dark:text-secondary-text text-xs sm:text-sm md:text-base max-w-full truncate">
            Last Updated: {resume.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
