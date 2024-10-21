import { FiMoon, FiSun } from "react-icons/fi";

interface DarkModeProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const DarkMode: React.FC<DarkModeProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-secondary-text"
      >
        <span>{isDarkMode ? <FiSun /> : <FiMoon />}</span>
      </button>
    </div>
  );
};

export default DarkMode;
