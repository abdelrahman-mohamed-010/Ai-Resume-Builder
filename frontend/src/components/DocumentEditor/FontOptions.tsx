import { FiChevronDown } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateFontSize, updateFontStyle } from "../../redux/coverLetterSlice";

const FontOptions = () => {
  const dispatch = useAppDispatch();

  const fontStyle = useAppSelector((state) => state.coverLetter.fontStyle);
  const fontSize = useAppSelector((state) => state.coverLetter.fontSize);

  const handleFontStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateFontStyle(e.target.value));
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateFontSize(e.target.value));
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
        <div key={label} className="relative w-full">
          <div className="my-2 text-xs 3xl:text-sm">{label}</div>
          <select
            className="w-full p-3 md:p-4 border border-gray-300 rounded appearance-none pr-10 focus:outline-none 3xl:p-5 capitalize"
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
            <FiChevronDown className="text-gray-500 mt-8" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default FontOptions;
