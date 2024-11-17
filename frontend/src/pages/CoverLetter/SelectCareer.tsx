import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "../../components/UI/SubmitButton";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { updateContent } from "@/redux/coverLetterSlice";

interface FormFields {
  careerField: string;
  subCareerField: string;
  WorkAuthorizationStatus: string;
}

const SelectCareer: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOOGLE_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const dispatch = useAppDispatch();

  const fetchAISummary = async (formData: FormFields): Promise<string> => {
    const { careerField, subCareerField, WorkAuthorizationStatus } = formData;
    const prompt = `career: ${careerField}, sub-career: ${subCareerField}, work authorization: ${WorkAuthorizationStatus}. Based on those, give me a CoverLetter without header or finalize just content straight within 7-9 lines.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const onSubmit: SubmitHandler<FormFields> = async (data, event) => {
    event?.preventDefault();
    try {
      const aiSummary = await fetchAISummary(data);
      if (aiSummary) {
        dispatch(updateContent(aiSummary));
      }
      navigate("/finalize-cover");
    } catch (error) {
      setError("root", { message: "Something went wrong. Please try again." });
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const selectStyle =
    "w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 rounded appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-background dark:text-white";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-background dark:bg-dark-background px-4">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-dark-background dark:text-white p-6 md:p-10 rounded-lg border border-gray-300 dark:border-gray-600 w-full max-w-sm md:max-w-md lg:max-w-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-primary dark:text-accent text-center">
          Select Career Path
        </h1>
        <div className="relative mb-4 md:mb-6">
          <label
            htmlFor="careerField"
            className="block text-base md:text-lg mb-2 text-primary-text dark:text-white"
          >
            Career Field
          </label>
          <div className="relative">
            <select
              {...register("careerField", {
                required: "Make Your Selections",
              })}
              className={selectStyle}
            >
              <option value="">Select Career Field</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Sales">Sales</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500 dark:text-white" />
            </span>
          </div>
        </div>

        <div className="relative mb-4 md:mb-6">
          <label
            htmlFor="subCareerField"
            className="block text-base md:text-lg mb-2 text-primary-text dark:text-white"
          >
            Sub-Career Field
          </label>
          <div className="relative">
            <select
              {...register("subCareerField", {
                required: "Make Your Selections",
              })}
              className={selectStyle}
            >
              <option value="">Select Sub-Career Field</option>
              <option value="Sales Representative">Sales Representative</option>
              <option value="Customer Support">Customer Support</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500 dark:text-white" />
            </span>
          </div>
        </div>

        <div className="relative mb-4 md:mb-6">
          <label
            htmlFor="WorkAuthorizationStatus"
            className="block text-base md:text-lg mb-2 text-primary-text dark:text-white"
          >
            Work Authorization Status
          </label>
          <div className="relative">
            <select
              {...register("WorkAuthorizationStatus", {
                required: "Make Your Selections",
              })}
              className={selectStyle}
            >
              <option value="Authorized to work">Authorized to work</option>
              <option value="Needs Sponsorship">Needs Sponsorship</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500 dark:text-white" />
            </span>
          </div>
        </div>

        {/* Error Messages*/}
        <AnimatePresence>
          {Object.keys(errors).length > 0 && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: Object.keys(errors).length > 0 ? "auto" : 0,
                opacity: Object.keys(errors).length > 0 ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {(errors.careerField || errors.subCareerField) && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                  role="alert"
                >
                  <span className="block sm:inline">Make all Selections</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {Object.keys(errors).length > 0 && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: Object.keys(errors).length > 0 ? "auto" : 0,
                opacity: Object.keys(errors).length > 0 ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {errors.root && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                  role="alert"
                >
                  <span className="block sm:inline">{errors.root.message}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex justify-between ">
          <motion.button
            className="w-[48%] px-4 py-3 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-800 text-sm md:text-base flex items-center justify-center border border-gray-300 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            onClick={handleBack}
          >
            <IoReturnDownBackOutline className="text-4xl font-semibold" />
          </motion.button>
          <SubmitButton
            isSubmitting={isSubmitting}
            buttonText="Continue & Next"
          />
        </div>
      </motion.form>
    </div>
  );
};

export default SelectCareer;
