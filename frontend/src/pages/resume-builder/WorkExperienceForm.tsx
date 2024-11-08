import { useState } from "react";
import { LiaBrainSolid } from "react-icons/lia";
import Stepper from "./Stepper";

const WorkExperienceForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    employer: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <Stepper number={2} />
      <form>
        <div className="text-sm mt-6 font-semibold text-neutral-600">
          * indicates a required field
        </div>
        <div className="flex gap-4 mt-4">
          {/* Left Column */}
          <div className="flex w-1/2 flex-col gap-4 ">
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-neutral-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                placeholder="e.g., Software Engineer"
              />
            </div>

            {/* Employer */}
            <div>
              <label htmlFor="employer" className="block text-neutral-700 mb-2">
                Employer
              </label>
              <input
                type="text"
                id="employer"
                name="employer"
                value={formData.employer}
                onChange={handleChange}
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                placeholder="e.g., Google"
              />
            </div>

            <div className=" w-full">
              <label
                htmlFor="Responsibilities"
                className="block text-neutral-700 mb-2"
              >
                Job Responsibilities
              </label>
              <textarea
                rows={5}
                name="Responsibilities"
                id="Responsibilities"
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary "
              ></textarea>
              <button
                type="button"
                className=" bg-primary hover:bg-indigo-800 transition-all rounded-lg px-5 py-3 w-fit font-semibold text-white flex gap-2 items-center"
              >
                <LiaBrainSolid className=" w-6 h-6" /> Generate From Ai
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-1/2">
            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-neutral-700 mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                placeholder="e.g., USA"
              />
            </div>

            {/* Start Date */}
            <div className=" flex gap-4 w-full ">
              <div className=" w-full">
                <label
                  htmlFor="startDate"
                  className="block text-neutral-700 mb-2"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                />
              </div>
              {!formData.currentlyWorking && (
                <div className=" w-full">
                  <label
                    htmlFor="endDate"
                    className="block text-neutral-700 mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="border border-neutral-400 rounded p-3 w-full focus:border-transparent focus:outline-2 focus:outline-primary"
                  />
                </div>
              )}
            </div>
            <div className=" w-full flex  justify-end">
              {" "}
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
                  className="text-lg font-semibold"
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
