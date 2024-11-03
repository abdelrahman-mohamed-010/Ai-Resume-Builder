import React, { useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import { TbFileTypeTxt } from "react-icons/tb";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

interface DownloadOption {
  id: string;
  label: string;
  icon: JSX.Element;
}
interface DownloadModalProps {
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string>("PDF");

  const options: DownloadOption[] = [
    {
      id: "horizontal-list-radio-pdf",
      label: "PDF",
      icon: <BsFileEarmarkPdf className="w-5 h-5 mr-2" />,
    },
    {
      id: "horizontal-list-radio-word",
      label: "Word",
      icon: <FaRegFileWord className="w-5 h-5 mr-2" />,
    },
    {
      id: "horizontal-list-radio-txt",
      label: "Text",
      icon: <TbFileTypeTxt className="w-5 h-5 mr-2" />,
    },
  ];

  const handleChange = (option: DownloadOption) => {
    setSelectedOption(option.label);
  };

  return (
    <motion.div
      className="bg-white shadow-lg max-w-md w-full p-6 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <IoClose
        className=" absolute top-2 right-2 font-semibold w-6 h-6 cursor-pointer"
        onClick={onClose}
      />
      <h1 className="text-xl font-bold mb-4">
        How would you like to download your letter?
      </h1>
      <ul className="items-center w-full text-sm font-sm text-gray-900 bg-white border border-gray-200 rounded sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((option, index) => (
          <li
            key={option.id}
            className={`w-full text-nowrap cursor-pointer ${
              index < options.length - 1
                ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                : ""
            } dark:border-gray-600`}
            onClick={() => handleChange(option)}
          >
            <div className="flex items-center ps-3">
              <input
                id={option.id}
                type="radio"
                value={option.label}
                checked={selectedOption === option.label}
                name="list-radio"
                readOnly
                className="w-4 h-4 cursor-pointer bg-gray-100 border-gray-300"
              />
              <label
                htmlFor={option.id}
                className="cursor-pointer flex items-center w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {option.icon}
                {option.label}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-primary hover:bg-indigo-700 transition-all font-semibold text-white rounded px-4 py-2 mt-4">
        Download
      </button>
    </motion.div>
  );
};

export default DownloadModal;
