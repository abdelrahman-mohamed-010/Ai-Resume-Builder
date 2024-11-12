import React, { useState } from "react";
import { LiaBrainSolid } from "react-icons/lia";
import Stepper from "./Stepper";
import InputField from "./InputField";

const WorkExperienceForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    employer: "",
    country: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  console.log(formData);

  return (
    <>
      <Stepper number={2} />
      <form>
        <div className="text-sm mt-6 font-semibold text-neutral-600 dark:text-neutral-300">
          * indicates a required field
        </div>
        <div className="flex gap-4 mt-4">
          {/* Left Column */}
          <div className="flex w-1/2 flex-col gap-4">
            <InputField
              label="Job Title"
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="e.g., Software Engineer"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <InputField
              label="Employer"
              id="employer"
              name="employer"
              placeholder="e.g., Google"
              value={formData.employer}
              onChange={handleChange}
              type={"text"}
            />
            <div className="w-full">
              <label
                htmlFor="Responsibilities"
                className="block text-neutral-700 mb-2 dark:text-neutral-200"
              >
                Job Responsibilities
              </label>
              <textarea
                rows={5}
                name="Responsibilities"
                id="Responsibilities"
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
              ></textarea>
              <button
                type="button"
                className="bg-primary hover:bg-indigo-800 transition-all rounded-lg px-5 py-3 w-fit font-semibold text-white flex gap-2 items-center mt-2"
              >
                <LiaBrainSolid className="w-6 h-6" /> Generate From AI
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-1/2">
            <InputField
              label="Country"
              type="text"
              id="country"
              name="country"
              placeholder="e.g., USA"
              value={formData.country}
              onChange={handleChange}
            />
            <div className="flex gap-4 w-full">
              <InputField
                label="Start Date"
                id="startDate"
                name="startDate"
                className="w-full"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
              />
              {!formData.currentlyWorking && (
                <InputField
                  label="End Date"
                  id="endDate"
                  className="w-full"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              )}
            </div>
            <div className="w-full flex justify-end">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="currentlyWorking"
                  name="currentlyWorking"
                  checked={formData.currentlyWorking}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <label
                  htmlFor="currentlyWorking"
                  className="text-lg font-semibold dark:text-neutral-200"
                >
                  Currently working here
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default WorkExperienceForm;
