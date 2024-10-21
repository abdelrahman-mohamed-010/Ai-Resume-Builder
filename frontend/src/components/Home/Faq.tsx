import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "What is an AI Resume Builder?",
      answer:
        "An AI resume builder helps you create a resume using AI-driven suggestions and templates.",
    },
    {
      question: "How do I sign up?",
      answer:
        "Click the 'Get Started' button and follow the prompts to create an account.",
    },
    {
      question: "Can I edit my resume after creating it?",
      answer: "Yes! You can easily edit and update your resume anytime.",
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold mb-4 text-primary dark:text-accent">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-light-background dark:bg-dark-background p-6 rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-middle justify-between"
            onClick={() => toggleFAQ(index)}
            layout
          >
            <div>
              <motion.h3
                className="font-medium w-fit text-primary-text dark:text-secondary-text"
                layout
              >
                {faq.question}
              </motion.h3>
              {expandedFAQ === index && (
                <p className="mt-4 text-secondary-text dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>

            <motion.div
              className="w-6 h-6 text-primary dark:text-accent"
              layout
              animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
            >
              <IoIosArrowDown />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
