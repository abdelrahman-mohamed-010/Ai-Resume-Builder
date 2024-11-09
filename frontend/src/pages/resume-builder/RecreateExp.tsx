import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecreateExp: React.FC = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen bg-light-background dark:bg-dark-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Background: Neon Grid */}
      <div className="absolute inset-0 hidden md:grid grid-cols-10 grid-rows-10 gap-4 pointer-events-none ">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-full border-t-2 border-l-2 border-indigo-600 dark:border-indigo-300 opacity-30"
            style={{
              transform: `rotate(${(i * 10) % 360}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: Math.random(),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central Rotating Glass Panel */}
      <motion.div
        initial={{ scale: 0.9, rotateY: 0 }}
        animate={{ scale: 1, rotateY: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="relative bg-white dark:bg-dark-background bg-opacity-30 backdrop-blur-2xl p-12 rounded-3xl shadow-lg border border-indigo-300 max-w-md mx-auto text-center transform-gpu"
      >
        {/* 3D Icon with Layered Glow */}
        <div className="relative justify-center mb-6 flex">
          <AiOutlineCheckCircle className="text-8xl text-indigo-600 dark:text-indigo-400 drop-shadow-lg" />
          <motion.div
            className="absolute inset-0 text-indigo-300 dark:text-indigo-600 blur-3xl opacity-70"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.2 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
          >
            <AiOutlineCheckCircle />
          </motion.div>
        </div>

        {/* Main Text with Multiple Layers */}
        <h2 className="text-4xl font-extrabold mb-2 tracking-wide text-gray-900 dark:text-white relative">
          SUCCESS!
          <span className="absolute inset-0 text-indigo-400 dark:text-indigo-300 opacity-10 blur-sm -z-10">
            SUCCESS!
          </span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-300 font-semibold mb-8">
          Your experience has been added seamlessly.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col space-y-4 items-center">
          {/* Add Another Experience Button */}
          <motion.button
            className="relative px-10 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg tracking-widest transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Add another experience")}
          >
            <Link to={"/builder/experience"} className="relative z-10">
              Add Another Experience
            </Link>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur-lg rounded-full opacity-50"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.button>
          <Link to={"/builder/skills"}
            className="px-8 py-2 border border-indigo-500 text-indigo-600 font-semibold rounded-full shadow-sm dark:text-white transition duration-300"
            onClick={() => console.log("Proceed to next step")}
          >
            Skip / Finish
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecreateExp;
