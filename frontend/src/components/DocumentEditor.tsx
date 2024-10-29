import { FiChevronDown } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";

interface DocumentEditorProps {
  type: string;
}

const DocumentEditor: React.FC<DocumentEditorProps> = ({ type }) => {
  const colors = [
    "", // No color (default)
    "#ff0000", // Red
    "#00ff00", // Green
    "#0000ff", // Blue
    "#ffff00", // Yellow
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ffa500", // Orange
    "#800080", // Purple
  ];

  const selectedColor = "";

  return (
    <section className="bg-zinc-50 w-[460px] lg:w-[600px] 3xl:w-[800px] shadow-lg px-10 pb-6 lg:min-h-screen">
      <h1 className="text-center mt-8 mb-2 text-2xl font-bold 3xl:text-3xl">
        Your {type} Awaits!
      </h1>
      <p className="text-center mb-10 3xl:text-lg">
        Ready to take the next step?
      </p>

      {/* Export Options */}
      <div className="font-semibold text-sm mb-5 3xl:text-base">
        Export Options
      </div>
      <button className="block w-full rounded-3xl bg-black font-bold text-white p-3 mb-3 hover:bg-primary transition-all 3xl:p-4">
        Download
      </button>
      <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 mb-3 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:p-4">
        Print
      </button>
      {type === "Cover Letter" && (
        <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:p-4">
          Email
        </button>
      )}

      <hr className="border-t-2 border-gray-300 my-6 -mx-10 3xl:my-8" />

      {/* Formatting Options */}
      <div className="font-semibold text-sm mb-4 3xl:text-base">
        Formatting Options
      </div>

      {/* Layout Options */}
      <p className="text-sm 3xl:text-base">Layout</p>
      <div className="flex gap-4 my-3 3xl:gap-6">
        {["Condensed", "Standard", "Expanded"].map((layout) => (
          <button
            key={layout}
            type="button"
            className="px-4 py-2 font-semibold border-2 border-primary text-primary rounded-full mb-2 transition-all hover:border-indigo-800 hover:text-indigo-800 3xl:px-6 3xl:py-3"
          >
            {layout}
          </button>
        ))}
      </div>

      {/* Font Options */}
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
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500" />
            </span>
          </div>
        ))}
      </div>

      {/* Color Options */}
      <p className="text-sm mt-3 3xl:text-base">Colors</p>
      <div className="flex justify-between w-full mt-4 3xl:mt-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 3xl:w-10 3xl:h-10 rounded-full flex items-center justify-center cursor-pointer ${
              color === selectedColor
                ? "border-2 border-gray-100 outline outline-2 outline-primary"
                : ""
            }`}
            style={{ backgroundColor: color || "transparent" }}
            onClick={() =>
              console.log(`Selected color: ${color || "No Color"}`)
            }
          >
            {color === "" ? (
              <CiNoWaitingSign
                color="gray"
                className="w-8 h-8 3xl:w-10 3xl:h-10"
              />
            ) : (
              color === selectedColor && <FaCheck color="white" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentEditor;
