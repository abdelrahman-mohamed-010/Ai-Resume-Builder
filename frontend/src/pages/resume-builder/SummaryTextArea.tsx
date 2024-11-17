import { LiaBrainSolid } from "react-icons/lia";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateSummary } from "@/redux/ResumeSlice";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useQuery } from "@tanstack/react-query";

const SummaryTextArea = () => {
  const [customSummary, setCustomSummary] = useState<string>("");

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOOGLE_AI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const JobTitle = useAppSelector(
    (state) => state.Resume.personalInfo.contactJobRole
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchAISummary = async (): Promise<string> => {
    const prompt = `Job Title: ${JobTitle}. Based on the job title, give me a summary for my resume within 4-5 lines.`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  const { refetch, isFetching } = useQuery({
    queryKey: ["generateSummary"],
    queryFn: fetchAISummary,
    enabled: false,
  });

  const handleGenerateAISummaries = async () => {
    const result = await refetch();
    if (result.isSuccess && result.data) {
      setCustomSummary(result.data);
    }
  };

  const handleSaveSummary = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateSummary(customSummary));
    navigate("/builder/experience");
  };

  return (
    <>
      <form id="summary-form" onSubmit={handleSaveSummary}>
        <textarea
          className="border border-neutral-400 rounded p-2 mt-8 mb-3 w-full h-[247px] focus:outline-none focus:ring-2 focus:ring-primary dark:bg-inherit dark:text-neutral-100 dark:border-neutral-600"
          placeholder="Write your own summary here..."
          autoFocus
          required
          value={customSummary}
          onChange={(e) => setCustomSummary(e.target.value)}
        />
      </form>

      <button
        type="button"
        onClick={handleGenerateAISummaries}
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
    </>
  );
};

export default SummaryTextArea;
