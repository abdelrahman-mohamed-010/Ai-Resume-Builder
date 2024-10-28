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
    <section className=" bg-gray-100 w-[460px] shadow-lg px-10 pb-6 min-h-screen ">
      <h1 className=" text-center mt-8 mb-2 text-2xl font-bold">
        Your {type} Awaits!
      </h1>
      <p className=" text-center mb-10">Ready to take the next step?</p>
      {/* Export Option */}
      <div className=" font-semibold text-sm mb-5">Export Options</div>
      <button className=" block w-full rounded-3xl bg-black font-bold text-white p-3 mb-3 hover:bg-primary transition-all">
        Download
      </button>
      <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 mb-3 transition-all hover:border-indigo-800 hover:text-indigo-800">
        Print
      </button>
      {type === "Cover Letter" && (
        <button className="block w-full rounded-3xl border-2 text-primary font-bold border-primary p-3 transition-all hover:border-indigo-800 hover:text-indigo-800">
          Email
        </button>
      )}
      <hr className="border-t-2 border-gray-300 my-6 -mx-10" />
      {/* Formatting Options */}
      <div className="font-semibold text-sm mb-4">Formatting Options</div>
      {/* Layout */}
      <p className=" text-sm">Layout</p>
      <div className=" overflow-hidden  flex gap-4 my-3">
        <button
          type="button"
          className={` px-4 py-2 font-semibold border-2  border-primary text-primary  rounded-full mb-2 cursor-pointer transition-all hover:border-indigo-800 hover:text-indigo-800 `}
        >
          Condensed
        </button>
        <button
          type="button"
          className={` px-4 py-2 font-semibold border-2  border-primary text-primary  rounded-full mb-2 cursor-pointer transition-all hover:border-indigo-800 hover:text-indigo-800`}
        >
          Standard
        </button>
        <button
          type="button"
          className={` px-4 py-2 font-semibold border-2  border-primary text-primary  rounded-full mb-2 cursor-pointer transition-all hover:border-indigo-800 hover:text-indigo-800`}
        >
          Expanded
        </button>
      </div>
      {/* Font Options */}
      <div className=" flex justify-between gap-6">
        <div className=" relative w-full">
          <div className="my-2 text-xs">Font Style</div>
          <div className="relative">
            <select
              className={`w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 rounded appearance-none pr-10 focus:outline-none dark:bg-dark-background dark:text-white`}
            >
              <option value="Raleway">Raleway</option>
              <option value="Roboto">Roboto</option>
              <option value="Open Sans">Open Sans</option>
            </select>
            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500 dark:text-white" />
            </span>
          </div>
        </div>
        <div className=" relative w-full">
          <div className=" my-2 text-xs">Font Size</div>
          <div className="relative">
            <select
              className={`w-full p-3 md:p-4 border border-gray-300 dark:border-gray-600 rounded appearance-none pr-10 focus:outline-none  dark:bg-dark-background dark:text-white`}
            >
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Small">Small</option>
            </select>

            <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <FiChevronDown className="text-gray-500 dark:text-white" />
            </span>
          </div>
        </div>
      </div>
      {/* colors */}
      <p className=" text-sm mt-3">Colors</p>
      <div className="flex flex-col items-center">
        <div className="mt-4 flex justify-between w-full">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
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
                <CiNoWaitingSign color="gray" className=" w-8 h-8" />
              ) : (
                color === selectedColor && <FaCheck color="white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentEditor;
