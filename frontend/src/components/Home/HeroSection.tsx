import { motion } from "framer-motion";
import { MdVideoLibrary } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import Testmonials from "./Tistmonials";

const HeroSection = () => {
  return (
    <main className="relative flex flex-col items-center justify-center text-center gap-8 min-h-screen bg-light-background text-primary-text dark:bg-dark-background dark:text-light-background">
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-5xl font-extrabold tracking-wide"
      >
        <Typewriter
          words={[
            "Transform Your Resume with AI",
            "Create Professional Resumes in Minutes",
            "Start Building Your Career Today",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-2 text-xl font-semibold text-secondary-text dark:text-light-background"
      >
        Elevate your job application with our easy-to-use tools.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-6 text-lg max-w-2xl text-secondary-text dark:text-light-background z-10"
      >
        Our AI tools help you create a professional, visually appealing resume
        in minutes. Start building your career today.
      </motion.p>

      {/* Buttons Section */}
      <div className="space-x-4 mb-12 flex gap-4">
        <motion.button
          className="bg-primary text-light-background py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 dark:bg-secondary dark:hover:bg-amber-600"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          Get Started
        </motion.button>
        <motion.button
          className="flex items-center bg-secondary text-light-background py-3 px-6 rounded-lg shadow-lg hover:bg-amber-600 dark:bg-primary dark:hover:bg-indigo-700"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MdVideoLibrary className="mr-3 text-2xl" />
          Watch Video
        </motion.button>
      </div>
      <Testmonials />
    </main>
  );
};

export default HeroSection;
