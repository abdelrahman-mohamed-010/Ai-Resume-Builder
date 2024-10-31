import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CoverHeader from "./CoverHeader";
import { useAppSelector } from "../../hooks/reduxHooks";
import CoverLetterContent from "./CoverLetterContent";
import ClosingName from "./ClosingName";

const CoverLetterPreview = () => {
  const currentDate = new Date().toLocaleDateString();

  const layoutStyle = useAppSelector((state) => state.coverLetter.layout);
  const colorStyle = useAppSelector((state) => state.coverLetter.color);
  const fontStyle = useAppSelector((state) => state.coverLetter.fontStyle);
  const fontSize = useAppSelector((state) => state.coverLetter.fontSize);

  return (
    <motion.div
      className={`flex flex-col gap-3 items-end py-12 ${
        fontStyle === "serif"
          ? "font-serif"
          : fontStyle === "sans"
          ? "font-sans"
          : ""
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`max-w-2xl p-8 border border-gray-300 rounded-lg shadow-lg bg-white ${
          layoutStyle === "Expanded"
            ? " px-4"
            : layoutStyle === "Condensed"
            ? "px-12"
            : ""
        } text-${
          fontSize === "Large" ? "lg" : fontSize === "Small" ? "sm" : ""
        }`}
        style={{ color: colorStyle || "" }}
      >
        <CoverHeader />
        <div className="mb-6">
          <p className="text-gray-600 cursor-default  px-2">{currentDate}</p>
        </div>

        <div className="mb-6">
          <CoverLetterContent />
          <p className="mt-4 text-gray-800 px-2 cursor-default">
            Thank you for considering my application. I look forward to
            discussing my qualifications further.
          </p>
          <p className="mt-4 text-gray-800 px-2 cursor-default">Sincerely,</p>
          <ClosingName />
        </div>
      </div>
      <Link
        to={"/select-career"}
        className="w-fit rounded bg-primary hover:bg-indigo-800 transition-all font-bold text-white py-2 px-6"
      >
        Create Another
      </Link>
    </motion.div>
  );
};

export default CoverLetterPreview;
