import { CiNoWaitingSign } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

const ColorOptions = () => {
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
    <>
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
    </>
  );
};

export default ColorOptions;
