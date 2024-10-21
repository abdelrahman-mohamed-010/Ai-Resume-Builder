import { motion } from "framer-motion";
import ChecklistItems from "../components/Tips/CheckListItems";
import Resources from "../components/Tips/Resources";

const tips = [
  {
    emoji: "🤖",
    title: "Highlight Key Skills",
    description:
      "Focus on your most relevant skills to make your resume stand out.",
  },
  {
    emoji: "🛠️",
    title: "Include Relevant Tools",
    description:
      "Mention specific tools and technologies you are proficient in to enhance your qualifications.",
  },
  {
    emoji: "🌟",
    title: "Keep It Concise",
    description:
      "Limit your resume to one page if possible, focusing on the most important information.",
  },
];

const TipsPage: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full justify-center min-h-screen bg-light-background dark:bg-dark-background px-8 py-4"
    >
      {/* Tips Section */}
      <section className=" w-full">
        <h2 className="text-2xl font-semibold text-primary-text dark:text-light-background mb-4">
          Essential Tips for Your Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tips.map((tip) => (
            <div className="flex flex-col items-center bg-white dark:bg-dark-background  rounded-lg p-6 transition-transform hover:scale-105">
              <span className="text-6xl mb-4">{tip.emoji}</span>
              <h3 className="text-xl font-semibold text-primary-text dark:text-light-background mb-2 ">
                {tip.title}
              </h3>
              <p className="text-secondary-text text-center dark:text-secondary-text">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Resources />
      <ChecklistItems />
    </motion.main>
  );
};

export default TipsPage;
