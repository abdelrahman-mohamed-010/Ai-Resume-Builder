import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className=" bg-light-background dark:bg-dark-background rounded-lg "
    >
      <h2 className="tracking-wide text-4xl max-sm:text-2xl font-bold mb-6 text-center">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: "⚡", title: "AI-Powered Resume Suggestions" },
          { icon: "🎨", title: "Customizable Templates" },
          { icon: "📄", title: "Export in PDF or Word Formats" },
          { icon: "📝", title: "Cover Letter Generator" },
          { icon: "🌟", title: "Step-by-Step Guidance" },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-6 border rounded-lg bg-white dark:bg-gray-800"
          >
            <div className="lg:text-4xl md:text-2xl text-primary mr-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold max-sm:text-sm text-primary-text dark:text-secondary-text ">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Features
