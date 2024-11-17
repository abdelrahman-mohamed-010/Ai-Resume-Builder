import { FiChevronDown } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateFontSize, updateFontStyle } from "../../redux/coverLetterSlice";
import {
  updateFontSize as updateResumeFontStyle,
  updateFontStyle as updateRsumeFontStyle,
} from "../../redux/ResumeSlice";

const FontOptions: React.FC<{ type: string }> = ({ type }) => {
  const dispatch = useAppDispatch();

  const fontStyle = useAppSelector((state) => state.coverLetter.fontStyle);
  const fontSize = useAppSelector((state) => state.coverLetter.fontSize);

  const handleFontStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "Cover Letter") {
      dispatch(updateFontStyle(e.target.value));
    } else {
      dispatch(updateRsumeFontStyle(e.target.value));
    }
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "Cover Letter") {
      dispatch(updateFontSize(e.target.value));
    } else {
      dispatch(updateResumeFontStyle(e.target.value));
    }
  };

  return (
    <div className="flex justify-between gap-6 3xl:gap-8">
      {[
        {
          label: "Font Style",
          options: ["sans", "serif", "mono"],
          value: fontStyle,
          onChange: handleFontStyleChange,
        },
        {
          label: "Font Size",
          options: ["Medium", "Large", "Small"],
          value: fontSize,
          onChange: handleFontSizeChange,
        },
      ].map(({ label, options, value, onChange }) => (
        <div key={label} className="relative w-full ">
          <div className="my-2 text-xs 3xl:text-sm dark:text-accent">
            {label}
          </div>
          <select
            className="w-full p-3 md:p-4 border border-gray-300 dark:border-none rounded appearance-none pr-10 focus:outline-none 3xl:p-5 capitalize dark:bg-secondary-text dark:text-slate-200"
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 top-1/2 -translate-y-1/2 right-3 flex items-center pointer-events-none">
            <FiChevronDown className="text-gray-500 mt-8 dark:text-slate-200" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default FontOptions;
