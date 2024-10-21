import { motion } from "framer-motion";

const newResources = [
  {
    title: "Resume Writing Guide",
    description:
      "A comprehensive guide to crafting a standout resume with actionable tips.",
    image: "https://img.youtube.com/vi/Tt08KmFfIYQ/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=Tt08KmFfIYQ",
  },
  {
    title: "Job Interview Preparation",
    description:
      "Tips and strategies to excel in job interviews and impress your potential employer.",
    image: "https://img.youtube.com/vi/mmQcX6HpCGs/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=mmQcX6HpCGs",
  },
  {
    title: "Cover Letter Tips",
    description:
      "Learn how to write an effective cover letter that complements your resume.",
    image: "https://img.youtube.com/vi/NUhDP30IRKk/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=NUhDP30IRKk",
  },

  {
    title: "Top 5 LinkedIn Profile Tips!",
    description:
      "Optimize your LinkedIn profile to attract recruiters and potential employers.",
    image: "https://img.youtube.com/vi/OKF7ZeWNrfg/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=OKF7ZeWNrfg",
  },
];

const Resources: React.FC = () => {
  return (
    <section className="mb-12 w-full dark:bg-dark-background  rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-primary-text dark:text-light-background mb-6">
        Recommended Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {newResources.map((resource, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white dark:bg-dark-background  rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
            onClick={() => window.open(resource.link, "_blank")}
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="w-full h-auto object-cover mb-4 rounded-md"
              loading="lazy"
              decoding="async"
            />
            <h3 className="text-xl font-semibold text-primary-text dark:text-light-background mb-2">
              {resource.title}
            </h3>
            <p className="text-secondary-text dark:text-light-background text-sm mb-2">
              {resource.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
