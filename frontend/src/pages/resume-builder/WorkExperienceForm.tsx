import React, { useState } from "react";
import { LiaBrainSolid } from "react-icons/lia";
import Stepper from "./Stepper";
import InputField from "./InputField";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { addExperience } from "@/redux/ResumeSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useQuery } from "@tanstack/react-query";

const WorkExperienceForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    employer: "",
    country: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    jobResponsibilities: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOOGLE_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const Title = useAppSelector(
    (state) => state.Resume.personalInfo.contactJobRole
  );

  const fetchAISummary = async (): Promise<string> => {
    const prompt = `Job Title: ${
      formData.jobTitle !== "" ? formData.jobTitle : Title
    }. Based on the job title, give me a jobResponsibilities for my resume within 4-5 things and if given jobTitle unknowen say enter known Title or any msg.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const { refetch, isFetching } = useQuery({
    queryKey: ["generateSummary"],
    queryFn: fetchAISummary,
    enabled: false,
  });

  const handleGenerateAIEx = async () => {
    const result = await refetch();
    if (result.isSuccess && result.data) {
      setFormData((prevData) => ({
        ...prevData,
        jobResponsibilities: result.data,
      }));
    }
  };

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addExperience({
        jobTitle: formData.jobTitle,
        employer: formData.employer,
        jobResponsibilities: formData.jobResponsibilities,
        country: formData.country,
        startDate: formData.startDate,
        endDate: formData.currentlyWorking ? "Present" : formData.endDate,
      })
    );
    navigate("/builder/RecreateExperience");
  };

  return (
    <>
      <Stepper number={3} />
      <form id="ex-form" onSubmit={handleSubmit}>
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
              autoFocus
              placeholder="e.g., Software Engineer"
              required
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <InputField
              label="Employer"
              id="employer"
              name="employer"
              placeholder="e.g., Google"
              required
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
                name="jobResponsibilities"
                required
                id="Responsibilities"
                className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
                value={formData.jobResponsibilities}
                onChange={handleChange}
              ></textarea>
              <button
                type="button"
                onClick={handleGenerateAIEx}
                className={`bg-primary hover:bg-indigo-800 transition-all rounded-lg px-4 py-2 w-full sm:w-fit font-semibold text-white flex gap-2 items-center justify-center ${
                  isFetching ? "disabled:cursor-not-allowed" : ""
                }`}
                disabled={isFetching}
              >
                {isFetching ? (
                  <>
                    <span className="w-5 h-5 border-2 border-t-transparent animate-spin rounded-full mr-2"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <LiaBrainSolid className="w-6 h-6" /> Generate From AI
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 w-1/2">
            <InputField
              label="Country"
              type="text"
              required
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
                required
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
                  required
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
