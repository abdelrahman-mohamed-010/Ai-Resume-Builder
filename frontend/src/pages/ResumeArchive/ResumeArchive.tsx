import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import Resume from "./Resume";

export interface Resume {
  id: number;
  title: string;
  date: string;
  imgUrl: string;
}

const resumes: Resume[] = [
  {
    id: 1,
    title: "Frontend Developer",
    date: "2023-10-01",
    imgUrl: "https://via.placeholder.com/120x150",
  },
  {
    id: 2,
    title: "Backend Developer",
    date: "2023-09-20",
    imgUrl: "https://via.placeholder.com/120x150",
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    date: "2023-08-15",
    imgUrl: "https://via.placeholder.com/120x150",
  },
];

const ResumeArchive = () => {
  const [resumeList, setResumeList] = useState<Resume[]>(resumes);

  return (
    <div className=" relative min-h-screen bg-light-background dark:bg-dark-background px-8 py-3">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl max-sm:text-2xl font-bold text-primary-text dark:text-light-background">
          Resume Archive
        </h1>
        <motion.button
          className="px-4 py-2 dark:text-white"
          whileHover={{ scale: 1.1, rotate: 90 }}
        >
          <IoMdAdd className=" font-extrabold text-4xl max-sm:text-3xl" />
        </motion.button>
      </header>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-3 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {resumeList.map((resume) => (
          <Resume
            resume={resume}
            setResumeList={setResumeList}
            key={resume.id}
          />
        ))}
        {resumeList.length <= 0 && (
          <p className="absolute left-1/2 transform -translate-x-1/2 text-3xl text-gray-500 mt-9">
            No Resumes
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ResumeArchive;
