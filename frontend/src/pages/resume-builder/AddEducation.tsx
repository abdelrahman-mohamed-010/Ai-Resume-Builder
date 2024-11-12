import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AddEducation = () => {
  const [formType, setFormType] = useState<"education" | "certificate">(
    "education"
  );
  const [isCurrently, setIsCurrently] = useState(true);

  return (
    <div className="p-6 mt-6 dark:bg-inherit w-full">
      <div className="flex mb-6">
        <button
          onClick={() => setFormType("education")}
          className={`px-4 py-2 mr-2 rounded-lg ${
            formType === "education"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-inherit text-gray-800 dark:text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setFormType("certificate")}
          className={`px-4 py-2 rounded-lg ${
            formType === "certificate"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-inherit text-gray-800 dark:text-white"
          }`}
        >
          Certificate
        </button>
      </div>

      {/* Education Form */}
      {formType === "education" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="university"
                className="block text-neutral-700 mb-2 dark:text-neutral-300"
              >
                University/Institute
              </label>
              <input
                id="university"
                name="university"
                type="text"
                autoFocus
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
                placeholder="Enter your university or institute name"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="degreeType"
                className="block text-neutral-700 mb-2 dark:text-neutral-300"
              >
                Degree Type
              </label>
              <div className="relative">
                <select
                  id="degreeType"
                  name="degreeType"
                  className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-900 dark:text-white dark:border-neutral-600 appearance-none"
                >
                  <option value="diploma">Diploma</option>
                  <option value="bs">BS</option>
                  <option value="ms">MS</option>
                  <option value="phd">PhD</option>
                  <option value="course">Course</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <FiChevronDown className="text-gray-500 dark:text-white" />
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="course"
                className="block text-neutral-700 mb-2 dark:text-neutral-300"
              >
                Course/Work
              </label>
              <input
                id="course"
                name="course"
                type="text"
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
                placeholder="Enter your course/work"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="startDate"
                className="block text-neutral-700 mb-2 dark:text-neutral-300"
              >
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
              />
            </div>
          </div>

          {/* Currently checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="currently"
              checked={isCurrently}
              onChange={() => setIsCurrently(!isCurrently)}
              className="mr-2 w-4 h-4"
            />
            <label
              htmlFor="currently"
              className="block text-neutral-700 dark:text-neutral-300"
            >
              Currently studying
            </label>
          </div>

          {/* Conditionally render End Date */}
          {!isCurrently && (
            <div className="mb-4">
              <label
                htmlFor="endDate"
                className="block text-neutral-700 mb-2 dark:text-neutral-300"
              >
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
              />
            </div>
          )}
        </div>
      )}
      {/* Certificate Form */}
      {formType === "certificate" && (
        <div>
          <div className="mb-4">
            <label
              htmlFor="certificateTitle"
              className="block text-neutral-700 mb-2 dark:text-neutral-300"
            >
              Certificate Title
            </label>
            <input
              id="certificateTitle"
              name="certificateTitle"
              type="text"
              className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
              placeholder="Enter certificate title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issuer"
              className="block text-neutral-700 mb-2 dark:text-neutral-300"
            >
              Issuer
            </label>
            <input
              id="issuer"
              name="issuer"
              type="text"
              className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
              placeholder="Enter issuer name"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEducation;
