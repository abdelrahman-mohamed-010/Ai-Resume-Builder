import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import DarkMode from "../../components/UI/DarkMode";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <header className="pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold hidden sm:block">AI Resume Builder</h1>
      <h1 className="text-2xl font-bold block sm:hidden bg-gradient-to-r from-gray-900 dark:from-gray-100 via-gray-500 dark:via-gray-300 to-gray-300 dark:to-gray-500 text-transparent bg-clip-text ">
        ResumeGenie
      </h1>

      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        {/* Login/Logout Button */}
        <button
          onClick={handleLoginLogout}
          className={`flex items-center max-sm:px-4 max-sm:py-1 max-sm:rounded-lg justify-center py-2 px-6 rounded-full shadow transition duration-300 ${
            isLoggedIn
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-700 text-white hover:bg-gray-800"
          }`}
          style={{ height: "40px" }}
        >
          {isLoggedIn ? (
            <>
              <AiOutlineLogout className="mr-2" />
              Logout
            </>
          ) : (
            <>
              <AiOutlineLogin className="mr-2" />
              Login
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
