import React, { useState } from "react";
import { MoreVertical, Eye, Edit2, Trash2, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Resume as ResumeType } from "./ResumeArchive";

interface ResumeProps {
  resume: ResumeType;
  setResumeList: React.Dispatch<React.SetStateAction<ResumeType[]>>;
}

const ResumeCard: React.FC<ResumeProps> = ({ resume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transform transition-all hover:shadow-xl"
    >
      {/* Image Container with Overlay */}
      <div className="relative">
        <img
          src={resume.imgUrl}
          alt={resume.title}
          className="w-full object-cover transition-transform duration-300 group-hover:brightness-90"
          draggable="false"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white"
            >
              <Download className="w-5 h-5 text-gray-700" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white"
            >
              <Eye className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
        </div>

        {/* Options Menu */}
        <div className="absolute top-4 right-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors"
          >
            <MoreVertical className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="absolute right-0 top-12 w-48 bg-white dark:bg-gray-700 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden z-50"
              >
                {[
                  { icon: Edit2, text: "Edit", color: "text-blue-500" },
                  { icon: Trash2, text: "Delete", color: "text-red-500" },
                ].map(({ icon: Icon, text, color }) => (
                  <button
                    key={text}
                    className={`w-full flex items-center px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors ${color}`}
                  >
                    <Icon className="w-4 h-4 mr-3 text-gray-500 dark:text-gray-400" />
                    {text}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate max-w-[200px]">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {resume.date}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeCard;
