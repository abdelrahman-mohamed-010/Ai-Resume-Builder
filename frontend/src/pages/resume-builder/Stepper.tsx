import {
  FaAddressBook,
  FaBriefcase,
  FaCogs,
  FaEllipsisH,
} from "react-icons/fa";

const Stepper = ({ number: stepNumber = 2 }) => {
  const steps = [
    { label: "Contacts", icon: <FaAddressBook /> },
    { label: "Experience", icon: <FaBriefcase /> },
    { label: "Skills", icon: <FaCogs /> },
    { label: "Etc", icon: <FaEllipsisH /> },
  ];

  return (
    <div className="mt-6 flex justify-between items-center">
      {steps.map((step, index) => (
        <div className="relative w-full flex justify-center" key={index}>
          <span
            className={`w-8 h-8 rounded-full ${
              stepNumber > index ? "bg-indigo-700" : "bg-indigo-200"
            } text-white text-center flex items-center justify-center`}
          >
            {step.icon}
          </span>
          <div
            className={`absolute w-full h-1 ${
              stepNumber > index + 1 ? "bg-indigo-700" : "bg-indigo-200"
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
