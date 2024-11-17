import { CiNoWaitingSign } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateColor } from "../../redux/coverLetterSlice";
import { updateColor as updateResumeColor } from "../../redux/ResumeSlice";

const ColorOptions: React.FC<{ type: string }> = ({ type }) => {
  const colors = [
    "", // No color (default)
    "#4B0082", // Indigo
    "#007BFF", // Light Blue
    "#28A745", // Success Green
    "#FFC107", // Amber
    "#17A2B8", // Teal
    "#6C757D", // Gray
    "#FF6F61", // Coral
    "#6F42C1", // Violet
  ];

  const dispatch = useAppDispatch();

  const colorStyle = useAppSelector((state) => state.coverLetter.color);

  const handleUpdateColorStyle = (color: string) => {
    if (type === "Cover Letter") {
      dispatch(updateColor(color));
    } else {
      dispatch(updateResumeColor(color));
    }
  };

  return (
    <>
      <p className="text-sm mt-3 3xl:text-base dark:text-accent">Colors</p>
      <div className="flex justify-between w-full mt-4 3xl:mt-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 3xl:w-10 3xl:h-10 rounded-full flex items-center justify-center cursor-pointer ${
              color === colorStyle
                ? "border-2 border-gray-100 dark:border-transparent outline outline-2 outline-primary"
                : ""
            }`}
            style={{ backgroundColor: color || "transparent" }}
            onClick={() => handleUpdateColorStyle(color)}
          >
            {color === "" ? (
              <CiNoWaitingSign
                color="gray"
                className="w-8 h-8 3xl:w-10 3xl:h-10"
              />
            ) : (
              color === colorStyle && <FaCheck color="white" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorOptions;
