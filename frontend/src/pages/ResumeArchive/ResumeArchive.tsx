// import { motion } from "framer-motion";
// import { IoMdAdd } from "react-icons/io";
// import { useState } from "react";
// import Resume from "./Resume";

// export interface Resume {
//   id: number;
//   title: string;
//   date: string;
//   imgUrl: string;
// }

// const resumes: Resume[] = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     date: "2023-10-01",
//     imgUrl: "https://via.placeholder.com/120x150",
//   },
//   {
//     id: 2,
//     title: "Backend Developer",
//     date: "2023-09-20",
//     imgUrl: "https://via.placeholder.com/120x150",
//   },
//   {
//     id: 3,
//     title: "Full-Stack Developer",
//     date: "2023-08-15",
//     imgUrl: "https://via.placeholder.com/120x150",
//   },
// ];

// const ResumeArchive = () => {
//   const [resumeList, setResumeList] = useState<Resume[]>(resumes);

//   return (
//     <div className="relative min-h-screen bg-light-background dark:bg-dark-background px-8 py-3">
//       {/* Redesigned Header */}
//       <header className="mb-8 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-8 h-8 text-purple-600 dark:text-purple-400"
//               fill="currentColor"
//             >
//               <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
//             </svg>
//           </motion.div>
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="text-3xl max-sm:text-2xl font-bold text-gray-800 dark:text-white"
//             >
//               Resume Archive
//             </motion.h1>
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               className="text-sm text-gray-500 dark:text-gray-400"
//             >
//               {resumeList.length} Resumes
//             </motion.p>
//           </div>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.1, rotate: 90 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-purple-500 dark:bg-purple-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
//         >
//           <IoMdAdd className="text-2xl font-bold" />
//         </motion.button>
//       </header>

//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-3 lg:grid-cols-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {resumeList.map((resume) => (
//           <Resume
//             resume={resume}
//             setResumeList={setResumeList}
//             key={resume.id}
//           />
//         ))}
//         {resumeList.length <= 0 && (
//           <p className="absolute left-1/2 transform -translate-x-1/2 text-3xl text-gray-500 mt-9">
//             No Resumes
//           </p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ResumeArchive;


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
    <div className="relative min-h-screen bg-light-background dark:bg-dark-background px-8 py-3">
      {/* Redesigned Header */}
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
              fill="currentColor"
            >
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl max-sm:text-2xl font-bold text-gray-800 dark:text-white"
            >
              Resume Archive
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {resumeList.length} Resumes
            </motion.p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          <IoMdAdd className="text-2xl font-bold" />
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