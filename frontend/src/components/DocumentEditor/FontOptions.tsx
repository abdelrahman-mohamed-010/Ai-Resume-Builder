import { FiChevronDown } from "react-icons/fi";

const FontOptions = () => {
  return (
    <div className="flex justify-between gap-6 3xl:gap-8">
      {[
        { label: "Font Style", options: ["Raleway", "Roboto", "Open Sans"] },
        { label: "Font Size", options: ["Medium", "Large", "Small"] },
      ].map(({ label, options }) => (
        <div key={label} className="relative w-full">
          <div className="my-2 text-xs 3xl:text-sm">{label}</div>
          <select className="w-full p-3 md:p-4 border border-gray-300 rounded appearance-none pr-10 focus:outline-none 3xl:p-5">
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
