import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    description: "Use pre-written bullets crafted by resume experts.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-yellow-500 dark:text-yellow-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    bgColor: "bg-yellow-100 dark:bg-yellow-800",
  },
  {
    id: 2,
    description: "Select a recruiter-approved template to get noticed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-indigo-400 dark:text-indigo-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    bgColor: "bg-indigo-100 dark:bg-indigo-800",
  },
  {
    id: 3,
    description: "Download or print your new resume!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-green-500 dark:text-green-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
    bgColor: "bg-green-100 dark:bg-green-800",
  },
];

const HowItWorks = () => {
  return (
    <section className="mt-28 max-w-md mx-auto">
      <div className="mx-auto text-center ">
        <div className="text-2xl font-extrabold mb-1 text-primary dark:text-white">
          3 Simple Steps
        </div>
        <h1 className="text-[50px] font-bold text-gray-800 dark:text-white">
          Getting Started
        </h1>
      </div>

      <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 flex flex-col gap-8 justify-center p-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className={`${step.bgColor} p-2 rounded-lg`}>{step.icon}</div>
            <p className="text-lg text-indigo-800 dark:text-indigo-300">
              {step.description}
            </p>
          </motion.div>
        ))}
        <Link
          to={"/builder/contact-info"}
          className="bg-gradient-to-r text-center from-indigo-400 to-indigo-600 text-white py-4 px-6 rounded-full font-semibold shadow-md dark:from-indigo-700 dark:to-indigo-800"
        >
          Let’s Get Started
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
