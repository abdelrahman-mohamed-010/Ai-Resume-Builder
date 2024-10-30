import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CoverLetterPreview = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <motion.div
      className="flex flex-col gap-3 items-end"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-2xl p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="mb-6">
          <h1
            className="text-2xl font-bold pb-1 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            Abdelrahman Mohamed
          </h1>
          <hr className="border-gray-300 my-2 focus:outline-dashed focus:outline-2 focus:outline-primary px-2" />
          <p
            className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            Cairo, Egypt
          </p>
          <p
            className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            abdelrahman@example.com
          </p>
          <p
            className="text-gray-600 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            +20 1069175527
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 cursor-default  px-2">{currentDate}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-800 px-2 cursor-default">
            Dear
            <span
              className="focus:outline-dashed focus:outline-2 focus:outline-primary hover:cursor-text"
              contentEditable
              
            >
              [Hiring Manager's Name]
            </span>
            ,
          </p>
          <p
            className="mt-4 text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            I am writing to express my interest in the Frontend Engineer
            position at [Company Name]. My skills in React, JavaScript, and
            modern web development frameworks make me a strong candidate for
            this role, I have a proven track record of building dynamic,
            user-friendly applications that enhance user experience. My
            experience in collaborating with cross-functional teams ensures that
            I can effectively contribute to your projects.
          </p>

          <p className="mt-4 text-gray-800 px-2 cursor-default">
            Thank you for considering my application. I look forward to
            discussing my qualifications further.
          </p>
          <p className="mt-4 text-gray-800 px-2 cursor-default">Sincerely,</p>
          <p
            className="text-gray-800 focus:outline-dashed focus:outline-2 focus:outline-primary px-2"
            contentEditable
          >
            Abdelrahman Mohamed
          </p>
        </div>
      </div>
      <Link
        to={"/select-career"}
        className="w-fit rounded bg-primary hover:bg-indigo-800 transition-all font-bold text-white py-2 px-6"
      >
        Create Another
      </Link>
    </motion.div>
  );
};

export default CoverLetterPreview;
