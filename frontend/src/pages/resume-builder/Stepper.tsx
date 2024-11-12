import { FaAddressBook, FaBriefcase, FaCogs } from "react-icons/fa";
import { PiPaperclipThin } from "react-icons/pi";
import { IoMdSchool } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";

const Stepper = ({ number: stepNumber = 2 }) => {
  const steps = [
    { label: "Contacts", icon: <FaAddressBook /> },
    { label: "Summary", icon: <PiPaperclipThin /> },
    { label: "Experience", icon: <FaBriefcase /> },
    { label: "Education", icon: <IoMdSchool /> },
    { label: "Skills", icon: <FaCogs /> },
    { label: "custom", icon: <MdDashboardCustomize /> },
  ];

  return (
    <div className="mt-6 flex justify-between items-center">
      {steps.map((step, index) => (
        <div className="relative w-full flex justify-center" key={index}>
          <span
            className={`w-8 h-8 rounded-full ${
              stepNumber > index
                ? "bg-indigo-700 dark:bg-indigo-500"
                : "bg-indigo-200 dark:bg-gray-600"
            } text-white text-center flex items-center justify-center`}
          >
            {step.icon}
          </span>
          <div
            className={`absolute w-full h-1 ${
              stepNumber > index + 1
                ? "bg-indigo-700 dark:bg-indigo-500"
                : "bg-indigo-200 dark:bg-gray-600"
            } top-1/2 -translate-y-1/2 left-1/2 -z-10 ${
              index + 1 === steps.length ? "hidden" : ""
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
