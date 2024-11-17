import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addCertifications, addEducation } from "@/redux/ResumeSlice";

const AddEducation = () => {
  const [formData, setFormData] = useState({
    formType: "education" as "education" | "certificate",
    isCurrently: true,
    university: "",
    degreeType: "diploma",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    certificateTitle: "",
    issuer: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleFormTypeChange = (type: "education" | "certificate") => {
    setFormData((prevState) => ({
      ...prevState,
      formType: type,
      ...(type === "education"
        ? {
            certificateTitle: "",
            issuer: "",
          }
        : {
            university: "",
            degreeType: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
          }),
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      isCurrently: !prevState.isCurrently,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.formType === "education") {
      dispatch(
        addEducation({
          university: formData.university,
          fieldOfStudy: formData.fieldOfStudy,
          degree: formData.degreeType,
          startDate: formData.startDate,
          endDate: formData.endDate,
          present: formData.isCurrently,
        })
      );
    } else {
      dispatch(
        addCertifications({
          title: formData.certificateTitle,
          issuer: formData.issuer,
        })
      );
    }
    navigate("/builder/RecreateEducation");
  };

  return (
    <div className="p-6 mt-6 dark:bg-inherit w-full">
      <div className="flex mb-6">
        <button
          onClick={() => handleFormTypeChange("education")}
          className={`px-4 py-2 mr-2 rounded-lg ${
            formData.formType === "education"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-inherit text-gray-800 dark:text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => handleFormTypeChange("certificate")}
          className={`px-4 py-2 rounded-lg ${
            formData.formType === "certificate"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-inherit text-gray-800 dark:text-white"
          }`}
        >
          Certificate
        </button>
      </div>

      {/* Education Form */}
      <form id="education-form" onSubmit={handleSubmit}>
        {formData.formType === "education" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <InputField
                  label="University/Institute"
                  id="university"
                  name="university"
                  type="text"
                  placeholder="Enter your university or institute name"
                  value={formData.university}
                  onChange={handleInputChange}
                  autoFocus
                  required
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
                    value={formData.degreeType}
                    onChange={handleSelectChange}
                    className="border border-neutral-400 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-900 dark:text-white dark:border-neutral-600 appearance-none"
                    required
                  >
                    <option value="diploma">Diploma</option>
                    <option value="bs">BS</option>
                    <option value="ms">MS</option>
                    <option value="phd">PhD</option>
                    <option value="fieldOfStudy">fieldOfStudy</option>
                  </select>
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <FiChevronDown className="text-gray-500 dark:text-white" />
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <InputField
                  label="Field of Study"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  type="text"
                  placeholder="Enter your Field of Study"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <InputField
                  label="Start Date"
                  id="startDate"
                  name="startDate"
                  required
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Currently checkbox */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="currently"
                checked={formData.isCurrently}
                onChange={handleCheckboxChange}
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
            {!formData.isCurrently && (
              <div className="mb-4">
                <InputField
                  label="End Date"
                  id="endDate"
                  required
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        )}

        {/* Certificate Form */}
        {formData.formType === "certificate" && (
          <div>
            <div className="mb-4">
              <InputField
                label="Certificate Title"
                id="certificateTitle"
                name="certificateTitle"
                type="text"
                required
                placeholder="Enter certificate title"
                value={formData.certificateTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <InputField
                label="Issuer"
                id="issuer"
                required
                name="issuer"
                type="text"
                placeholder="Enter issuer name"
                value={formData.issuer}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddEducation;
